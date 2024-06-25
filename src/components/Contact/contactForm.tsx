
const ContactForm= () => {
    return (
        <div >
            <div className='text-2xl mb-2 font-bold text-center'>Have a question about our products?</div>
            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium ">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
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
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-black sm:text-sm"
                    placeholder="Enter your query"
                />
            </div>

            <div className="flex justify-start max-w-lg">
                <button
                    type="submit"
                    className="-flex items-center  px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    Submit
                </button>
            </div>
            </div>
    );
};

export default ContactForm;