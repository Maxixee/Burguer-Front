import Header from "../components/custom/Header";
import Title from "../components/custom/Title";
import "../global.css"

export default function LandingPage(){

    return (
        <>
            <div className="h-[45rem] bg-back-landing bg-cover bg-no-repeat bg-center">
                <Header/>
                <Title>LIGMA BURGUER</Title>
            </div>
            <div className="bg-slate-500 h-screen">
                <h1 className="flex justify-center text-4xl font-semibold">Dine in + Delivery</h1>
            </div>
        </>
    );
}