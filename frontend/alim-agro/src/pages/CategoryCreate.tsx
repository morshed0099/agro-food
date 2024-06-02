import React from "react";

const CategoryCreate = () => {
  return (
    <div className="flex flex-col gap-4 w-[75%] mx-auto h-[75%] my-auto">
      <p>কাট্যাগরি নাম দিন</p>
      <input
        type="number"
        name=""
        className="border-b-4 border-red-900 outline-none w-full"
      />
      <button className="mt-6 py-2 px-10 border w-[400px] rounded-2xl bg-gray-600 text-white text-2xl">
        ধান চাল কাট্যাগরি যোগ করুন
      </button>
    </div>
  );
};

export default CategoryCreate;
