import React from 'react'
import Button from "../components/navbar/components/Button";
import HeroImage from "../assets/Hero.png";
import Cards from '../components/Card';
import AboutUs from '../components/About';
import HomePortfolio from '../components/HomePortfolio';
import Contact from '../components/HomeContact';

const Home = () => {
  return (
    <>
      <section
      className="h-screen bg-Hero bg-cover
      font-[Poppins] md:bg-top bg-center"
      style={{
        backgroundImage: `url(${HeroImage})`,
        backgroundSize: 'cover',
      }}
    >
      <div className="flex flex-col justify-center text-center items-center h-3/4">
        <h2 className="text-white text-2xl font-medium ">Fashion Tips</h2>
        <h1 className="md:text-5xl text-3xl text-white font-semibold py-5">
          Items every woman should have
        </h1>
        <div className="text-xl">
          <Button />
        </div>
      </div>
    </section>
    <Cards />
    <AboutUs/>
    <HomePortfolio/>
    <Contact/>
    </>
  )
}

export default Home
