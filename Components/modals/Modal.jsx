'use client';
import React, { useState } from 'react';
import { IoCloseSharp } from "react-icons/io5";
import useModelCalender from '@/hooks/useModelCalender';




const Modal = () => {
  
  const modelC = useModelCalender();
  const [IsSubmitting, setIsSubmitting] = useState(false)
  const [toast, setToast] = useState("");

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

  const handleSubmit = async (e) => {
    setIsSubmitting(true);
    e.preventDefault();

    /*Check if all required fields are filled out
    const missingFields = Object.keys(formData).filter(key => formData[key] === '');
    if (missingFields.length > 0) {
      setToast(`Please fill out the following fields: ${missingFields.join(', ')}`);
      setIsSubmitting(false);
      return;
    }*/

    try {
      
      const response = await fetch('/api/posts', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
      });

        if (response.ok) {
            // If the response is successful, you can do something here
            console.log('Form submitted successfully');
            setToast('your request sent successfully');
            // Reset form data after successful submission
            setFormData({
                date: '',
                time: '',
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                country: ''
            });

            setTimeout(() => {
              modelC.onClose();
              setToast("");
          }, 2000);
        } else {
            // Handle errors
            console.error('Failed to submit form');
        }
      }catch (error) {
          console.error('Error submitting form:', error);
          console.log('mochkla fil fetsh POST');
      }finally{
        setIsSubmitting(false);
      }

  };

 

  return (
    <>
      <div className={`fixed w-full h-screen flex justify-center items-center ${modelC.isOpen ? 'bg-neutral-800/70' : 'hidden'}`}>
        <div className={`w-[90%] h-[70%]  p-5 lg:w-1/3 bg-white border-black xl rounded-xl outline-none focus:outline-none translate duration-300 overflow-y-auto ${modelC.isOpen ? 'translate-y-0' : 'translate-y-full'} ${modelC.isOpen ? 'opacity-100' : 'opacity-0'}`}>
          <div className='flex w-full justify-between'>
            <div className='text-lg font-bold'>free consultation !</div>
            <div>
              <div className="cursor-pointer text-blue-500">
                <IoCloseSharp size={30} onClick={() => { modelC.onClose() }} />
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
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
            <div className='text-green-500 font-bold lg:text-lg '>
              {toast}
            </div>
            <div className="flex justify-center mt-4">
              <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded">{IsSubmitting ? "wait..." : "Send"}</button>
            </div>
          </form>

        </div>
      </div>
    </>
  )
}

export default Modal;
