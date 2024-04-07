import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const createPost = async (date,time,firstName,lastName,email,phoneNumber,country) => {
    try {
        const post = await prisma.post.create({ 
            data:{
                date,
                time,
                firstName,
                lastName,
                email,
                phoneNumber,
                country
            }       
        });
        return post;
    } catch (error) {
        // Handle error
        console.error("Error creating post:", error);
        throw error; // Re-throwing the error for the caller to handle
    }
}

export const getAllPosts = async () => {
    try {
        const posts = await prisma.post.findMany();
        return posts;
    } catch (error) {
        console.error("Error fetching post:", error);
        throw error; // Re-throw for caller to handle
    }
}

export const getPostById = async (postId) => {
    try {
      const post = await prisma.post.findUnique({
        where: {
          id: postId,
        },
      });
      return post;
    } catch (error) {
      // Handle error
      console.error("Error fetching post:", error);
      throw error; // Re-throw for caller to handle
    }
  };

export const deletePost = async (postId) => {
    try {
        await prisma.post.delete({
            where: {
                id: postId,
            },
        });
    } catch (error) {
        // Handle error
        console.error("Error deleting post:", error);
        throw error;
    }
}



export const updatePost = async (postId ,date, time, firstName, lastName, email, phoneNumber, country) => {
    try {
        const post = await prisma.post.update({
            where: {
                id: postId,
            },
            data: {
                date: date,
                time: time,
                firstName: firstName,
                lastName: lastName,
                email: email,
                phoneNumber: phoneNumber,
                country: country
            }
        });
        return post;
    } catch (error) {
        // Handle error
        console.error("Error updating post:", error);
        throw error;
    }
}

