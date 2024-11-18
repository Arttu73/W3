import {Request, Response, Router} from "express"
import fs from "fs"
import { compile } from "morgan"
const router: Router = Router()

router.get("/hello", (req: Request, res: Response) => {
    res.json({
        msg: "Hello world!"
    })
})

router.get("/echo/:id", (req: Request, res: Response) => {
    let id: string = req.params.id
    res.json({
        id: id
    })
})

router.post("/sum", (req: Request, res: Response) => {
    let array: number[] = req.body.numbers
    let sum = 0
    for ( var val of array) {
        sum += val
    }
    res.json({
        sum: sum

    })
})

router.post("/users", (req: Request, res: Response) => {
    
})

export default router