"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var article_1 = require("./article");
describe('Article unit tests', function () {
    it('Has correct title', function () {
        var a = new article_1.Article();
        expect(a.title).toBe("Lab Mice Strike for Improved Working Conditions,        Benefits");
    });
});
