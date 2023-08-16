"use client";
import { useState } from "react";
import Modal from "@/components/commentsection";

export default function Home() {
  const [openModal, setOpenModal] = useState(true);

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
          title: "",
          content: "Excellent Image",
          date: "2023-07-22",
          author: "JohnDoe",
          unfollow: false,
          open: openModal,
        }}
      />
    </>
  );
}
