import React from 'react';

const Technology = () => {
  return (
    <section id="technology" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Take a Closer Look at Our First Plant</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Our state-of-the-art facility demonstrates the future of carbon capture and utilization technology.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              src="https://r2.vidzflow.com/v/KuagvzoUPR_1080p_1732807499.mp4"
            />
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Efficient Capture</h3>
              <p className="text-gray-400">Advanced technology for maximum CO2 capture efficiency</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Sustainable Process</h3>
              <p className="text-gray-400">Environmentally friendly conversion methods</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Valuable Output</h3>
              <p className="text-gray-400">Converting waste into market-ready products</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
