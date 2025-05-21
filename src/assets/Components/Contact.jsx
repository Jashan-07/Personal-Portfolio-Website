import { useState } from "react";

export default function Contact()
{
    const [Name, setName]=useState("");
    const [Email, setEmail]=useState("");
    const [Message, setMessage]=useState("");

    function Formsubmit(e)
    {
        e.preventDefault();
        const MailtoLink = `mailto:your-jashantandon18@gmail.com?subject=Portfolio Contact: ${Name}&body=Name: ${Name}%0D%0AEmail: ${Email}%0D%0A%0D%0AMessage:%0D%0A${Message}`;
        window.location.href = MailtoLink;
    }
    return<>
        {/* My Contacts heading and description */}
        <h1 className="text-center mt-16 text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">Contact Us</h1>
        <p className="text-center px-5 mt-5 text-xl text-gray-600 font-semibold">Let's connect and explore</p>

        {/* Contact Form */}
        <form onSubmit={Formsubmit}>
            <div className="px-5 mt-10">
                <div className="px-5 shadow-lg/20 rounded-md py-6 flex flex-col">
                    {/* Name Field */}
                    <label htmlFor="name" className="font-semibold text-gray-700 mb-1">Name:</label>
                    <input type="text" name="name" id="name" placeholder="Enter Name" className="shadow-lg/20 rounded-md px-2 py-2 border-2 border-gray-300 focus:border-gray-500 focus:outline-none" value={Name} onChange={(e) => setName(e.target.value)} required/>

                    {/* Email Field */}
                    <label htmlFor="email" className="font-semibold text-gray-700 mb-1 mt-5">Email:</label>
                    <input type="text" name="email" id="email" placeholder="example@gmail.com" className="shadow-lg/20 rounded-md px-2 py-2 border-2 border-gray-300 focus:border-gray-500 focus:outline-none" value={Email} onChange={(e) => setEmail(e.target.value)} required/>

                    {/* Message Field */}
                    <label htmlFor="message" className="font-semibold text-gray-700 mb-1 mt-5">Message:</label>
                    <textarea type="text" name="message" id="message" placeholder="Enter Message" className="shadow-lg/20 rounded-md px-2 py-2 border-2 border-gray-300 focus:border-gray-500 focus:outline-none" rows="4" value={Message} onChange={(e) => setMessage(e.target.value)} required/>

                    {/* Submit Button */}
                    <button type="submit" className="mt-6 bg-gradient-to-r from-purple-500 via-indigo-500 to-teal-500 py-2 rounded-md text-semibold font-semibold uppercase text-white hover:opacity-90 cursor-pointer">Submit</button>
                </div>
            </div>
        </form>
    </>
}