import Tags  from "./tags";
import PlantBlogCard from "../card/PlantBlogCard";
import Recents from "./recents";


const bodyData = [{
    id:1,
    imgUrl: "",
    Title: "Caring for Your Indoor Succulents",
    Description: "Learn the best tips and tricks for keeping your indoor succulents healthy and thriving.",
    link:"/indoor"
},
    {
        id:2,
        imgUrl: "",
        Title: "The Benefits of Houseplants for Your Home",
        Description: "Discover how adding plants to your living space can improve your mood, air quality, and overall well-being.",
        link:"/outdoor"
    },
    {
        id:3,
        imgUrl: "",
        Title: "Decorating your house with Plants",
        Description: "Explore creative ways to incorporate plants into your home decor, from hanging gardens to plant-filled shelves.",
        link:"/other"
}]


const BlogBody = () => {
    return <div className="flex flex-row justify-around">
        <div>
            <Tags/>
            <Recents/>
        </div>

        <div>
            {
                bodyData.map((val) => (
                    <PlantBlogCard key={val.id} imgUrl={val.imgUrl} Title={val.Title} Description={val.Description} link={val.link} />  
                ))
            }
        </div>
    </div>
}

export default BlogBody;