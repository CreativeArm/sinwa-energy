import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { sanity } from "../../lib/getCourses";
import "swiper/css";
import "swiper/css/pagination";

export default function CategoryAndFlyer() {
  const [upcomingTrainings, setUpcomingTrainings] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    sanity
      .fetch(
        `*[_type == "course" && isUpcoming == true] | order(_createdAt desc)[0...3] {
        _id,
        title,
        slug,
        "imageUrl": image.asset->url
      }`
      )
      .then(setUpcomingTrainings)
      .catch(console.error);
  }, []);

  return (
    <section className="py-16 px-4 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center justify-between">
        {/* LEFT: Categories */}
        <div className="w-full lg:w-1/2">
          <h3 className="text-gray-500 text-sm mb-6 uppercase">
            Training Categories
          </h3>
          <ul className="space-y-5">
            {[
              "Geology",
              "Geophysics",
              "Petroleum Engineering",
              "Data Analysis",
            ].map((cat, idx) => (
              <li
                key={idx}
                className="flex items-center text-lg font-semibold text-[#6B7280]"
              >
                <svg
                  className="w-5 h-5 text-lightblue mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-7.8 7.8a1 1 0 01-1.414 0l-3.8-3.8a1 1 0 111.414-1.414L8 12.086l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {cat}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT: Dynamic Flyer Carousel */}
        <div className="w-full lg:w-1/2 max-w-[480px]">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            loop
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
          >
            {upcomingTrainings.map((training, index) => (
              <SwiperSlide key={training._id || index}>
                <div className="relative rounded-2xl overflow-hidden border border-lightblue shadow-custom">
                  <div
                    className="cursor-pointer"
                    onClick={() => setSelectedImage(training.imageUrl)}
                  >
                    <div className="absolute top-4 left-4 z-10 bg-gray-800 text-white text-xs px-3 py-1 rounded-md">
                      Upcoming Training
                    </div>
                    <img
                      src={training.imageUrl}
                      alt={training.title}
                      className="w-full h-auto object-cover"
                    />
                  </div>

                  {/* Register Button */}
                  <div className="p-4 flex justify-center">
                    <a
                      href={`/trainings/${training._id}`}
                      className="inline-block bg-primary text-white text-sm font-semibold px-6 py-2 rounded-md hover:bg-blue-600 transition"
                    >
                      Register Now
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Modal for Enlarged Flyer */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-3xl w-full px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-white text-2xl font-bold bg-black rounded-full w-8 h-8 flex items-center justify-center"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Enlarged Flyer"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}
