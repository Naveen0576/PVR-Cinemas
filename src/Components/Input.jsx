import "../Components/Input.css"
import searchIcon from "../assets/InputSection/Search-Icon.svg"
function Input(){
    const handlesearch=(e)=>{
        console.log(e.target.value);
    }
    return(
        <>
           <div className="searchBar">
                <input type="text" placeholder="Search Movie.." className="inputField" onChange={handlesearch}/>
                <button className="search-button"><img src={searchIcon} alt="search-icon" className="search-icon"/>Search</button>
           </div>
        </>
    )
}
export default Input;