import React from "react";
import { motion } from "framer-motion";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="APP flex items-center justify-center h-screen w-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75 }}
      >
        <section className=" body-font mb-6">
          <div className="container px-5 md:py-24 py-2">
            <h1 className=" mx-14 f1 text-6xl font-medium title-font text-pink-800  text-center">
              To My Favorite Person, AC
            </h1>
          </div>
        </section>
        <motion.div
          className="flex justify-center flex-wrap -m-4"
          initial={{ opacity: 0 , y : 20}}
          animate={{ opacity: 1 , y: 0 }}
          transition={{ duration: 1.75 }}
        >
          <motion.div 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
          className="p-4 w-10/12 md:w-6/12">
            <div className="h-full bg-gray-100 p-8 border-2 border-pink-500 rounded-lg">
              <div className="flex items-center">
                <img alt='inis' className="w-4/12" src="https://cdn.discordapp.com/attachments/912411399458795593/912705087086936074/hate.gif"></img>
                <p className="text-sm ml-2 text-gray-400">Napaka damot talaga nya ayaw magbigay ng bagong pic</p>
              </div>
              <Link
                to="/ac"
                className="flex justify-center mx-auto  my-3 p-3 text-gray-600 bg-white border-0 py-2 px-8 hover:text-pink-400 hover:bg-pink-200 focus:outline-none focus:ring-4 focus:ring-pink-600 focus:ring-opacity-50 rounded-lg text-lg"
              >
                <img
                  alt="cute"
                  style={{ width: "80px" }}
                  src="https://cdn.discordapp.com/attachments/912411399458795593/912705086793351188/excited.gif"
                ></img>{" "}
                <span className="title-font font-medium flex items-center text-gray-900">
                  ILY
                  <AiFillHeart className="ml-2 text-pink-500" />
                </span>
              </Link>
              <div className="bg-cute inline-flex items-center">
                <span className="flex-grow flex flex-col pl-4">
                  <span className="text-gray-500 text-sm">-Jerb</span>
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
