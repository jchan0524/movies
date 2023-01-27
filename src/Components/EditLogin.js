import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { Row, Col, Image } from "react-bootstrap";

export default function EditLogin(props) {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1  ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Login
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center  flex  overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-auto  max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none ">
                {/*header*/}
                <div className="justify-center items-center justify-between p-5 border-b border-solid border-slate-200 rounded-t ">
                  <div>
                    <h1 className="text-center block text-3xl font-semibold">
                      FilmHedge
                    </h1>
                  </div>

                  <div>
                    <h1 className="block text-center mt-0 text-xl">
                      Welcome to FilmHedge
                    </h1>
                  </div>
                  <div>
                    <p className="block text-center ">Login to continue</p>
                  </div>
                </div>

                {/*body*/}
                <div className="relative p-6 ">
                  <form className="m-2 w-full max-w-sm" id="customer">
                    <div className=" md:items-center mb-6">
                      <div className="md:w-1/4 mr-2">
                        <label htmlFor="username">Username</label>
                      </div>

                      <div className="md:w-3/4">
                        <input
                          id="username"
                          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-80 py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                          type="text"
                          onChange={(e) => {
                            console.log(e.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div className=" md:items-center mb-6">
                      <div className="md:w-1/4 mr-2">
                        <label htmlFor="password">Password</label>
                      </div>
                      <div className="md:w-3/4">
                        <input
                          id="password"
                          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-80 py-2 px-2 p-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                          type="password"
                          onChange={(e) => {
                            console.log(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                  </form>
                </div>
                {/*footer*/}
                <div className=" d-flex p-3 border-solid border-slate-200">
                <button className="align-middle text-slate-300 justify-content-center text-center h-5 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                    Forgot Password?
                  </button>
                  {/* <button
                    className=" justify-end text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button> */}
                  <button
                    className="justify-content-end bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Login
                  </button>
                 
                </div>

                
                <div className="ml-12">
                  New User?{" "}
                  <button className=" items-center  justify-center text-blue-300 background-transparent h-20  font-bold uppercase h-30 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                    Create an account
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
