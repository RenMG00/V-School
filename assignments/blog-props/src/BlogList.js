import React from "react";
import BlogPost from "./BlogPost";
import blogs from "./blogs";

const BlogList = () => {
    
const blogArray = blogs.map(blog => <BlogPost key={blog.title} {...blog} />)
    return (
        <div className="blogListContainer">
            {blogArray}
            <button className="button">OLDER POSTS →</button>
        <hr/>
        </div>
    )
}


export default BlogList;