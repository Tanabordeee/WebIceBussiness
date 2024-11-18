import { connectMongoDB } from "@/lib/mongodb";
import Customer from "@/models/CustomerModel";
import { NextResponse } from "next/server";
type RequestBody ={
    alt_description:string;
    url:string;
}
type RequestUpdate = {
    _id:string;
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
        },{status : 200})
    }catch(error){
        console.error('Error handling POST request:', error);
        return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
    }
}

export async function GET() {
    try {
      await connectMongoDB();
      const customer = await Customer.find({}).limit(50); 
      return NextResponse.json({ customer });
    } catch (error) {
      console.error('Error handling GET request:', error);
      return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
    }
  }

export async function PUT(req:Request){
    try{
        const {_id ,url , alt_description}: RequestUpdate = await req.json();
        if (!_id || !url || !alt_description) {
            return NextResponse.json({ error: 'Please send URL and Alt' }, { status: 400 });
        }
        await connectMongoDB();
        const result = await Customer.updateOne({_id} , {$set:{url , alt_description}})
        if (result.modifiedCount === 0) {
            return NextResponse.json(
                { message: "No document was updated. Verify _id." },
                { status: 404 }
            );
        }
        return NextResponse.json({ message: "Update successful" } , {status: 200});
    }catch(error){
        return NextResponse.json(
            { error: "An error occurred while updating the document" },
            { status: 500 }
        );
    }
}
type DeleteData = {
    _id :string
}
export async function DELETE(req:Request){
    try{
        const { searchParams } = new URL(req.url);
        const _id = searchParams.get('_id');
        if(!_id){
            return NextResponse.json({ error: 'Please send ID' }, { status: 400 });
        }
        await connectMongoDB();
        const result = await Customer.deleteOne({_id})
        if(result.deletedCount === 0){
            return NextResponse.json(
                { message: "No document was updated. Verify _id." },
                { status: 404 }
            );
        }
        return NextResponse.json({ message: "Delete successful" } , {status: 200});
    }catch(error){
        return NextResponse.json(
            { error: "An error occurred while updating the document" },
            { status: 500 }
        );
    }
}