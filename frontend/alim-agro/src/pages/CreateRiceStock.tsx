import { useState } from "react";
import { useGetAllCategoryQuery } from "../redux/feature/Category/CategoryApi";
import toast from "react-hot-toast";
import { TCategory, TloginError } from "../Interface/Interface";
import { useCreateRiceAddMutation } from "../redux/feature/RiceStock/RiceStock";

const CreateRiceStock = () => {
  const [catygoryId, setCategoryId] = useState<string | null>(null);
  const [loader, setLoader] = useState(false);

  const { data } = useGetAllCategoryQuery(undefined);
  const [createRiceStock] = useCreateRiceAddMutation();
  const handelSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoader(true);
    try {
      const form = e.currentTarget;
      const quantity =Number(form.quantity.value);
      const date = form.date.value;
      const riceaAddInfo = {
        addQuantity:quantity,
        date,
        categoryId: catygoryId,
      };
      console.log(riceaAddInfo);
      const res = await createRiceStock(riceaAddInfo).unwrap();
      toast.success(res.message);    
      setLoader(false);
      form.reset()
    } catch (error) {
      const finalError = error as TloginError;
      toast.error(finalError.data.message || finalError.data.errorMessage);
      console.log(finalError);
      setLoader(false);
    }
  };
  return (
    <div className="flex flex-col gap-4 w-[75%] mx-auto h-[75%] my-auto">
      <select
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setCategoryId(e.target.value)
        }
        name=""
        className="py-2 px-4 border-2 border-red-900 rounded-2xl"
        id=""
      >
        <option selected value="" disabled>
          কাট্যগরি সেট করুন
        </option>
        {data?.data.map((da:TCategory) => (
          <option value={da?._id}>{da?.name}</option>
        ))}
      </select>
      <p>কত বস্তা যোগ করবেন তা দিন</p>
      <form onSubmit={handelSubmit}>
        <input
          type="number"
          name="quantity"
          className="border-b-4 border-red-900 outline-none w-full"
        />
        <p>তারিখ সেট করুন</p>
        <input
          type="date"
          name="date"
          className="border-b-4 border-red-900 outline-none w-full"
        />
        <button className="mt-6 py-2 px-10 border w-[400px] rounded-2xl bg-gray-600 text-white text-2xl">
          {loader ? "অপেক্ষা করুন" : " চাল ষ্টক যোগ করুন"}
        </button>
      </form>
    </div>
  );
};

export default CreateRiceStock;
