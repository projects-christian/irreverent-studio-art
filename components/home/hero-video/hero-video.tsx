import "@/components/home/hero-video/hero-video.scss";
const HeroVideo = () => {
    return (
        <section className="relative w-full h-[90vh] overflow-hidden">
      {/* Video background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/hero-poster.jpg"
      >
        <source src="/videos/temple-and-marble-sculptures.mp4" type="video/webm" />
        <source src="/videos/temple-and-marble-sculptures.mp4" type="video/mp4" />
        Tu navegador no soporta video HTML5.
      </video>

        
      {/* Overlay content */}
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <div className="text-center text-white px-4 section-hero__content">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 section-hero__title">
            Irreverent Art
          </h1>
          <p className="text-lg md:text-xl section-hero__subtitle">
            unique and unmatched
          </p>
        </div>
      </div>
    </section>
    );
};

export default HeroVideo;
