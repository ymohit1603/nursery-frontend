import NurseryCard from "../card/NurseryCard";


const Nursery = ({ city }: { city: string }) => {

    return <div>
        <div>Nearest Nurseries in {city }</div>
        <NurseryCard name={""} location={""} ratings={""} timing={""}/>
    </div>
}

export default Nursery;