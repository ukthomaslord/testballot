"use client";
import { useState } from "react";
import Modal from "@/components/commentsection";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpenModal(true)}
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded content-center"
      >
        Button
      </button>

      <Modal
        modal={{
          id: 1,
          title: "jirfnjd",
          content: " string;",
          date: " string;",
          author: " string;",
          unfollow: false,
          open: openModal,
        }}
      />
    </>
  );
}
