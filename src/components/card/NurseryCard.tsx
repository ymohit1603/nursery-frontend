import DirectionsIcon from '@mui/icons-material/Directions';

interface NurseryCardTypes{
    name: string,
    location: string,
    ratings: string,
    timing:string
}

const NurseryCard:React.FC<NurseryCardTypes> = ({name,location,ratings,timing }) => {
    return <div>
        <div>
            <div>{name}</div>
            <div>{location }</div>
            <div>{ratings}</div>
            <div>{timing }</div>
        </div>
        <div>
            <DirectionsIcon>Directions</DirectionsIcon>
        </div>
    </div>
}

export default NurseryCard;