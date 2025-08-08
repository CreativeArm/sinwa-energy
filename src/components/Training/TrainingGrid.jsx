import { useState } from "react";
import TrainingCard from "./TrainingCard";

// Number of items per page
const ITEMS_PER_PAGE = 6;

export default function TrainingGrid({ data }) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = data.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleNext = () =>
    currentPage < totalPages && setCurrentPage(currentPage + 1);
  const handlePrev = () => currentPage > 1 && setCurrentPage(currentPage - 1);

  return (
    <div className="space-y-6">
      {/* Header with page info and controls */}
      <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
        <p>{data.length} Trainings Found</p>
        <div className="flex items-center gap-3">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className={`text-xs px-3 py-1 border rounded-full ${
              currentPage === 1
                ? "text-gray-400 border-gray-300"
                : "text-dark border-lightblue"
            }`}
          >
            ← Prev
          </button>
          <span className="text-xs">
            Page <strong>{currentPage}</strong> of {totalPages}
          </span>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`text-xs px-3 py-1 border rounded-full ${
              currentPage === totalPages
                ? "text-gray-400 border-gray-300"
                : "text-dark border-lightblue"
            }`}
          >
            Next →
          </button>
        </div>
      </div>

      {/* Grid of cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {currentItems.map((training) => (
          <TrainingCard key={training._id} training={training} />
        ))}
      </div>
    </div>
  );
}
