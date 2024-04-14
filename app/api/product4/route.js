import MyModel from "@/models/product";

export async function GET() {
    let data = await MyModel.find({})
    return Response.json({ data })

}
export async function POST() {
    return Response.json({ message: "wecome to POST" })

}