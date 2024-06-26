import "../../global.css"
import Cart from "../../assets/shopping-cart.png"

export default function CartButton(){

    return(
        <div className="flex items-center bg-black rounded-xl cursor-pointer ml-[72rem] hover:bg-slate-500 hover:scale-110">
            <img src={Cart} alt="shopping-cart" className="h-10"/>
        </div>
    );
}