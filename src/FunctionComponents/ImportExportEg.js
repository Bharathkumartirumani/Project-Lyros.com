const h="helloooo"
function HeaderComponent(){
    return(
        <>
        <h1>hii hello{h}</h1>
        <FooterComponent></FooterComponent>
        </>
        
    )
}
function FooterComponent(){
    return(
        <h2>Footer Component</h2>
    )
}
export default HeaderComponent;
