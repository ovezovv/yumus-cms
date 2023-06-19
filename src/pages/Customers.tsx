import React from "react";
import { BsPersonFill, BsThreeDotsVertical } from "react-icons/bs";
import { data } from "../data/data";

const custemors = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex justify-between">
        <h2>Customers</h2>
        <h2>Welcome Back, Client</h2>
      </div>
      <div className="p-4 ">
        <div className="w-full m-auto p-4 border rounded-lg bg-white  overflow-y-auto">
          <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3  grid-cols-2 items-center  justify-between cursor-pointer">
            <span>Name</span>
            <span className="sm-text-left left-right">E-mail</span>
            <span className="hidden sm:grid">Last Order</span>
            <span className="hidden sm:grid">Methodm</span>
            <span className="hidden sm:grid">Methodm</span>
          </div>
        </div>
        <ul>
          {data.map((order, id) => (
            <li
              key={id}
              className="bg-gray-50 hover:bg-gray-100 rounded-lg py-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 justify-between items-center cursor-pointer"
            >
              <div className="flex items-center">
                <div className="bg-purplr-100 p-3 rounded-lg">
                  <BsPersonFill className="text-purple-800" />
                </div>
                <p className="pl-4">
                  {order.name.first} {order.name.last}
                </p>
              </div>
              <p className="text-gray-600  ">{order.name.first}@gmil.com</p>
              <p className="hidden md:flex">{order.date}</p>
              <div className="sm:flex hidden justify-between items-center">
                <p>{order.method}</p>
                <BsThreeDotsVertical />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default custemors;
