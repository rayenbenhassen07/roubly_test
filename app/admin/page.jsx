'use client';
import React, { useState,useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAdminPassword } from '@/hooks/useAdminPassword';

const Page = () => {
    const { password, passwordStored, storePassword } = useAdminPassword();

    useEffect(() => {
      if (!passwordStored) {
        const userPassword = prompt("Admin password");
        if (userPassword === password) {
          storePassword();
        }
      }
    }, [passwordStored, password, storePassword]);
  
  
    const [posts, setPosts] = useState([]);
    const router = useRouter();
   
    
    useEffect(() => {
      const intervalId = setInterval(fetchPosts, 5000); // Fetch every 5 seconds
  
      return () => clearInterval(intervalId); // Cleanup function to clear timer on unmount
    }, []);
  
    /*
    useEffect(() => {
      fetchPosts();
    },[]);*/
  
    const fetchPosts = async () =>{
  
      try {
        const response = await fetch('/api/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    }
  
    const handleDelete = async (postId) => {
      try {
        console.log(postId)
          const response = await fetch(`/api/posts/${postId}`, {
              method: 'DELETE',
          });
          if (response.ok) {
              console.log('Post deleted successfully');
              fetchPosts(); // Refresh posts after deletion
          } else {
              throw new Error('Failed to delete post');
          }
      } catch (error) {
          console.error('Error deleting post:', error);
      }
    };
  
  
  
  
    
  
    
  
    
    
      
    if (!passwordStored) return null;
    return (
      <> 
        
        <div className="container mx-auto px-4 pt-20">
        <h1 className="text-3xl font-bold mb-4">Posts</h1>
        <div className="overflow-x-auto">
          <table className="table-auto border-collapse border border-gray-800 w-full">
            <thead>
              <tr className='bg-neutral-700 text-white'>
                <th className="border border-gray-800 px-4 py-2 text-xs lg:text-base">First Name</th>
                <th className="border border-gray-800 px-4 py-2 text-xs lg:text-base">Last Name</th>
                <th className="border border-gray-800 px-4 py-2 text-xs lg:text-base">Phone Number</th>
                <th className="border border-gray-800 px-4 py-2 text-xs lg:text-base">Email</th>
                <th className="border border-gray-800 px-4 py-2 text-xs lg:text-base">Country</th>
                <th className="border border-gray-800 px-4 py-2 text-xs lg:text-base">Date</th>
                <th className="border border-gray-800 px-4 py-2 text-xs lg:text-base">Time</th>
                <th colSpan={2} className="border border-gray-800 px-4 py-2 text-xs lg:text-base">tools</th>
              </tr>
            </thead>
            <tbody className='text-center'>
              {posts.map((post) => (
                <tr key={post.id}>
                  <td className="border border-gray-800 px-4 py-2 text-xs lg:text-base">{post.firstName}</td>
                  <td className="border border-gray-800 px-4 py-2 text-xs lg:text-base">{post.lastName}</td>
                  <td className="border border-gray-800 px-4 py-2 text-xs lg:text-base" >{post.phoneNumber}</td>
                  <td className="border border-gray-800 px-4 py-2 text-xs lg:text-base">{post.email}</td>
                  <td className="border border-gray-800 px-4 py-2 text-xs lg:text-base">{post.country}</td>
                  <td className="border border-gray-800 px-4 py-2 text-xs lg:text-base">{post.date}</td>
                  <td className="border border-gray-800 px-4 py-2 text-xs lg:text-base">{post.time}</td>
                  <td className="border border-gray-800 px-4 py-2 text-xs lg:text-base">
                      <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => handleDelete(post.id)}>
                        Delete
                      </button>
                  </td>
  
                  <td className="border border-gray-800 px-4 py-2 text-xs lg:text-base">
                      <button
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                        onClick={() => {router.push(`admin/updatePost/${post.id}`)}}
                      >
                        Edit
                      </button>
                    </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
  
  
      
  
  
  
      
    </>
    );
  };
export default Page