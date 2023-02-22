import logo from "../assets/mayzor-logo.png";
import { GiSettingsKnobs } from "react-icons/gi";
import { IoIosNotificationsOutline } from "react-icons/io";
import profile from "../assets/main-profile.png";
import { AiOutlineSearch } from "react-icons/ai";
import { useUserData } from "../context/Context";

function Navbar() {
  const { userMail } = useUserData();
  return (
    <div className=" bg-white flex-col items-center justify-center md:justify-between md:flex md:flex-row absolute w-full shadow-sm">
      <img src={logo} alt="" className="mx-auto md:mx-0 z-50" />
      <div className="flex gap-x-4 px-3 items-center justify-center pb-4 md:pb-0 ">
        <div className="relative">
          <input
            type="text"
            className="input w-full max-w-xs h-10 cursor-text bg-white border-gray-300 pl-10 "
          />
          <AiOutlineSearch className="absolute left-2 top-2" size={25} />
        </div>

        <GiSettingsKnobs
          size={20}
          className="text-[#B8BFCC] rotate-90 cursor-pointer text-sm"
        />
        <IoIosNotificationsOutline
          size={25}
          className="text-[#B8BFCC] cursor-pointer "
        />
        <img src={profile} alt="profile" />
        <p className="text-black text-sm">
          {userMail.substring(0, userMail.indexOf("@"))}
        </p>
      </div>
    </div>
  );
}

export default Navbar;
