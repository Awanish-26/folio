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
        <form onSubmit={handleSubmit} className="contact-form p-8 w-full rounded-xl flex flex-col gap-4">
            <div className="w-full">
                <label className="text-xl block mb-2" >Full Name:</label>
                <input className="p-2 bg-white/10 w-full md:w-2/3 border-collapse border-transparent border rounded focus:border-violet-500 outline-none transition-all" type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="w-full">
                <label className="text-xl block mb-2" >Email:</label>
                <input className="p-2 bg-white/10 w-full md:w-2/3 border-collapse border-transparent border rounded focus:border-violet-500 outline-none transition-all" type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="w-full mb-4">
                <label className="text-xl block mb-2" >Message:</label>
                <textarea className="p-2 bg-white/10 w-full border-collapse border-transparent border rounded focus:border-violet-500 outline-none transition-all" maxLength={1000} name="message" value={formData.message} onChange={handleChange} required />
            </div>
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded" type="submit">Send</button>
        </form>
    );
};

export default ContactForm;
