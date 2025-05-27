import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { IoIosArrowRoundForward } from "react-icons/io";
import { RiGlobalLine } from "react-icons/ri";
import { FiCoffee } from "react-icons/fi";
import { LuLeaf } from "react-icons/lu";

function Product() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Section2 />
      <Footer />
    </>
  );
}

export default Product;

function HeroSection() {
  return (
    <>
      <div
        className="hero h-[450px]"
        style={{
          backgroundImage:
            "url(https://i.pinimg.com/736x/c6/1f/8f/c61f8f42ee089bee27de77f4a64cdbf6.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Aroma Sriwijaya</h1>
            <p className="mb-5 text-2xl font-semibold">
              Premium Indonesian Coffee Beans for Global Markets
            </p>
            <button className="btn bg-amber-800 border-amber-800 text-white shadow-none">
              View Coffee Catalog <IoIosArrowRoundForward />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
function Section2() {
  return (
    <>
     <div>
        <h2 className="flex justify-center items-center mt-7 text-4xl font-bold">
          Product
        </h2>
      </div>
      <div className="flex justify-center gap-4 mt-5">
        <div className="card bg-base-100 w-96 shadow-sm  ">
          <figure className="px-10 pt-10">
            <img
              src="src/assets/latte.jpg"
              alt="Latte"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Coffee Latte</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions ">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 w-96 shadow-sm  ">
          <figure className="px-10 pt-10">
            <img
              src="src/assets/matcha.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Matcha Latte</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 w-96 shadow-sm  ">
          <figure className="px-10 pt-10">
            <img
              src="src\assets\american.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Americano</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-5">
        <div className="card bg-base-100 w-96 shadow-sm  ">
          <figure className="px-10 pt-10">
            <img src="src/assets/aren.jpg" alt="Latte" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Aren Latte</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions ">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 w-96 shadow-sm  ">
          <figure className="px-10 pt-10">
            <img
              src="src\assets\matchiato.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Latte Macchiato</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 w-96 shadow-sm  ">
          <figure className="px-10 pt-10">
            <img
              src="src\assets\american.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Americano</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
