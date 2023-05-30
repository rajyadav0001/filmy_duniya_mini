import React, { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { Link } from "react-router-dom";

const Login = () => {
    const[form,setForm] = useState({
        mobile:"",
        password:""
    });
    const[loading,setLoading] = useState(false);
  return (
    <div className=" w-full flex flex-col items-center mt-12  ">
      <h1 className=" text-3xl font-bold">Login</h1>
      <div className="p-2 w-full md:w-1/3">
        <div className="relative">
          <label htmlFor="message" className="leading-7 text-sm text-gray-100">
             Mobile No:
          </label>
          <input
            type={"number"}
            id="message"
            name="message"
            value={form.mobile}
            onChange={(e) => setForm({ ...form, mobile: e.target.value })}
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
      <div className="p-2 w-full md:w-1/3">
        <div className="relative">
          <label htmlFor="message" className="leading-7 text-sm text-gray-100">
            Password:
          </label>
          <input
            id="message"
            name="message"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
      <div className="p-2 w-full">
        <button
          className="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg"
        >
          {loading ? <TailSpin height={25} color="white" /> : "Login"}
        </button>
      </div>
      <div>
         <p>Do not have account? <Link to={'/signup'}><span className="text-blue-500 cursor-pointer">Signup</span></Link></p>
      </div>
    </div>
  );
};

export default Login;
