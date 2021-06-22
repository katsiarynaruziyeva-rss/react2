import "./Header.css";
function Header({
    title="",
    openMenu}){
    return(
        <header>
            <h1>{title}</h1>
            <button onClick={openMenu}>Open Menu</button>
            <hr/>
            </header>

    )
}
export default Header