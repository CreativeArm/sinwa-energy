// src/components/Training/FilterSidebar.jsx

const filtersList = {
  Categories: [
    "Geology",
    "Geophysics",
    "Petroleum Engineering",
    "Data Analysis",
  ],
  Format: ["Virtual", "Physical"],
  Level: ["Basic", "Intermediate", "Professional"],
};

export default function FilterSidebar({ filters, setFilters, allTrainings }) {
  // ✅ Toggle filter checkboxes
  const toggleFilter = (section, item) => {
    const current = filters[section];
    const updated = current.includes(item)
      ? current.filter((i) => i !== item)
      : [...current, item];

    setFilters({ ...filters, [section]: updated });
  };

  // ✅ Count matching items per filter
  const getCount = (section, value) => {
    return allTrainings.filter((training) => {
      const trainingValue =
        section === "Categories"
          ? training.category
          : section === "Format"
          ? training.format
          : training.level;

      if (Array.isArray(trainingValue)) {
        return trainingValue.includes(value); // e.g., ['Geology', 'Geophysics']
      } else {
        return trainingValue === value;
      }
    }).length;
  };

  return (
    <div className="bg-white rounded-2xl border border-lightblue p-6 shadow-custom sticky top-28">
      {Object.entries(filtersList).map(([section, items]) => (
        <div key={section} className="mb-8">
          <h3 className="text-gray-800 font-semibold text-sm mb-4">
            {section}
          </h3>
          <ul className="space-y-4">
            {items.map((item) => (
              <li
                key={item}
                className="flex items-center justify-between text-sm text-gray-700"
              >
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="accent-primary w-4 h-4"
                    checked={filters[section].includes(item)}
                    onChange={() => toggleFilter(section, item)}
                  />
                  {item}
                </label>

                {/* Count Badge */}
                <span className="text-xs bg-lightblue text-white px-2 py-0.5 rounded-full">
                  {getCount(section, item)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
