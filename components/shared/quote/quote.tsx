import "@/components/shared/quote/quote.scss";
import Image from "next/image";

const Quote = () => {
    return (
        <div className="section-quote">
            <div className="uk-container">
                <div
                    className="section-quote__title"
                    data-uk-scrollspy="target: &gt; *; cls: uk-animation-slide-bottom-small; delay: 500"
                >
                    <h3>
                        Beauty begins the moment you
                        <br /> decide to be yourself.
                    </h3>
                    <span>viasun thinking</span>
                </div>
                <div
                    className="section-quote__content"
                    data-uk-scrollspy="target: &gt; *; cls: uk-animation-slide-bottom-medium; delay: 500"
                >
                    <Image
                        className="section-quote__img section-quote__img--1"
                        src="/images/img-quote-1.jpg"
                        alt="img-quote"
                        width={350} // proporción base
                        height={380}
                        // style={{ width: "100%", height: "auto" }}
                        priority={true}
                    />
                    <Image
                        className="section-quote__img section-quote__img--2"
                        src="/images/img-quote-2.jpg"
                        alt="img-quote"
                        width={300} // proporción base
                        height={300}
                        // style={{ width: "100%", height: "auto" }}
                        priority={true}
                    />
                    <Image
                        className="section-quote__img section-quote__img--3"
                        src="/images/img-quote-3.jpg"
                        alt="img-quote"
                        width={420} // proporción base
                        height={460}
                        // style={{ width: "100%", height: "auto" }}
                        priority={true}
                    />
                </div>
            </div>
        </div>
    );
};

export default Quote;
