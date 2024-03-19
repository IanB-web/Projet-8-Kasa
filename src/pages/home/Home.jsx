import React from "react";
import Header from "/src/components/header";
import Footer from "/src/components/footer";
import Banner from "/src/components/banner";
import Gallery from "/src/components/gallery";

const Home = () => {
  return (
    <>
      <Header />

      <main>
        <div className="content">
          <Banner
            src="./banner-img.png"
            title="Chez vous, partout et ailleurs"
          />
          <Gallery />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Home;
