
interface PlantMedicinesTypes{
    title: string,
    description : string,
    imageUrl: string,
    buttonText:string,
        
}

export const PlantMedicines:React.FC<PlantMedicinesTypes> = ({ title, description, imageUrl, buttonText }) => {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="flex flex-row justify-center items-center space-x-4">
                    <div className="lg:max-w-lg p-4  ">
                        <h1 className="text-5xl font-bold mb-8">{title}</h1>
                        <div className="text-gray-600 text-lg mb-4">{description}</div>
                        <div className="text-gray-900 text-lg my-4">
                        Can't decide which fertilizer to buy? Consult with our professionals for expert advice.
                        </div>
                        <button
                            type="button"
                            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 mr-3"
                        >
                            {buttonText}
                        </button>
                        <button
                            type="button"
                            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
                        >
                            Consult Professional
                        </button>
                    </div>
                    <img
                        src={imageUrl}
                        alt={title}
                        className="w-96 h-96 object-cover bg-black rounded-lg"
                    />
                </div>
            </div>
        );
    }
