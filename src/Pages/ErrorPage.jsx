import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {" "}
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        {" "}
        <h1 className="text-4xl font-bold text-red-500 mb-4">404</h1>{" "}
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Page Not Found
        </h2>{" "}
        <p className="text-gray-600 mb-6">
          Sorry, the page you are looking for does not exist.
        </p>{" "}
        <Link
          to="/"
          className="bg-purple-500 text-white px-5 py-2 rounded-lg font-semibold"
        >
          {" "}
          Go Home{" "}
        </Link>{" "}
      </div>{" "}
    </div>
  );
};

export default ErrorPage;
