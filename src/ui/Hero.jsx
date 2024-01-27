import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-24 items-center align-element py-20">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
          Modernizing our Consumers Experience
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8">
          Welcome to our online store – your go-to for stylish fashion, tech,
          and home essentials. Shop securely, enjoy swift delivery, and elevate
          your lifestyle with our collection.
        </p>
        <div className="mt-10">
          <Link
            to="/products"
            className="bg-[#057aff] text-slate-100 px-4 py-2 rounded"
          >
            Our Products
          </Link>
        </div>
      </div>
      <div className="h-[35rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box ">
        <div className="carousel-item">
          <img
            src="/src/assets/hero.jpg"
            className="rounded-box h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
export default Hero;
