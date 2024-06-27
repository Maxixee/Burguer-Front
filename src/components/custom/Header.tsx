import "../../global.css"
import CartButton from "./CartButton";
import HeaderButtons from "./HeaderButtons";
import Logo from "./Logo";

export default function Header(){

    const background = {
        backgroundColor: 'rgba(112, 112, 112, 0.5)',
        backdropFilter: 'blur(10px)'
    }

    return(
        <div style={background} className="h-[5rem] w-screen items-center flex">
            <Logo/>
            <HeaderButtons/>
            <CartButton/>
        </div>
    );
}