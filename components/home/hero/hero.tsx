import "@/components/home/hero/hero.scss";
import Image from "next/image";
const Hero = () => {
    return (
        <div className="section-hero section-home">
            <div className="section-hero__bg">
                <Image
                    src="/images/home-hero.jpg"
                    alt="home-hero"
                    width={1200} // proporción base
                    height={600}
                    style={{ width: "100%", height: "auto" }}
                    priority={true}
                />
            </div>
            <div
                className="section-hero__content"
                data-uk-scrollspy="target: &gt; *; cls: uk-animation-slide-bottom-small; delay: 500"
            >
                <h1 className="section-hero__title">Irreverent Art</h1>
                <p className="section-hero__subtitle">unique and unmatched</p>
            </div>
        </div>
    );
};

export default Hero;
