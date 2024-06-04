import { useState } from "react";
import { useCreateCateMutation } from "../redux/feature/Category/CategoryApi";
import toast from "react-hot-toast";
import { TloginError } from "../Interface/Interface";

const CategoryCreate = () => {
  const [loader, setLoader] = useState(false);
  const [createCategory] = useCreateCateMutation();
  const handelSubmnit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoader(true);
    try {
      const form = e.currentTarget;
      const name = form.categoryName.value;
      const categoryInfo = {
        name,
      };
      const res = await createCategory(categoryInfo).unwrap();
      toast.success(res.message);
      setLoader(false)
    } catch (error) {
      const categoryError = error as TloginError;
      toast.error(
        categoryError.data.message || categoryError.data.errorMessage
      );
      setLoader(false);
    }
  };
  return (
    <div className="flex flex-col gap-4 w-[75%] mx-auto h-[75%] my-auto">
      <form onSubmit={handelSubmnit}>
        <p>কাট্যাগরি নাম দিন</p>
        <input
          type="text"
          name="categoryName"
          className="border-b-4 border-red-900 outline-none w-full"
        />
        <button className="mt-6 py-2 px-10 border w-[400px] rounded-2xl bg-gray-600 text-white text-2xl">
          {loader ? " অপেক্ষা করুন" : "  ধান চাল কাট্যাগরি যোগ করুন"}
        </button>
      </form>
    </div>
  );
};

export default CategoryCreate;
