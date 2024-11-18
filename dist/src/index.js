"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const path_1 = __importDefault(require("path"));
const router = (0, express_1.Router)();
let userList = [];
router.get("/", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "../../public", "index.html"));
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
    console.log("recieved data:", req.body);
    const data = req.body;
    let user = {
        name: data.name,
        email: data.email
    };
    userList.push(user);
    res.json("User successfully added");
});
exports.default = router;
