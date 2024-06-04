import { useState } from "react";
import { useCreateDailyEarnMutation } from "../redux/feature/DailyEarn/DailyEarnApi";
import toast from "react-hot-toast";
import { TloginError } from "../Interface/Interface";

const DayEarn = () => {
  const [earnEnty] = useCreateDailyEarnMutation();
  const [loader, setLoader] = useState(false);
  const handelSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoader(true);
    try {
      const form = e.currentTarget;
      const date = form.date.value;
      const amount = Number(form.amount.value);
      const description = form.description.value;
      const dailyEarn = {
        date,
        amount,
        description,
      };
      const res = await earnEnty(dailyEarn).unwrap();
      console.log(res)
      toast.success(res.message);
      form.reset()
      setLoader(false);
    } catch (error) {
      const finalError = error as TloginError;
      toast.error(finalError.data.errorMessage || finalError.data.message);
      setLoader(false);
      console.log(error)
    }
  };
  return (
    <div className="w-[75%] mx-auto h-[75%] my-auto">
      <form onSubmit={handelSubmit} className="flex flex-col gap-4 ">
        <p>তারিখ সেট করুন</p>
        <input
          type="date"
          name="date"
          className="border-b-4 border-red-900 outline-none w-full"
        />
        <p>বিবরণ সেট করুন</p>
        <input
          type="text"
          name="description"
          className="border-b-4 border-red-900 outline-none w-full"
        />
        <p>এমাউন্ট দিন</p>
        <input
          type="number"
          name="amount"
          className="border-b-4 border-red-900 outline-none w-full"
        />
        <button className="mt-6 py-2 px-10 border w-[400px] rounded-2xl bg-gray-600 text-white text-2xl">
          {loader ? "অপেক্ষা করুন" : "  দৈনিক আয় যোগ করুন"}
        </button>
      </form>
    </div>
  );
};

export default DayEarn;
