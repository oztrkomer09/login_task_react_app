import profile from "../assets/main-profile.png";
import { useUserData } from "../context/Context";
import { FiPower } from "react-icons/fi";
import { MdArrowBackIos } from "react-icons/md";
import { RiApps2Line } from "react-icons/ri";
import { ImUserPlus } from "react-icons/im";

function Sidebar({ navigate }) {
  const { userMail, handleLogout } = useUserData();
  return (
    <div className="bg-white w-[284px] pt-44 md:pt-32 shrink-0">
      {/* Sidebar Header */}
      <div className="flex justify-center gap-x-4 items-center">
        <img src={profile} alt="profile" />
        <div>
          <p className="text-black text-xs font-semibold">{userMail} </p>
          <p className="text-xs text-gray-400 font-semibold">Admin</p>
        </div>
        <FiPower
          onClick={() => handleLogout({ navigate })}
          size={22}
          className="text-blue-700 cursor-pointer"
        />
      </div>
      {/* Sidebar Body */}

      <div>
        <div className="mt-16">
          <div className="flex gap-x-12 justify-around items-center text-sm">
            <p>Navigation</p>
            <MdArrowBackIos className="rotate-90 text-blue-700 mt-2 cursor-pointer" />
          </div>
          <div className="flex gap-x-4 mx-10 mt-4 items-center cursor-pointer">
            <RiApps2Line size={23} className="text-blue-700" />
            <p className="text-sm text-black font-semibold">Homepage</p>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex gap-x-20 justify-around items-center text-sm ">
            <p>APPS</p>
            <MdArrowBackIos className="rotate-90 text-blue-700 mt-2 cursor-pointer" />
          </div>
          <div className="flex gap-x-4 mx-7 mt-4 items-center bg-blue-100 p-3 rounded-3xl cursor-pointer">
            <ImUserPlus size={23} className="text-blue-700" />
            <p className="text-sm text-black font-semibold">User Operations</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
