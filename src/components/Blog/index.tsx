import BlogBody from "./body";
import Intro from "./intro";

const IntroVal={
    title:"Discover the Beauty of Nature",
    description:"Explore our collection of plant-inspired blog posts and learn how to bring the outdoors in."
}

const Blog = () => {
    return <div>
        <Intro title={IntroVal.title} description={IntroVal.description} />
        <BlogBody/>
    </div>
}

export default Blog;