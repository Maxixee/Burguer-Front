import LogoImage from "../../assets/Hamburguer-de-Siri.png"
import "../../global.css"

export default function Logo(){
    
    return(
        <div className="flex items-center gap-4 ml-10 mr-40">
            <img className='w-10 h-12 rounded-3xl' src={LogoImage} alt="logo" />
        </div>
    );
}