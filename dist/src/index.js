"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/hello", (req, res) => {
    res.json({
        msg: "Hello world!"
    });
});
router.get("/echo/:id", (req, res) => {
    let id = req.params.id;
    res.json({
        id: id
    });
});
router.post("/sum", (req, res) => {
    let array = req.body.numbers;
    let sum = 0;
    for (var val of array) {
        sum += val;
    }
    res.json({
        sum: sum
    });
});
router.post("/users", (req, res) => {
});
exports.default = router;
