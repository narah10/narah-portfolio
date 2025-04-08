import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
    const navigate = useNavigate();

    const handleSubmit = event => {
      event.preventDefault();
  
      const form = event.target;
      const formData = new FormData(form);
  
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      })
        .then(() => navigate("/success"))
        .catch(error => alert(error));
    };
    return (
        <div>
            <section className="text-white" >
            <h1 className="mb-4 text-5xl tracking-tight font-extrabold">Let's<span className="text-accentColor"> Connect</span>.</h1>
            <p className="">Have a question or a project in mind?</p>
                <p className="mb-10"> Drop your details, and I'll reach out to you as soon as possible!</p>
                <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit}>
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="mb-5">
                        <label for="email" className="block mb-2 text-sm font-medium text-accentLightColor dark:text-gray-300">Your email</label>
                        <input type="email" id="email" name="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-primary-500 focus:border-accentLightColor block w-[70%] p-2.5 " placeholder="name@email.com" required/>
                    </div>
                    <div className="mb-5">
                        <label for="subject" className="block mb-2 text-sm font-medium text-accentLightColor dark:text-gray-300">Subject</label>
                        <input type="text" id="subject" name="subject" className="block p-3 w-[70%] text-sm text-gray-900 bg-gray-50 rounded-sm border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="Let me know how I can help you" required/>
                    </div>
                    <div className="sm:col-span-2">
                        <label for="message" className="block mb-2 text-sm font-medium text-accentLightColor dark:text-gray-400">Your message</label>
                        <textarea id="message" rows="6" name="message" className="block p-2.5 w-[70%] text-sm text-gray-900 bg-gray-50 rounded-sm shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " placeholder="Leave a message..."></textarea>
                    </div>
                    <button type="submit" className="mt-10 py-3 px-5 text-sm font-medium text-center text-black rounded-sm hover:bg-accentLightColor bg-accentColor sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300">Send message</button>
                </form>
            </section>
        </div>
    )
}