// src/components/Herosec.jsx

export default function Herosec() {
  return (
    <section
      className=" relative h-[60vh] md:h-[80vh] lg-w-full w-full flex items-center lg:justify-start text-white"
      style={{
        backgroundImage: "url('/image/hero-bg.png')", // Change to your actual image path
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

      {/* Content */}
      <div className="relative lg:text-left z-20 text-center px-4 max-w-3xl lg:max-w-7xl md:justify-center lg:mx-auto lg:w-full lg:px-8">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
          Explore Our <span className="text-primary">Specialized</span> <br />
          Geoscience Training Programs
        </h1>
        <p className="text-base md:text-lg text-gray-200 mb-6 lg:max-w-3xl">
          Enhance your skills with industry-leading courses taught by experts in
          geology, geophysics, petrophysics, and reservoir engineering.
        </p>
        <a
          href="/trainings"
          className="bg-primary hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-md shadow-custom transition duration-300"
        >
          Find Training
        </a>
      </div>
    </section>
  );
}
