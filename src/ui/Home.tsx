import CardTour from "../features/CardTour";

function Home() {
  return (
    <>
      <section className="relative">
        <figure className="flex max-h-[70vh] before:absolute before:bottom-0 before:left-0 before:w-full before:h-1/5 banner-gradiant">
          <img src="/images/aqaba-bg.jpg" alt="aqaba sea" />
        </figure>
        <h1 className="absolute top-1/4 left-1/2 -translate-x-1/2 md:text-6xl text-3xl text-main font-semibold text-center drop-shadow-2xl">
          Discover Jordan's
          <br />
          <span className="text-gold-btn">Treasures</span> with Anas
        </h1>
      </section>
      <section className="pt-12 container mx-auto">
        <h2 className="text-center md:text-3xl text-lg capitalize">
          Explore Popular Destinations
        </h2>
        <div className="mt-7 grid grid-cols-12 gap-6">
          {
            Array.from({length: 4}, (_, i) => (
              <CardTour key={i} />
            ))
          }
        </div>
      </section>
    </>
  );
}

export default Home;