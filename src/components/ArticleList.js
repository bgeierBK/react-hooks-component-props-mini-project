import React from "react";
import blogData from "../data/blog";
import Article from "./Article.js"

function ArticleList(){
    const posts = blogData.posts
    const articleList =posts.map((post) =>{
        return(
    
            <Article key={post.id} title={post.title} date={post.date} preview={post.preview}/>
            
        )
        
    })
    return (
    <main>
    {articleList}
    </main>
    )
}

export default ArticleList