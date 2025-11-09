import "./products-design-two.scss";
import { getFeaturedProducts } from "@/lib/actions/product.actions";
import type { Product } from "@/types";
// import data from "@/data/design-one.json";
import Image from "next/image";
import Link from "next/link";


const products = [
  {
    id: 1,
    image: "/images/fortuny-7.jpg",
    category: "Sculpture",
    name: "Marble Head",
    price: "$120",
  },
  {
    id: 2,
    image: "/images/fortuny-7.jpg",
    category: "Painting",
    name: "Abstract Flow",
    price: "$250",
  },
  {
    id: 3,
    image: "/images/fortuny-7.jpg",
    category: "Furniture",
    name: "Mosaic Table",
    price: "$430",
  },
  {
    id: 4,
    image: "/images/fortuny-7.jpg",
    category: "Decor",
    name: "Crystal Skull",
    price: "$90",
  },
];



const ProductsDesignTwo = async () => {
    const featuredProducts = await getFeaturedProducts();

    return (
        <section className="products-design-two w-full px-4 mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 md:gap-x-8">
                {/* {products.map((product) => (
                    <div
                        key={product.id}
                        className="relative w-full h-[600px] overflow-hidden"
                    >
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute bottom-8 w-full text-left text-white py-4 px-14">
                            <p className="text-sm tracking-wide">{product.category}</p>
                            <h3 className="text-xl font-semibold uppercase">{product.name}</h3>
                            <span className="text-base font-medium">{product.price}</span>
                        </div>
                    </div>
                ))} */}
                {featuredProducts.map((product: Product) => (
                    <Link
                        href={`/product/${product.slug}`}
                        key={product.id}
                        className="group relative w-full h-[600px] overflow-hidden"
                    >
                        <Image
                            src={product.images?.[0] ?? "/placeholder.png"}
                            alt={product.name}
                            fill
                            className="object-cover transition-transform duration-500  group-hover:scale-[1.01]"
                            priority
                        />
                        {/* version sombra oscura completa */}
                        {/* <div
                            className="absolute inset-0 bg-black/20 transition-opacity duration-500 group-hover:opacity-0"
                            aria-hidden="true"
                        /> */}
                        {/* version sombra desde abajo, no cubre todo */}
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent transition-opacity duration-500 group-hover:opacity-0"
                            aria-hidden="true"
                        />
                        <div className="absolute bottom-8 w-full text-left text-white py-4 px-14">
                            <p className="text-sm tracking-wide">{product.category}</p>
                            <h3 className="text-xl font-semibold uppercase">{product.name}</h3>
                            {/* <span className="text-base font-medium">{product.price}</span> */}
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}

export default ProductsDesignTwo;
