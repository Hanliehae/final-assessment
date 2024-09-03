import { test } from "node:test";
import assert from "node:assert";
import { sum } from "./index.js";

test("Hasil fungsi sum dengan test", () => {
  console.log(`sum(1, 1) = ${sum(1, 1)}`);
  assert.strictEqual(sum(1, 1), 2, "Test sum(1, 1) gagal");
  console.log(`sum(-1, 1) = ${sum(-1, 1)}`);
  assert.strictEqual(sum(-1, 1), 0, "Test sum(-1, 1) gagal");
  console.log(`sum(0, 0) = ${sum(0, 0)}`);
  assert.strictEqual(sum(0, 0), 0, "Test sum(0, 0) gagal");
  console.log(`sum(2, -3) = ${sum(2, -3)}`);
  assert.strictEqual(sum(2, -3), -1, "Test sum(2, -3) gagal");
});
