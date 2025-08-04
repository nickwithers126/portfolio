'use client';

import { useState, useEffect } from 'react';

export default function ContactPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        if (isSubmitted) {
            const timer = setTimeout(() => setIsSubmitted(false), 5000);
            return () => clearTimeout(timer);
        }
    }, [isSubmitted]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);

        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            setIsSubmitted(true);
            form.reset();
        } else {
            alert('Something went wrong. Please try again.');
        }
    };

    return (
        <main className="max-w-2xl mx-auto px-6 py-12">
            <h1 className="text-3xl font-bold text-[#E9FCFF] mb-6">contact</h1>

            {isSubmitted && (
                <div className="mb-6 p-4 rounded-md bg-green-700 text-white text-sm transition-opacity duration-300">
                    ✅ your message has been sent. thanks for reaching out!
                </div>
            )}


            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="hidden" name="access_key" value="9ca19b9c-b4cd-48aa-ae0f-beb1aaef1e72" />

                <input
                    type="text"
                    name="name"
                    placeholder="name"
                    required
                    className="w-full px-4 py-2 bg-[#1f1f1f] text-[#E9FCFF] border border-gray-400 rounded-md"
                />

                <input
                    type="email"
                    name="email"
                    placeholder="email"
                    required
                    className="w-full px-4 py-2 bg-[#1f1f1f] text-[#E9FCFF] border border-gray-400 rounded-md"
                />

                <textarea
                    name="message"
                    placeholder="message"
                    required
                    rows={6}
                    className="w-full px-4 py-2 bg-[#1f1f1f] text-[#E9FCFF] border border-gray-400 rounded-md"
                />

                <button
                    type="submit"
                    className="bg-[#468be6] text-white px-6 py-2 rounded-md hover:bg-[#3b79ca] transition cursor-pointer"
                >
                    send
                </button>
            </form>
        </main>
    );
}

