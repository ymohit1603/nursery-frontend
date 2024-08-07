const AddComment = () => {
    return (
        <div className="w-full mt-2 p-0 bg-white rounded-lg ">
            <div className="font-semibold text-3xl mb-6 text-center text-gray-800 ">Leave a Comment</div>
            <form>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input 
                        type="text" 
                        id="name" 
                        placeholder="Enter your name" 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="comment">
                        Comment
                    </label>
                    <textarea 
                        id="comment" 
                        placeholder="Write your comment" 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-20"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button 
                        
                        className="bg-slate-900 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Post Comment
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AddComment;