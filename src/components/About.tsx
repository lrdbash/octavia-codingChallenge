import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">From Carbon Waste to Climate Value</h2>
            <p className="text-lg text-gray-300">
              We&apos;re revolutionizing the way industries handle carbon emissions by transforming waste
              into valuable products. Our innovative technology captures CO2 and converts it into
              sustainable materials, creating a circular economy approach to carbon management.
            </p>
            <button className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all">
              Learn More
            </button>
          </div>
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              src="https://r2.vidzflow.com/v/k2YrMV9fpN_1080p_1708033986.mp4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
