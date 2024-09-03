import { test } from "node:test";
import assert from "node:assert";
import sum from "./index.js";

test("uji 1: hanya salah satu atau bahkan keduanya yang bukan merupakan number maksimum", (t) => {
  assert.strictEqual(sum("1", 2), 0);
  assert.strictEqual(sum(1, "2"), 0);
  assert.strictEqual(sum("1", "2"), 0);
  assert.strictEqual(sum(null, 2), 0);
  assert.strictEqual(sum(1, null), 0);
});

test("uji 2: undefined", (t) => {
  assert.strictEqual(sum(undefined, 2), 0);
  assert.strictEqual(sum(1), 0);
});

test("uji 3: keduanya positif", (t) => {
  assert.strictEqual(sum(1, 2), 3);
  assert.strictEqual(sum(15, 20), 35);
  assert.strictEqual(sum(100, 500), 600);
});

test("uji 4: salah satunya bernilai negatif", (t) => {
  assert.strictEqual(sum(-1, 1), 0);
  assert.strictEqual(sum(-10, 10), 0);
  assert.strictEqual(sum(300, -300), 0);
});

test("uji 5: keduanya bernilai negatif", (t) => {
  assert.strictEqual(sum(-1, -1), 0);
  assert.strictEqual(sum(-10, -10), 0);
  assert.strictEqual(sum(-500, -500), 0);
});
