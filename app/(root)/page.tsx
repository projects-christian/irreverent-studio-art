// import Slider from "@/components/shared/slider/slider";
import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";
// import Quote from "@/components/shared/quote/quote";
import DesignOne from "@/components/shared/categories/design-one/categories-design-one";
import HeroVideo from "@/components/home/hero-video/hero-video";
import TopShopFeature from "@/components/shared/top-shop-feature/top-shop-feature";
import ProductsDesignTwo from "@/components/shared/product/design-two/products-design-two";
import SliderTwo from "@/components/shared/slider-two/slider-two";
import BannerDesignOne from "@/components/shared/banners/banner-design-one/banner-design-one";

const Homepage = async () => {
    const latestProductsRaw = await getLatestProducts();
    const latestProducts = latestProductsRaw.map(product => ({
        ...product,
        price: product.price.toString(),
        rating: product.rating.toString(),
    }));

    return (
        <>
            <HeroVideo />
            <TopShopFeature />
            <ProductList data={latestProducts} title="Newest arrivals" />
            <SliderTwo data={latestProducts} />
            <DesignOne />
            <ProductsDesignTwo />
            <BannerDesignOne />
        </>
    );
};

export default Homepage;
