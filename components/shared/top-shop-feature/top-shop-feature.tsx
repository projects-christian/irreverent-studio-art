import "@/components/shared/top-shop-feature/top-shop-feature.scss";
import Image from "next/image";

const TopShopFeature = () => {
  return (
    <section className="top-shop-feature">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-x-8 px-4 mt-8 w-full mb-8">
        <div className="relative w-full h-[300px] md:h-[750px]" style={{ backgroundImage: "url('/images/fortuny-1.jpg')" }}>
          <Image src="/images/fortuny-1.jpg" alt="Columna 1" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-white text-center px-4">
            <h4 className="text-4xl">Sillas</h4>
          </div>
        </div>

        <div className="relative w-full h-[300px] md:h-[750px]" style={{ backgroundImage: "url('/images/fortuny-3.jpg')" }}>
          <Image src="/images/fortuny-3.jpg" alt="Columna 1" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-white text-center px-4">
            <h4 className="text-4xl">Lamparas</h4>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TopShopFeature;
