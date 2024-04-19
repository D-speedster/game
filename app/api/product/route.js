import MyModel from "@/models/product";
const { default: mongoose } = require("mongoose");
export async function GET() {
    let data = await MyModel.find({})
    return Response.json({ data })

}
export async function POST(req, { params }) {
    let res = await req.json();
    let {title , price , genre , pic} = res
    await MyModel.create({title , price , genre , pic})
   
   
    return Response.json( {message : "successfully submitted "} )

}