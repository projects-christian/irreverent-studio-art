import "./categories-design-one.scss";
// import { FeatureProductsType } from "@utils/types";
// import data from "@data/design-one.json"
import rawData from "../../../../data/design-one.json"
import Image from "next/image";



type Product = {
  id: number
  title: string
  slug: string
  author: { name: string; slug: string }
  image: { src: string }
}

type Section = {
  section: string
  smallProducts?: Product[]
  largeProducts?: Product[]
}

type DesignJson = {
  title: string
  content: Section[]
}

const data = rawData as DesignJson;
const heroSection = data.content.find(section => section.section === "hero-section")
const smallProducts = heroSection?.smallProducts ?? []
// console.log(smallProducts);



const DesignOne = () => (

    <section className="categories-design-one slider-style-3 pt--70 mb-8 mt-8">
        <div className="w-[100%] mx-auto px-4">
            <div className="flex flex-row gap-6 items-stretch  md:h-auto">
                <div className="w-6/12 md:w-5/12">
                    <div className="overflow-hidden relative h-[500px] min-h-full slider-thumbnail thumbnail-overlay">
                        <a rel="preload" href="/collection">
                            <Image
                                className="w-full h-full object-cover rounded-lg"
                                src="/images/fortuny-lamp-1.jpg"
                                alt="Nft_Profile"
                                width={658} // proporción base
                                height={400}
                                style={{ color: "transparent" }}
                                priority={true}
                            />
                            {/* <img alt="Nft_Profile" srcSet="/_next/image?url=%2Fimages%2Fbanner%2Fbanner-02.jpg&amp;w=750&amp;q=75 1x, /_next/image?url=%2Fimages%2Fbanner%2Fbanner-02.jpg&amp;w=1920&amp;q=75 2x" src="/_next/image?url=%2Fimages%2Fbanner%2Fbanner-02.jpg&amp;w=1920&amp;q=75" width="658" height="615" decoding="async" data-nimg="1" className="w-100" style={{ color: "transparent" }} /> */}
                        </a>
                        <div className="absolute left-[14px] lg:left-[50px] bottom-[8px] lg:bottom-[50px] z-20 text-left">
                            <h5 className="text-[18px] md:text-[30px] text-[#ffffff] -mb-[10px]">
                                <a className="block relative" rel="preload" href="/collection">Categories</a>
                            </h5>
                            {/* <span className="text-[10px] md:text-[14px] text-[#00a3ff] inline-block mt-5">Farik Shaikh</span> */}
                        </div>
                    </div>
                </div>

                <div className="w-6/12 md:w-7/12">
                    {smallProducts && (
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 h-full">
                            {smallProducts.map((prod) => (
                                <div key={prod.id || prod.slug} className="flex h-full">
                                    <div className="relative flex-1">
                                        <div className="overflow-hidden rounded-[5px] thumbnail thumbnail-overlay h-full">
                                            <a rel="preload" href="/collection">
                                                <Image
                                                    className="w-full h-full object-cover object-center"
                                                    src="/images/fortuny-4.jpg"
                                                    alt="Nft_Profile"
                                                    width={1000}
                                                    height={1000}
                                                    priority={true}
                                                />
                                            </a>
                                        </div>
                                        <div className="absolute bottom-[4px] lg:bottom-[31px] left-[10px] lg:left-[36px] z-20">
                                            <h5 className="text-[10px] md:text-[22px] leading-[1.24] font-bold mb-[0] lg:mb-[7px] text-white">
                                                <a rel="preload" href={prod.slug}>{prod.title}</a>
                                            </h5>
                                            {/* <span className="text-[8px] md:text-[14px] text-[#00a3ff] inline-block mt-[5px] lg:mt-5">{prod.author.name}</span> */}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    </section>
);
export default DesignOne;
