import "./related-products.scss";
import data from "@/data/design-one.json";
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

const RelatedProducts = () => {
    return ( 
        <section className="products-design-two w-full mb-8">
            <h2 className="text-2xl font-semibold mb-2">Productos relacionados</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 md:gap-x-8">
                {products.map((product) => (
                    <Link
                        href="#"
                        key={product.id}
                        className="relative w-full h-[300px] overflow-hidden"
                    >
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute bottom-8 w-full text-left text-white py-4 px-8">
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
 
export default RelatedProducts;