import { useUserData } from "../context/Context";
import { MdArrowBackIos } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BsTrash } from "react-icons/bs";
import { useOutletContext, Navigate } from "react-router-dom";

function EditForm() {
  const { editUser, setEditUser, handleUpdate } = useUserData();
  const { navigate } = useOutletContext();

  return editUser ? (
    <div className="w-full h-full  flex justify-center items-center px-2 pb-44 md:pb-20 pt-36 md:pt-20 ">
      <div className="w-full h-full bg-white rounded-lg p-4 gap-y-10 flex flex-col overflow-scroll">
        <div className="flex items-center gap-x-2">
          <MdArrowBackIos
            size={25}
            className="text-blue-700 cursor-pointer hover:scale-110"
            onClick={() => {
              navigate(-1);
              setEditUser(null);
            }}
          />
          <h2 className="text-xs text-black font-semibold">
            User: {editUser.name}
          </h2>
        </div>

        {/* Form inputs */}
        <div className=" flex gap-x-3">
          <CgProfile size={90} className="text-gray-900" />
          <div className="flex flex-col gap-y-2">
            <h2 className="text-xs font-semibold text-[#4C5F82]">
              Name Surname
            </h2>
            <input
              onChange={(e) => {
                setEditUser({ ...editUser, name: e.target.value });
              }}
              defaultValue={editUser.name}
              type="text"
              className="bg-[#FCFCFC] focus:bg-gray-700 border-[#E1EDFF] border-[1.5px] input w-full max-w-xs rounded-full text-gray-700 focus:text-[#FCFCFC] text-xs"
            />
            <h2 className="text-xs font-semibold text-[#4C5F82]">Phone</h2>
            <input
              onChange={(e) => {
                setEditUser({ ...editUser, phone: e.target.value });
              }}
              defaultValue={editUser.phone}
              type="text"
              className="bg-[#FCFCFC] focus:bg-gray-700 border-[#E1EDFF] border-[1.5px] input w-full max-w-xs rounded-full text-gray-700 focus:text-[#FCFCFC] text-xs"
            />
            <h2 className="text-xs font-semibold text-[#4C5F82]">E-mail</h2>
            <input
              onChange={(e) => {
                setEditUser({ ...editUser, email: e.target.value });
              }}
              defaultValue={editUser.email}
              type="text"
              className="bg-[#FCFCFC] focus:bg-gray-700 border-[#E1EDFF] border-[1.5px] input w-full max-w-xs rounded-full text-gray-700 focus:text-[#FCFCFC] text-xs"
            />
            <h2 className="text-xs font-semibold text-[#4C5F82]">
              Date of Birth
            </h2>

            <input
              onChange={(e) => {
                setEditUser({ ...editUser, date: e.target.value });
              }}
              defaultValue={editUser.date}
              min="1900-01-01"
              max="2023-02-24"
              type="date"
              className="bg-[#FCFCFC] focus:bg-gray-700 border-[#E1EDFF] border-[1.5px] input w-full max-w-xs rounded-full text-gray-700 focus:text-[#FCFCFC] text-xs"
            />
            <h2 className="text-xs font-semibold text-[#4C5F82]">Status</h2>

            <div className=" flex text-gray-700 text-xs items-center">
              <p>Passive</p>
              <input
                onChange={(e) => {
                  setEditUser({ ...editUser, status: "passive" });
                }}
                type="radio"
                name="radio-1"
                className="ml-1 mr-2 radio radio-warning"
              />
              <p>Active</p>
              <input
                onChange={(e) => {
                  setEditUser({ ...editUser, status: "active" });
                }}
                type="radio"
                name="radio-1"
                className="ml-1 mr-2 radio radio-success"
              />
              <p>Banned</p>
              <input
                onChange={(e) => {
                  setEditUser({ ...editUser, status: "banned" });
                }}
                type="radio"
                name="radio-1"
                className="ml-1 mr-2 radio radio-error"
              />
            </div>
          </div>
        </div>

        {/* Form buttons */}
        <div className="flex gap-x-2 mx-auto">
          <button className=" font-thin text bg-red-100 hover:bg-red-600 transition-all px-5 py-3 text-center rounded-full text-red-600 hover:text-white flex items-center gap-x-1 text-sm">
            <BsTrash size={18} /> Delete Account
          </button>
          <button
            onClick={() => handleUpdate(editUser.id, { editUser })}
            className="font-thin text bg-blue-100 hover:bg-blue-600 transition-all px-5 py-3 text-center rounded-full text-blue-600 hover:text-white text-sm"
          >
            Update Account
          </button>
        </div>
      </div>
    </div>
  ) : (
    <Navigate to="/userpanel" />
  );
}

export default EditForm;
