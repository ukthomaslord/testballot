import { Fragment, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

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
            animate={{ y: 0 }}
            exit={{ y: "100vh" }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white p-6 rounded-t-lg shadow-lg relative overflow-hidden max-w-2/3 mx-auto w-2/6 h-1/2">
              <h2>
                <strong>Comments</strong>
              </h2>
              <h3 className="text-base font-semibold leading-6 text-gray-900">
                {modal.title}
              </h3>

              {/* Comments */}
              <div className="mt-4 p-4 rounded-md  overflow-y-scroll">
                <div key={modal.id} className="mb-2">
                  <p className="text-xl">
                    <span className="font-semibold pr-2">{modal.author}</span>
                    <span>{new Date(modal.date).toLocaleDateString()}</span>
                  </p>
                  <p className="text-xs">
                    <span>{modal.content}</span>
                  </p>
                </div>
              </div>

              {/* Add a comment */}
              <div className="absolute bottom-0  mb-4">
                <h2>Share your thoughts</h2>
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
