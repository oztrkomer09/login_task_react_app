import React from "react";

function DashboardPanel() {
  return (
    <div className="bg-blue-300 h-full pt-48 md:pt-32 w-full p-16">
      <div className="relative overflow-x-auto shadow-md ">
        <table className="w-full text-sm text-black text-left bg-white">
          <thead className="text-xs border-b-2">
            <tr>
              <th className="px-6 py-3">#</th>
              <th className="px-6 py-3">Name-Surname</th>
              <th className="px-6 py-3">E-mail</th>
              <th className="px-6 py-3">Phone</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Edit</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b-2">
              <th className="px-6 py-4 font-medium ">Apple MacBook Pro 17"</th>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">Laptop</td>
              <td className="px-6 py-4">$2999</td>
              <td className="px-6 py-4">Edit</td>
              <td className="px-6 py-4">Edit</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DashboardPanel;
