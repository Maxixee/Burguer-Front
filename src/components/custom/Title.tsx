import React from "react";

interface Props{
    children: string;
}

export default function Title({ children }: Props){
    return (
        <div className="text-gray-900 text-3xl ml-16 mt-32 md:text-4xl lg:text-6xl mb-4 md:mb-6 font-bold">
            <h1>
                { children }
            </h1>
        </div>
    )

}