import img from "../assets/HeroSection/logo.svg"
import "../Components/HeroSection.css"
function HeroSection(){
    return(
        <section className="HeroSection">
            <img src={img} alt="pvr-logo" className="pvr-logo"/>
            <div className="HeroSection-Heading">
                <h4 className="secondaryHeading">Find Your Favorite Movie</h4>
                <h1 className="primaryHeading">PREMIUM</h1>
            </div>
            <div className="primary-underline"></div>
        </section>
    )
}
export default HeroSection;