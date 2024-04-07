'use client';
import React, { useState,useEffect } from 'react';
import { useRouter } from 'next/navigation';

const page = ({params}) => {
    
  const router = useRouter();
  
  const [IsSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
      date: '',
      time: '',
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      country: ''
  });
    
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
    
    
  

  useEffect(() => {
    const getPostDetails = async () => {
      const response = await fetch(`/api/posts/${params.id}`);
      const data = await response.json();
      
      setFormData(data);
    };

    if (params.id) getPostDetails();
  }, [params.id]);


  const handleSubmit = async (e) => {
    setIsSubmitting(true);
    e.preventDefault();
    router.push("/admin");
    
    try {
      const response = await fetch(`/api/posts/${params.id}`, {
        method: "PATCH",
        body: JSON.stringify({
          date: formData.data,
          time: formData.time,
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          country: formData.country
      }),
      });

      if (response.ok) {
        router.push("/admin");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }

  };
      
      
  return (
    <>
     <div className='m-4'>
      <form onSubmit={handleSubmit} >
                <div className='w-full flex justify-center mt-5 '>
                  {/* Add the inputs here */}
                  <div className='flex flex-col gap-2 w-full'>
                    <div className='flex flex-col  justify-start items-start '>
                      <label htmlFor="" className='font-bold'>Date <span className="text-blue-500">*</span> </label>
                      <input type="date" name="date" value={formData.date} onChange={handleChange} className="p-2 mb-2 border w-full bg-blue-100 rounded-lg"  required  />
                    </div>
    
                    <div className='flex flex-col  justify-start items-start '>
                      <label htmlFor="" className='font-bold'>Time <span className="text-blue-500">*</span> </label>
                      <input type="time" name="time" value={formData.time} onChange={handleChange} className="p-2 mb-2 border w-full bg-blue-100 rounded-lg" required  />
                    </div>
    
                    <div className='flex flex-col  justify-start items-start '>
                      <label htmlFor="" className='font-bold'>First Name <span className="text-blue-500">*</span> </label>
                      <input type="text" name="firstName" value={formData.firstName} onChange={handleChange}  className="p-2 mb-2 border w-full bg-blue-100 rounded-lg" />
                    </div>
    
                    <div className='flex flex-col  justify-start items-start '>
                      <label htmlFor="" className='font-bold'>Last Name <span className="text-blue-500">*</span> </label>
                      <input type="text" name="lastName" value={formData.lastName} onChange={handleChange}  className="p-2 mb-2 border  w-full bg-blue-100 rounded-lg" required />
                    </div>
    
                    <div className='flex flex-col  justify-start items-start '>
                      <label htmlFor="" className='font-bold'>Email <span className="text-blue-500">*</span> </label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange}  className="p-2 mb-2 border w-full bg-blue-100 rounded-lg" />
                    </div>
    
                    <div className='flex flex-col  justify-start items-start '>
                      <label htmlFor="" className='font-bold'>Phone Number <span className="text-blue-500">*</span> </label>
                      <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange}  className="p-2 mb-2 border w-full bg-blue-100 rounded-lg" />
                    </div>
    
                    <div className='flex flex-col  justify-start items-start '>
                      <label htmlFor="" className='font-bold'>Country <span className="text-blue-500">*</span> </label>
                      <input type="text" name="country" value={formData.country} onChange={handleChange}  className="p-2 mb-2 border w-full bg-blue-100 rounded-lg" />
                    </div>
    
                    
                    
                  </div>
                </div>
                {/* Submit button */}
                <div className="flex justify-center mt-4">
                  <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded">{IsSubmitting ? "wait..." : "Send"}</button>
                </div>

                
        </form>
      </div>
    </>
  )
}

export default page