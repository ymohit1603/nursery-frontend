
interface nurseryTypes{
    title: string,
    Description: string,
    placeholder:string,
    buttonText:string,
}

export const NearestNursery:React.FC<nurseryTypes> = ({ title, Description,placeholder, buttonText }) => {
    return <div className="min-h-screen flex flex-col justify-center items-center bg-gray-200">
        <div className="font-extrabold text-5xl mb-4 ">{title}</div>
        <div className="text-lg text-slate-700 mb-2">{Description}</div>
        <input type="search" id="default-search" className="block mb-2 w-72 p-3 ps-10 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder={placeholder} required />
        <button type="button" className="focus:outline-none w-40 text-white bg-black hover:bg-slate-900 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-md px-5 py-2.5 mb-2 mr-3">{buttonText}</button>
    </div>
}