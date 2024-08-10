interface commentsTypes {
    userName: string;
    postedOn: number;
    commentText: string;
}

const Comments = ({ userName, postedOn, commentText }: commentsTypes) => {
    console.log(userName)
    return (
        <div className="flex mt-3 bg-white ">
            {/* Avatar Section */}
            <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center text-white font-bold">
                    {/* {userName.charAt(0).toUpperCase()} */}
                    A
                </div>
            </div>
            {/* Comment Content */}
            <div className="w-full ml-4">
                <div className="flex items-center gap-2">
                    <div className="text-lg font-semibold text-gray-800">{userName}</div>
                    <div className="text-sm text-gray-500">{postedOn}</div>
                </div>
                <div className="mt-2 text-gray-700">{commentText}</div>
            </div>
        </div>
    );
};

export default Comments;
