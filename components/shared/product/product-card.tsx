import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ProductPrice from "./product-price";
import { Product } from "@/types";

const ProductCard = ({ product }: { product: Product }) => {
    return (
        <Card className="w-full max-w-sm flex flex-col justify-around">
            <CardHeader className="p-0 items-center">
                <Link href={`/product/${product.slug}`}>
                    <Image
                        className="product-card__img"
                        src={product.images[0]}
                        alt={product.name}
                        height={300}
                        width={300}
                        priority={true}
                    />
                </Link>
            </CardHeader>
            <CardContent className="p-4 grid gap-4">
                <p className="font-lora text-xs mb-[8px]">{product.brand}</p>
                <Link href={`/product/${product.slug}`}>
                    <h3 className="font-robotoCondensed text-md font-medium mb-[15px]">{product.name}</h3>
                </Link>
                <div className="flex-between gap-4">
                    <p>{product.rating} Stars</p>
                    {product.stock > 0 ? (
                        <ProductPrice value={Number(product.price)} />
                    ) : (
                        <p className="text-destructive">Out Of Stock</p>
                    )}
                </div>
            </CardContent>
        </Card>
    );
};

export default ProductCard;
