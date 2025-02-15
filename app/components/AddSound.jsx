"use client";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import AddSoundModal from "./AddSoundModal";

function AddSound() {
  var [isModalOpen, setModalOpen] = useState(false);
  
  function openModal() {
    setModalOpen(true);
  }
  
  function closeModal() {
    setModalOpen(false);
  }
  
  function handleSoundAdded(newSound) {
    console.log("New sound added:", newSound);
    // TODO: Update your soundboard if needed.
  }
  
  return (
    <div className="flex flex-col items-center">
      <button className="btn btn-circle btn-secondary" onClick={openModal}>
        <FaPlus size={24} className="text-current" />
      </button>
      <AddSoundModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSoundAdded={handleSoundAdded}
      />
    </div>
  );
}

export default AddSound;
