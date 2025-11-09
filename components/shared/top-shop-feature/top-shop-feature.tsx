import "@/components/shared/top-shop-feature/top-shop-feature.scss";
import Image from "next/image";
import Link from "next/link";

const TopShopFeature = () => {
  return (
    <section className="top-shop-feature">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-x-8 px-4 mt-8 w-full mb-8">
        <Link
            href={`/category/cutlers`}
            className="relative w-full h-[300px] md:h-[750px]"
        >
            <Image src="/images/category-cutlers.webp" alt="Columna 1" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-white text-center px-4">
                <h4 className="text-4xl">Cutlers</h4>
            </div>
        </Link>
        <Link
            href={`/category/tables`}
            className="relative w-full h-[300px] md:h-[750px]"
        >
            <Image src="/images/category-tables-2.webp" alt="Columna 1" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-white text-center px-4">
                <h4 className="text-4xl">Tables</h4>
            </div>
        </Link>
      </div>
    </section>
  )
}

export default TopShopFeature;
