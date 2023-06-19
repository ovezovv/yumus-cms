import React from "react";
import { data } from "../data/data";
import { FaShoppingBag } from "react-icons/fa";

const RecentOredrs = () => {
  return (
    <div className="ml-4 w-full col-span-1 relative lg:-[70vh] h-[50vh]cm-auto p-4 border rounded-lg bg-white overflow-scroll">
      <h1>RecentsOrders</h1>
      <ul>
        {data.map((order, id) => (
          <li
            key={id}
            className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointter"
          >
            <div className="bg-purple-100 rounded-lg p-3">
              <FaShoppingBag className="text-purple-800" />
            </div>
            <div className="pl-4">
              <p className="text-gray-800 font-bold">${order.total}</p>
              <p text-gray-400 text-sm>
                {order.name.first}
              </p>
            </div>
            <p className="lg:flex md:hidden absolute right-6">{order.date}</p>

            <div></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentOredrs;
