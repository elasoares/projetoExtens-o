export function Banner() {
    return (
        <section className="bg-[url('./banner.svg')] h-screen bg-cover bg-center">
            <div className="h-full w-full justify-around md:flex-row flex items-center ">

                <div className="flex flex-col items-center justify-center text-center px-4 sm:w-md md:w-3xs">
                    <h1 className="text-3xl sm:text-5xl text-center sm:text-left font-extrabold text-black mb-10">Venha explorar nossa <span className="bg-blue-500 mb-20 pr-5 pl-1">variedade</span> de produtos</h1>
                    <button className="bg-black text-white py-2 px-4 rounded hover:bg-yellow-600 font-bold uppercase transition duration-300 cursor-pointer">
                        Compre agora
                    </button>
                </div>
                <img 
                    src="./img-women-banner.svg" 
                    alt="Banner" 
                    className="hidden sm:block lg:block w-sm" 
                />
            </div>
        </section>
    );
}
