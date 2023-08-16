import { Fragment, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import daysFrom from "@/app/utilities/daysfrom";

interface ModalProps {
  modal: {
    id: number;
    title: string;
    content: string;
    date: string;
    author: string;
    unfollow: boolean;
    open: boolean;
  };
}

const Modal: React.FC<ModalProps> = ({ modal }) => {
  return (
    <AnimatePresence mode="wait">
      {modal.open && (
        <Fragment>
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="fixed inset-0 z-50 overflow-y-auto flex items-end justify-center"
            initial={{ y: "100vh" }}
            animate={{ y: -200 }}
            exit={{ y: "100vh" }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white p-6 rounded-lg shadow-lg relative overflow-hidden max-w-2/3 mx-auto w-2/6 h-1/2">
              <h2>
                <strong>Comments</strong>
              </h2>
              <h3 className="text-base sm:text-sm leading-6 text-gray-900">
                {modal.author}'s Post
              </h3>

              {/* Comments */}

              <div className="p-4 rounded-md overflow-y-scroll">
                <div key={modal.id} className="mb-2">
                  <p className="text-xl">
                    <span className="font-semibold pr-2 sm:text-xs">
                      {modal.author}
                    </span>
                    <span className="sm:text-xs">{daysFrom(modal.date)}d</span>
                  </p>
                  <p className="text-xs">
                    <span>{modal.content}</span>
                  </p>
                </div>
              </div>

              {/* Add a comment */}
              <div>
                <div className="absolute inset-x-4 bottom-0 pb-3 mt-2 rounded-md shadow-sm">
                  <input
                    type="text"
                    name="addComment"
                    id="addComment"
                    className="block w-full rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
                    placeholder="Share your thoughts"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center">
                    <label htmlFor="currency" className="sr-only">
                      Currency
                    </label>
                    <button
                      id="currency"
                      name="currency"
                      className="h-full rounded-md border-0 bg-transparent pb-3 pl-2 pr-2 text-gray-500 sm:text-sm"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <button className="absolute top-0 right-0 mt-4 mr-4">
                Close
              </button>
            </div>
          </motion.div>
        </Fragment>
      )}
    </AnimatePresence>
  );
};

export default Modal;
