import React from "react";
import { useUserData } from "../context/Context";
import human0 from "../assets/human1.png";

function DashboardPanel() {
  const { users } = useUserData();

  return (
    <div className=" h-full pt-36 md:pt-32 w-full px-8 py-44 overflow-auto">
      <div className="overflow-scroll">
        <table className="shadow-md w-full text-sm text-black text-left bg-white rounded-lg overflow-hidden shrink-1">
          <thead className="text-xs border-b-2">
            <tr>
              <th className="px-6 py-3">#</th>
              <th className="px-6 py-3">Name-Surname</th>
              <th className="px-6 py-3">E-mail</th>
              <th className="px-6 py-3">Phone</th>
              <th className="px-6 py-3 ">Status</th>
              <th className="px-6 py-3">Edit</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr className="border-b-2 text-xs" key={index}>
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4 flex items-center gap-x-2">
                  <img className="w-8 h-8" src={human0} alt="" />
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
                <td
                  className="px-6 py-4"
                  onClick={() => {
                    console.log(user);
                  }}
                >
                  Edit
                </td>
              </tr>
            ))}
            {/* <tr className="border-b-2">
                  <th className="px-6 py-4 font-medium ">Apple MacBook Pro 17"</th>
                  <td className="px-6 py-4">Silver</td>
                  <td className="px-6 py-4">Laptop</td>
                  <td className="px-6 py-4">$2999</td>
                  <td className="px-6 py-4">Edit</td>
                  <td className="px-6 py-4">Edit</td>
                </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DashboardPanel;
