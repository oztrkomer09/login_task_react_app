import one from "../../assets/1.png";
import three from "../../assets/3.png";
import four from "../../assets/4.png";
import five from "../../assets/5.png";
import six from "../../assets/6.png";
import { Outlet } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="h-screen w-screen bg-gradient-to-br from-firstColor to-secondColor text-white overflow-hidden relative flex">
        {/* Independent Images */}
        <div className="hidden md:block">
          <img src={one} alt="one" className="absolute w-64" />
          <img src={three} alt="three" className="absolute w-64 right-24" />
          <img
            src={four}
            alt="four"
            className="absolute bottom-0 left-12 w-72"
          />
          <img
            src={six}
            alt="six"
            className="absolute right-0 bottom-32 w-40 "
          />
          <img
            src={five}
            alt="five"
            className="w-[300px] left-[790px] bottom-0 absolute"
          />
        </div>

        {/*------- Login Form  -------*/}
        <Outlet />
      </div>
    </div>
  );
};

export default Login;
