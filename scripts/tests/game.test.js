/**
 * @jest-environment jsdom
 */

const { describe } = require("node:test");
const { text } = require("stream/consumers");

beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("game object contains correct keys", () => {
    text("score key exists", () => {
        expect("score" in game).toBe(true);
    });
});