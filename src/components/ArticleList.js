import React from "react";
import blogData from "../data/blog";
import Article from "./Article.js"

function ArticleList(){
    const posts = blogData.posts
    const articleList =posts.map((post) =>{
        return(
            <Article title={post.title} date={post.date} preview={post.preview}/>
        )
        
    })
    return articleList
}

export default ArticleList