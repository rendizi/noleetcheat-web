import { Hero } from "../Components/Hero";
import { Features } from "../Components/Features";
import { Me } from "../Components/Me";
import { Prices } from "../Components/Prices";

export const Landing = () => {
    return (
        <div className="font-mono">
            <Hero />
            <div className="min-h-screen w-full mt-36 text-center">
                <Features />
                <Prices />
            </div>
            <Me />
        </div>
    )
}