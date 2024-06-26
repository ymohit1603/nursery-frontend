import { Alert } from "@mui/material";
import axios from "axios";
import { useState } from "react";

<Alert severity="error">This is an error Alert.</Alert>

interface FormTypes {
    email: string;
    message: string;
}

const ContactForm = () => {
    const [formData, setFormData] = useState<FormTypes>({
        email: '',
        message: ''
    });
    const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);

    const handleClick = async () => {
        try {
            const result = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/contact`, formData);
            if (result) {
                setSubmissionStatus('Query successfully submitted');
            }
        } catch (error) {
            console.error('There was an error submitting the form', error);
            setSubmissionStatus('There is an error submitting the form');
        }
    };

    return (
        <div >
            <div className='text-2xl mb-2 font-bold text-center'>Have a question about our products?</div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium ">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={(e) => {
                        setFormData({
                            ...formData,
                            email: e.target.value
                        });
                    }}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-black sm:text-sm"
                    placeholder="Enter your email"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium ">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={2}
                    onChange={(e) => {
                        setFormData({
                            ...formData,
                            message: e.target.value
                        });
                    }}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-black sm:text-sm"
                    placeholder="Enter your query"
                />
            </div>

            <div className="flex items-center space-x-4 max-w-lg">
                <button
                    type="submit"
                    onClick={handleClick}
                    className="flex items-center px-3 my-2 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    Submit
                </button>
                {submissionStatus && (
                    <div className="w-70">
                        {submissionStatus === 'Query successfully submitted' ? (
                            <Alert severity="success">{submissionStatus}</Alert>
                        ) : (
                            <Alert severity="error">{submissionStatus}</Alert>
                        )}
                    </div>
                )}
            </div>
    </div>
    );
};

export default ContactForm;
