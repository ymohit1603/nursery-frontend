interface recentTypes{
    imgUrl: string,
    title: string,
    description:string
}

const Recents:React.FC<recentTypes> = ({imgUrl,title,description }) => {
    return <div>
        <div>Recent Posts</div>
        <div>
            <div>
                <img src={imgUrl} alt="" />
            </div>
            <div>
                <div>{title}</div>
                <div>{description}</div>
            </div>
        </div>
    </div>
}

export default Recents;