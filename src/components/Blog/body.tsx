import { Tags } from "lucide-react";
import PlantBlogCard from "../card/PlantBlogCard";
import Recents from "./recents";


const BlogBody = () => {
    return <div>
        <div>
            <PlantBlogCard imgUrl={"undefined"} Title={"undefined"} Description={"undefined"} Name={"undefined"} Date={"undefined"} />
            <PlantBlogCard imgUrl={"undefined"} Title={"undefined"} Description={"undefined"} Name={"undefined"} Date={"undefined"} />
            <PlantBlogCard imgUrl={"undefined"} Title={"undefined"} Description={"undefined"} Name={"undefined"} Date={"undefined"}/>
        </div>
        <div>
            <Tags/>
            <Recents/>
        </div>

    </div>
}

export default BlogBody;