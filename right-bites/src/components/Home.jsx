import { Link } from "react-router";

// By: Hanish Kavalanchery Haridas
export default function Home() {
  return (
    <>
        <header>
        <div className="hero">
            <div className="hero-content container">
                <h1 className="text-7xl">Welcome to Right Bites</h1>
                <p className="text-5xl font-medium">Delicious, healthy, food catered just for you.</p>
                <Link to={"/menu"}>
                    <button className="hero-button">
                        Explore
                    </button>
                </Link>
            </div>
        </div>
        </header>
        <main className="">
            <section>
                <h2 className="text-5xl">Nourish Your Body, Elevate Your Life</h2>
                <p className="text-xl">Discover delicious, wholesome recipes and tips to fuel your journey toward a healthier you.</p>
            </section>

            <section>
                <h2 className="text-5xl">Your Guide to a Healthier Plate</h2>
                <p className="text-xl">
                At Right Bites, we believe that healthy eating doesn’t have to be boring or complicated.
                Our mission is to make nutritious food simple, accessible, and—most importantly—delicious!
                </p>
            </section>

            <section>
                <h2 className="text-5xl">This Week’s Star Recipe: Rainbow Buddha Bowl</h2>
                <p className="text-xl">
                Packed with vibrant veggies, wholesome grains, and a tangy tahini dressing,
                this Buddha Bowl is a feast for your eyes and your body.
                </p>
            </section>

  <section id="welcome" class="section-welcome">
    <div class="container2">
      <div class="content">
        <h1>Nourish Your Body, Elevate Your Life</h1>
        <p>Discover delicious, wholesome recipes and tips to fuel your journey toward a healthier you.</p>
        <a href="#recipes" class="cta-button">Explore Recipes</a>
      </div>
      <div class="image">
        <img src="your-image-1.jpg" alt="Healthy food" />
      </div>
    </div>
  </section>

  <section id="about-us" class="section-about">
    <div class="container2 reverse">
      <div class="content">
        <h2>Your Guide to a Healthier Plate</h2>
        <p>
          At Right Bites, we believe that healthy eating doesn’t have to be boring or complicated.
          Our mission is to make nutritious food simple, accessible, and—most importantly—delicious!
        </p>
      </div>
      <div class="image">
        <img src="your-image-2.jpg" alt="Healthy ingredients" />
      </div>
    </div>
  </section>

  <section id="featured-recipe" class="section-featured">
    <div class="container2">
      <div class="content">
        <h2>This Week’s Star Recipe: Rainbow Buddha Bowl</h2>
        <p>
          Packed with vibrant veggies, wholesome grains, and a tangy tahini dressing,
          this Buddha Bowl is a feast for your eyes and your body.
        </p>
        <a href="#recipe-details" class="cta-button">Get the Recipe</a>
      </div>
      <div class="image">
        <img src="your-image-3.jpg" alt="Rainbow Buddha Bowl" />
      </div>
    </div>
  </section>
        </main>

    </>
  );
}
