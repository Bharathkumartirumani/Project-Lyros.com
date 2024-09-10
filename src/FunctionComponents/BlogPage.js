function BlogPage(prop){
    const {author,title,url}=prop.data
    console.log("dfghj")
    return(
        <>
        {console.log(prop.data)}
        <h1>{title}</h1>
        <p>{author}</p>
        <a href={url}>click here to read</a>
        </>
    )
    }
    export default BlogPage