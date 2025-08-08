export default function RegisterModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-lg relative text-center">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-black text-white w-8 h-8 rounded-full flex items-center justify-center text-xl"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold text-gray-700 mb-4">
          Register for Training
        </h2>
        <p className="text-gray-600 mb-6">
          Please click the button below to complete your registration.
        </p>

        <a
          href="https://tally.so/r/w8lLYY" // replace with your actual form link
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
        >
          Go to Registration Form
        </a>
      </div>
    </div>
  );
}
