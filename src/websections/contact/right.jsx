import React from "react";
import devCover from "../../assets/images/DEV.png";

const Right = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <div className="w-3/5 px-20 py-16 flex flex-col justify-around gap-6">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          type="text"
          placeholder="Name"
          className="h-12 mb-4 px-4  outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          className="h-12 mb-4 px-4 outline-none "
        />
        <textarea
          placeholder="Message"
          className="h-32 mb-4 p-4  outline-none resize-none"
        ></textarea>
        <button type="submit" className="h-12 w-40 bg-black text-white ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Right;
