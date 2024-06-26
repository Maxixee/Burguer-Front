import "../../global.css"

export default function HeaderButtons(){
    
    return(
        <div className="justify-center items-center flex gap-10">
            <p className="text-black cursor-pointer font-bold hover:scale-110">Home</p>
            <p className="text-red-500 cursor-pointer font-bold hover:scale-110">Order now</p>
            <p className="text-red-500 cursor-pointer font-bold hover:scale-110">Menu</p>
            <p className="text-red-500 cursor-pointer font-bold hover:scale-110">Location</p>
        </div>
    );
}