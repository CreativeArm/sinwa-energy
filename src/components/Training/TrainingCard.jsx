// src/components/Training/TrainingCard.jsx

import { Link } from "react-router-dom";

export default function TrainingCard({
  training,
  clickable = true,
  showRegisterButton = true,
}) {
  const { _id, imageUrl, title, overview, duration, format, price, isNew } =
    training;

  const cardContent = (
    <div className="relative bg-white border border-lightblue rounded-xl shadow-custom overflow-hidden transition-all duration-300  group-hover:shadow-lg">
      {isNew && (
        <span className="absolute top-3 right-3 bg-primary text-white text-xs px-3 py-1 rounded-md z-10">
          New
        </span>
      )}

      <div className="overflow-hidden h-48">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-4 space-y-3">
        <h3 className="text-lg font-semibold text-dark truncate group-hover:text-primary transition">
          {title}
        </h3>
        <p className="text-md text-gray-600">{overview?.slice(0, 80)}...</p>

        <div className="flex text-[13px] text-gray-500 gap-4">
          <span className="flex gap-1 text-center">
            <img src="/image/icon/clock.png" alt="" className="h-5" />
            {duration}
          </span>
          <span className="flex text-center">
            <img src="/image/icon/location.png" alt="" className="h-5" />
            {format}
          </span>
        </div>

        <p className="text-right text-primary font-bold text-xl">{price}</p>
      </div>
    </div>
  );

  return clickable ? (
    <Link to={`/trainings/${_id}`} className="block group">
      {cardContent}
    </Link>
  ) : (
    <div className="group">{cardContent}</div>
  );
}
