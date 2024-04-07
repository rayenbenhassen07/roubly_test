import { createPost  , getAllPosts  } from "@/prisma/posts";
import { NextResponse } from "next/server";

export async function POST(req) {
    const body = await req.json();
    try{
        const { date, time, firstName, lastName, email, phoneNumber, country } = body;
        const newPost = await createPost(date, time, firstName, lastName, email, phoneNumber, country);
        return NextResponse.json(newPost, { status: 200 });
        //return new Response(JSON.stringify(newPost), { status: 200 })
    }catch(error){
        return NextResponse.json({ error: error.message })
        //return new Response(" server error"), { status: 500 })
    }
}

export async function GET(req) {
    try{
        const posts = await getAllPosts();
        return NextResponse.json(posts);
        //return new Response(JSON.stringify(posts), { status: 200 })
    }catch(error){
        return NextResponse.json({ error: error.message })
        //return new Response(" server error"), { status: 500 })
    }
}

