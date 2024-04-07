import { deletePost , updatePost , getPostById} from "@/prisma/posts";
import { NextResponse } from "next/server";



export async function DELETE(req,{params}) {
    
    try{
        await deletePost(params.id);
        return NextResponse.json({ message: 'Post deleted successfully' });
        //return new Response(JSON.stringify({ message: 'Post deleted successfully' }), { status: 200 })
    }catch(error){
        return NextResponse.json({ error: error.message })
        //return new Response(" server error"), { status: 500 })
    }
}

export async function PATCH(req,{params}){
    
    try{
        const body = await req.json();
        const { id } = params;
        const { date, time, firstName, lastName, email, phoneNumber, country } = body;
        const updatedPost = await updatePost(id, date, time, firstName, lastName, email, phoneNumber, country);
        return NextResponse.json(updatedPost);
        //return new Response(JSON.stringify(updatedPost), { status: 200 })
    }catch(error){
        return NextResponse.json({ error: error.message })
        //return new Response(" server error"), { status: 500 })
    }
}

export async function GET(req, { params }) {
    try {
      const { id } = params;
      const post = await getPostById(id);
      return NextResponse.json(post);
    } catch (error) {
      console.error("Error fetching post:", error); // Log error for debugging
      return NextResponse.json({ error: "Failed to fetch post" }); // User-friendly error message
    }
  }