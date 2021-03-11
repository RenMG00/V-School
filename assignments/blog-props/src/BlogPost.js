import React from "react";

const BlogPost = (props) => {

    const style = {
        color: "darkslategray"
    }
    return (
        <div className="blogPost">
            <h2 className="blogTitle">{props.title}</h2>
            <h3 className="blogSubtitle">{props.subTitle}</h3>
            <p className="blogAuthor"> Posted by {props.author} on <span>{props.date}</span> </p>
        </div>
    )
}


export default BlogPost;