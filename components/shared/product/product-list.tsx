import ProductCard from "./product-card";
import { Product } from "@/types";
import "@/components/shared/product/product-list.scss";

const ProductList = ({
    data,
    title,
    limit,
}: {
    data: Product[];
    title?: string;
    limit?: number;
}) => {
    const limitedData = limit ? data.slice(0, limit) : data;

    return (
        <div className="section-new-arrivals my-10">
            <div className="uk-background-muted">
                <div className="uk-section-large uk-container w-[100%] lg:w-[90%] xl:w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="">{title}</h2>
                    {data.length > 0 ? (
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-12">
                            {limitedData.map((product: Product) => (
                                <ProductCard
                                    key={product.slug}
                                    product={product}
                                />
                            ))}
                        </div>
                    ) : (
                        <div>
                            <p>No products found</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductList;
