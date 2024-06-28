interface IntroTypes{
    title: string,
    description:string
}

const Intro:React.FC<IntroTypes> = ({title,description }) => {
    return <div>
        <div>{title }</div>
        <div>{ description}</div>
    </div>
}


export default Intro;