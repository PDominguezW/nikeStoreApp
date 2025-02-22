import { PopularProductCard } from "../components";

const PopularProducts = (offers) => {

  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Los <span className="text-coral-red"> 20 mejores descuentos </span>  de hoy
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Extraido de todas las paginas de zapatillas de running chilenas
        </p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {offers.offers.map((offer) => (
          <PopularProductCard {...offer} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
