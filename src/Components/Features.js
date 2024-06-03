export const Features = () => {
    return (
        <>
        <div className="flex items-center justify-center px-4 font-bold font-mono">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full md:w-auto">
                <div className="shadow-xl border-2 h-60 w-full md:w-64 bg-white flex flex-col items-center justify-center p-4">
                    <h2 className="text-lg text-center">No Chat GPT</h2>
                    <p className="text-center px-2 md:px-4 mt-2">It redirects you from chat gpt to google whenever you are solving leetcode.</p>
                </div>
                <div className="shadow-xl border-2 h-60 w-full md:w-64 bg-white flex flex-col items-center justify-center p-4">
                    <h2 className="text-lg text-center"><del>Solutions tab</del></h2>
                    <p className="text-center px-2 md:px-4 mt-2">It blocks solutions tab in leetcode. </p>
                </div>
            </div>
        </div>

        </>
    )
}
