interface recentTypes{
    imgUrl: string,
    title: string,
    description:string
}

const Recents: React.FC<recentTypes> = ({ imgUrl, title, description }) => {
    return <div className=" rounded-lg border-gray-300 border-2 p-4 mt-4">
            <div className="text-2xl font-semibold my-4 ">Recent Posts</div>
                <div className="flex flex-row min-h-20  min-w-80 ">
                    <div className="max-w-16 min-h-16 rounded-lg">
                        <img src={imgUrl} alt="plant image" />
                    </div>
                    <div className="text-gray-600">
                        <div className="font-semibold">{title}</div>
                        <div className="">{description}</div>
                    </div>
            </div>
    </div>
}

export default Recents;