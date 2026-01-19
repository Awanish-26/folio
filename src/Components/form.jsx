import React, { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("https://formspree.io/f/xjkkjaeg", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error(error);
            alert("An error occurred.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="contact-form card p-8 w-full flex flex-col gap-4 my-4">
            <div className="w-full flex flex-nowrap gap-4">
                <div className="flex-1 min-w-0">
                    <label className="text-base md:text-xl block mb-2">Full Name:</label>
                    <input className="p-2 bg-white/5 w-full border rounded border-white/10 focus:border-violet-500 focus-ring focus-ring" type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="flex-1 min-w-0">
                    <label className="text-base md:text-xl block mb-2">Email:</label>
                    <input className="p-2 bg-white/5 w-full border rounded border-white/10 focus:border-violet-500 focus-ring" type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
            </div>

            <div className="w-full mb-4">
                <label className="text-base md:text-xl block mb-2">Message:</label>
                <textarea className="p-2 bg-white/5 w-full border rounded border-white/10 focus:border-violet-500 focus-ring" maxLength={1000} name="message" value={formData.message} onChange={handleChange} required />
            </div>

            <button className="bg-purple-600/10 hover:bg-purple-600/80 border-2 border-purple-600/40 hover:border-purple-600/80 text-white font-bold py-2 px-4 rounded transition-colors">
                Send
            </button>
        </form>
    );
};

export default ContactForm;
