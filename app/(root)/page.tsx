import Hero from "@/components/home/hero/hero";
import Slider from "@/components/shared/slider/slider";
import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";
import Quote from "@/components/shared/quote/quote";

const Homepage = async () => {
    const latestProducts = await getLatestProducts();

    return (
        <>
            <Hero />
            <Slider />
            <Quote />
            <div className="">
                <ProductList data={latestProducts} title="Newest arrivals" />
            </div>
        </>
    );
};

export default Homepage;
