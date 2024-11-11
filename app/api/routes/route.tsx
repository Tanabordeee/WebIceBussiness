import { connectMongoDB } from "@/lib/mongodb";
import Customer from "@/models/CustomerModel";
import { NextResponse } from "next/server";
interface RequestBody{
    alt_description:string;
    url:string;
}
export async function POST(req:Request){
    try{
        const {url , alt_description}:RequestBody = await req.json();
        if (!url || !alt_description) {
            return NextResponse.json({ error: 'Please send URL and Alt' }, { status: 400 });
        }
        await connectMongoDB();
        await Customer.create({url , alt_description})
        return NextResponse.json({
            message: "Data Received successfully",
            data: {alt_description , url}
        },{status : 201})
    }catch(error){
        console.error('Error handling POST request:', error);
        return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
    }
}

export async function GET(){
    try{
        await connectMongoDB();
        const customer = await Customer.find({});
        return NextResponse.json({ customer });
    }catch(error){
        console.error('Error handling POST request:', error);
        return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
    }
}