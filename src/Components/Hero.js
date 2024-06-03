import { Navbar } from "./Navbar";

export const Hero = () => {
    return (
        <>
        <div className="bg-white">
            <div className="relative max-h-screen">
                <Navbar />
                <div className="text-center text-black font-bold mt-5 ">
                    <div className="ml-5 mr-5 mb-5">
                    <h1 className="sm:text-6xl text-4xl">No Leet Cheat</h1>
                    <p className="text-xl mt-4 text-gray-700">Browser extension for Chrome that will land you a job!</p>
                    </div>
                    <img 
                        src="assests/working.png" 
                        alt="Working" 
                        className="mx-auto mt-6 w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/3 rounded"                    />
                </div>
            </div>
        </div>
        </>
    );
};
