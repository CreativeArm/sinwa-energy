export default function TrainingHeader() {
  return (
    <section className="relative w-full h-[180px] md:h-[250px] bg-cover bg-center bg-no-repeat bg-[url('/image/new-bg.jpg')]">
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center pl-4 md:pl-10 justify-center pt-16">
        <h1 className="text-white text-3xl md:text-5xl font-semibold leading-none pt-1">
          Training
        </h1>
      </div>
    </section>
  );
}

<div className="relative z-10 flex h-full items-center pl-4 md:pl-10">
  <h1 className="text-white text-3xl md:text-5xl font-bold leading-none pt-1">
    Training
  </h1>
</div>;
