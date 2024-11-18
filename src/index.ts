import {Request, Response, Router} from "express"
const router: Router = Router()
type TUser = {
    name: String,
    email: String
}

let userList: TUser[] = []

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
    const data = req.body
    let user: TUser = {
        name: data.name,
        email: data.email
    }
    userList.push(user)
    res.json("User successfully added")
})

export default router