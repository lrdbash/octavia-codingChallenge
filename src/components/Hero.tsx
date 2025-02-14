import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://r2.vidzflow.com/v/dyEQLCzq4u_1080p_1707341914.mp4"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-6">
          From Carbon Waste to Climate Value
        </h1>
        <p className="text-xl md:text-2xl text-center max-w-3xl mb-8">
          Transforming industrial carbon emissions into valuable products
        </p>
        <button className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Hero;
