import Intro from "../intro";


const IntroData = {
    title: "Introducing the Majestic Monstera",
    description:"Discover the captivating beauty and unique features of this iconic houseplant."
}


const SpecificPlant = () => {
    return <div>
        <Intro title={IntroData.title} description={IntroData.description} />
    </div>
}

export default SpecificPlant;