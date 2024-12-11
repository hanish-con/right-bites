import { Link } from "react-router";

// By: Hanish Kavalanchery Haridas
export default function Home() {
  return (
    <>
      <header>
        <div className="hero">
          <div className="hero-content container">
            <h1 className="text-7xl">Welcome to Right Bites</h1>
            <p className="text-5xl font-medium">
              Delicious, healthy, food catered just for you.
            </p>
            <Link to={"/menu"}>
              <button className="hero-button">Explore</button>
            </Link>
          </div>
        </div>
      </header>
      <main className="">
        <section class="section-welcome">
          <div class="container2">
            <div class="content">
              <h2 className="text-5xl">Nourish Your Body, Elevate Your Life</h2>
              <p className="text-xl">
                Discover delicious, wholesome recipes and tips to fuel your
                journey toward a healthier you.
              </p>
            </div>
            <div className="image">
              <img src="images/healthy.webp" alt="Healthy food" />
            </div>
          </div>
        </section>

        <section className="section-about">
          <div className="container2 reverse">
            <div className="content">
              <h2 className="text-5xl">Your Guide to a Healthier Plate</h2>
              <p className="text-xl">
                At Right Bites, we believe that healthy eating doesn’t have to
                be boring or complicated. Our mission is to make nutritious food
                simple, accessible, and—most importantly—delicious!
              </p>
            </div>
            <div className="image">
              <img
                src="images/healthy-ingredients.png"
                alt="Healthy ingredients"
              />
            </div>
          </div>
        </section>

        <section className="section-featured">
          <div className="container2">
            <div className="content">
              <h2 className="text-5xl">
                This Week’s Star Recipe: Rainbow Buddha Bowl
              </h2>
              <p className="text-xl">
                Packed with vibrant veggies, wholesome grains, and a tangy
                tahini dressing, this Buddha Bowl is a feast for your eyes and
                your body.
              </p>
              <a href="#recipe-details" className="hero-button">
                Get the Recipe
              </a>
            </div>
            <div className="image">
              <img src="images/rainbow-buddha.webp" alt="Rainbow Buddha Bowl" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
