import MyModel from "@/models/product";
import ConnectToDb from "@/utils/db"
const { default: mongoose } = require("mongoose");

export async function GET(req) {
    return Response.json("there is no data")

}
export async function POST(req, { params }) {
    let product = await MyModel.find({});
    let body = await req.json()
    console.log(body)
    ConnectToDb()

    return Response.json({ product })

}