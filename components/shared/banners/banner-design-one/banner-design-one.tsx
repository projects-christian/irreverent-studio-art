const BannerDesignOne = () => {
    return ( 
        <section
            className="relative h-[700px] bg-center bg-cover flex items-center justify-center text-center px-4"
            style={{
                backgroundImage: "url('/images/fortuny-6.jpg')",
            }}
            >
            <div className="bg-black/40 absolute inset-0 z-0"></div>

            <div className="relative z-10 text-white max-w-2xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Unique style</h2>
                <p className="text-lg md:text-xl mb-6">
                Texto descriptivo para destacar lo más importante del contenido de tu sitio.
                </p>
                <a
                href="#"
                className="inline-block bg-white text-black font-semibold px-6 py-3  hover:bg-gray-200 transition"
                >
                Contact us
                </a>
            </div>
        </section>
    );
}
 
export default BannerDesignOne;