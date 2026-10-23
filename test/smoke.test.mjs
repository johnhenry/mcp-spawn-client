import { test } from "node:test";
import assert from "node:assert/strict";
import spawnClient, { spawnClient as named } from "../index.mjs";

test("exports spawnClient", () => {
  assert.equal(typeof spawnClient, "function");
  assert.equal(named, spawnClient);
});
