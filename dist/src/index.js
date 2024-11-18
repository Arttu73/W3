"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
let userList = [];
router.get("/", (req, res, Response) => {
    res.render('index');
});
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
    const data = req.body;
    let user = {
        name: data.name,
        email: data.email
    };
    userList.push(user);
    res.json("User successfully added");
});
exports.default = router;
