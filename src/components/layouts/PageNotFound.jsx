import { useNavigate } from "react-router-dom";
import notFound from "../../assets/preloader.png";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="font-inter bg-white flex flex-col  items-center gap-y-4 text-black mx-auto my-auto w-3/4 h-3/4 rounded-xl px-4">
      <img
        src={notFound}
        alt="Not Found"
        className="w-40 h-40 lg:w-80 lg:h-80 md:w-60 md:h-60"
      />
      <div className="flex flex-col gap-y-4">
        <p className="font-bold  lg:text-2xl text-center">
          Sorry, the page you're looking for doesn't exist. <br /> You can go
          back to login page
        </p>
        <button
          className="btn text-xs bg-gradient-to-br to-firstColor  border-0 text-white hover:scale-105"
          onClick={() => navigate("/home/loginform")}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default PageNotFound;
