import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

interface ApiNode {
  id: string;
  type: string;
  meta?: Record<string, unknown>;
}

interface CourseApi {
  course: {
    code: string;
  };
  nodes: ApiNode[];
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as CourseApi;

describe("course shape", () => {
  it("sums assessment weights to exactly 100", () => {
    const assessments = api.nodes.filter((node) => node.type === "assessments");
    const total = assessments.reduce((sum, node) => sum + Number(node.meta?.weight ?? 0), 0);
    expect(total).toBe(100);
  });

  it("builds at least one lecture's slides to a real deck page", () => {
    const withSlides = api.nodes.filter(
      (node) => node.type === "lectures" && typeof node.meta?.slides === "string",
    );
    expect(withSlides.length).toBeGreaterThan(0);

    const resolved = withSlides.some((node) => {
      const slug = String(node.meta?.slides).match(/^\/decks\/([a-z0-9-]+)\/$/)?.[1];
      return slug !== undefined && existsSync(resolve(`dist/decks/${slug}/index.html`));
    });
    expect(resolved).toBe(true);
  });

  it("keeps the fixed course-code suffix", () => {
    expect(api.course.code).toMatch(/SLOP\d446$/);
  });
});
