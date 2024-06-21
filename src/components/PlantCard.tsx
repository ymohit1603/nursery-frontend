
interface PlantCardProps {
    link: string;
    imageSrc: string;
    title: string;
    description: string;
    buttonlabel:string
}
  
export const PlantCard: React.FC<PlantCardProps> = ({ link, imageSrc, title, description,buttonlabel }) => {
    return (
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
        </a>
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          <p className="text-gray-600 mt-2">{description}</p>
            </div>
            <button className="block w-full bg-black hover:bg-slate-900 text-white py-2 px-4 rounded-b-lg">{buttonlabel }</button>      
      </div>
    );
  };