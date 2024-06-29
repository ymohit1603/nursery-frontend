interface IntroTypes{
    title: string,
    description:string
}

const Intro:React.FC<IntroTypes> = ({title,description }) => {
    return <div className="min-h-80 flex justify-center items-center">
        <div className="">
            <div className=" font-bold text-6xl mb-8 ">{title }</div>
            <div className="text-gray-700 flex justify-center">{ description}</div>
        </div>
    </div>
}


export default Intro;