import "./Menu.css"
function Menu(
    {
    closeMenu}){
       
    return(
        <div>
        Menu
        <button onClick={closeMenu}>Close Menu</button>      
        </div>
    )
}
export default Menu