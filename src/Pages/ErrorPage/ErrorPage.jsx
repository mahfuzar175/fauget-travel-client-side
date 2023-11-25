import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="grid h-screen px-4 bg-white place-content-center">
        <div className="text-center">
          <h1 className="font-black text-gray-200 text-9xl">404</h1>

          <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Uh-oh!
          </p>

          <p className="mt-4 text-gray-500 mb-4">We can't find that page.</p>

        <Link to='/'><button className="btn btn-primary rounded-md">Go Back Home</button></Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
