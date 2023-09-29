import { PopularProductCard } from "../components";

const PopularProductsBrand = (brand) => {

  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Mejores descuentos de <span className="text-coral-red"> {brand.name} </span> el dia de hoy
        </h2>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {brand?.bestOffers.map((offer) => (
          <PopularProductCard {...offer} />
        ))}
      </div>
    </section>
  );
};

export default PopularProductsBrand;
