import React from "react";
import { useUserData } from "../context/Context";
import { BsTrash } from "react-icons/bs";
import { MdModeEdit } from "react-icons/md";
import human2 from "../assets/human2.png";
import spinner from "../assets/spinner.gif";
import { useOutletContext } from "react-router-dom";

function DashboardPanel() {
  const { users, handleDelete, loading, handleEdit } = useUserData();
  const { navigate } = useOutletContext();

  return (
    <div className=" md:pt-32 w-full px-8 py-44 overflow-auto">
      {loading ? (
        <img src={spinner} className="mx-auto my-auto w-20 h-20" alt="" />
      ) : (
        <div className="overflow-scroll">
          <table className="shadow-md w-full h-full  text-sm text-black text-left bg-white rounded-lg ">
            <thead className="text-xs border-b-2">
              <tr>
                <th className="px-6 py-3">#</th>
                <th className="px-6 py-3">Name-Surname</th>
                <th className="px-6 py-3">E-mail</th>
                <th className="px-6 py-3">Phone</th>
                <th className="px-6 py-3 ">Status</th>
                <th className="px-6 py-3">Operations</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr className="border-b-2 text-xs bg-white" key={index}>
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4 flex items-center gap-x-2">
                    <img
                      className="w-12 h-12 rounded-3xl"
                      src={human2}
                      alt="profile"
                    />
                    {user.name}
                  </td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">{user.phone}</td>
                  <td className="px-2 py-4">
                    <p
                      className={`py-1 text-center rounded-xl ${
                        user.status === "passive" && "bg-passive"
                      } ${user.status === "active" && "bg-active"}
                      ${user.status === "banned" && "bg-banned"}`}
                    >
                      {user.status}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-x-1">
                      <MdModeEdit
                        size={22}
                        className="hover:text-blue-700 hover:scale-110 transition-all cursor-pointer"
                        onClick={() => handleEdit(user, { navigate })}
                      />
                      <BsTrash
                        size={22}
                        className="hover:text-blue-700 hover:scale-110 transition-all cursor-pointer"
                        onClick={() => {
                          handleDelete(user.id);
                        }}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default DashboardPanel;
