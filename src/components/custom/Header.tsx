import "../../global.css"
import CartButton from "./CartButton";
import HeaderButtons from "./HeaderButtons";
import Logo from "./Logo";

export default function Header(){
    return(
        <div className="bg-transparent h-24 w-screen items-center flex">
            <Logo/>
            <HeaderButtons/>
            <CartButton/>
        </div>
    );
}