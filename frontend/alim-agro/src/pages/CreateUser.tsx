import toast from "react-hot-toast";
import { TloginError } from "../Interface/Interface";
import { useCreateUserMutation } from "../redux/feature/User/UserApi";
import { useState } from "react";

const CreateUser = () => {
  const [createUser] = useCreateUserMutation();
  const [loader, setLoader] = useState(false);
  const handelSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoader(true);
    try {
      e.preventDefault();
      const form = e.currentTarget;
      const email = form.email.value;
      const password = form.password.value;
      const name = form.userName.value;
      const userInfo = {
        email,
        name,
        password,
      };
      const res = await createUser(userInfo).unwrap();
      toast.success(res.message);
      setLoader(false);
    } catch (error) {
      const finalError = error as TloginError;
      toast.error(finalError.data.message || finalError.data.errorMessage);
      setLoader(false);
    }
  };
  return (
    <div className=" w-[75%] mx-auto h-[75%] my-auto">
      <form onSubmit={handelSubmit} className="flex flex-col gap-4">
        <p>ইউজার এর ইমেল দিন</p>
        <input
          type="email"
          name="email"
          className="border-b-4 border-red-900 outline-none w-full"
        />
        <p>ইউজার পাসওয়াড দিন</p>
        <input
          type="password"
          name="password"
          className="border-b-4 border-red-900 outline-none w-full"
        />
        <p>ইউজার এর নাম দিন</p>
        <input
          type="text"
          name="userName"
          className="border-b-4 border-red-900 outline-none w-full"
        />
        <button className="mt-6 py-2 px-10 border w-[400px] rounded-2xl bg-gray-600 text-white text-2xl">
          {loader ? "অপেক্ষা করুন" : "  ইউজার তৈরি করুন"}
        </button>
      </form>
    </div>
  );
};

export default CreateUser;
