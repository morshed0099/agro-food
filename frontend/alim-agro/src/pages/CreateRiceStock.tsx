import { useGetAllCategoryQuery } from "../redux/feature/Category/CategoryApi";

const CreateRiceStock = () => {
  const { data } = useGetAllCategoryQuery(undefined);
  return (
    <div className="flex flex-col gap-4 w-[75%] mx-auto h-[75%] my-auto">
      <select name=""   className="py-2 px-4 border-2 border-red-900 rounded-2xl" id="">
        <option
          selected        
          value=""
          disabled
        >
          কাট্যগরি সেট করুন
        </option>
        {data?.data.map((da) => (
          <option value={da?.name}>{da?.name}</option>
        ))}
      </select>
      <p>কত বস্তা যোগ করবেন তা দিন</p>
      <input
        type="number"
        name=""
        className="border-b-4 border-red-900 outline-none w-full"
      />
      <button className="mt-6 py-2 px-10 border w-[400px] rounded-2xl bg-gray-600 text-white text-2xl">
        চাল ষ্টক যোগ করুন
      </button>
    </div>
  );
};

export default CreateRiceStock;
