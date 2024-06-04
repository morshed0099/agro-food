import toast from "react-hot-toast";
import { TloginError } from "../Interface/Interface";
import { useCreateCustomerMutation } from "../redux/feature/Customer/CustomerApi";
import { useState } from "react";

const CreateCustomer = () => {
  const [customer] = useCreateCustomerMutation();
  const [loader, setLoader] = useState(false);
  const handelSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoader(true);
    try {
      const form = e.currentTarget;
      const address = form.address.value;
      const name = form.customerName.value;
      const phoneNumber = form.phoneNumber.value;

      const customerInfo = {
        name,
        address,
        phoneNumber,
      };
      const res = await customer(customerInfo).unwrap();
      toast.success(res.message);
      setLoader(false);
      form.reset();
    } catch (error) {
      const finalError = error as TloginError;
      toast.error(finalError.data.errorMessage || finalError.data.message);
      setLoader(false);
    }
  };
  return (
    <div className=" w-[75%] mx-auto h-[75%] my-auto">
      <form onSubmit={handelSubmit} className="flex flex-col gap-4">
        <p>কাষ্টমার এর মোবাইল নাম্বার দিন</p>
        <input
          type="text"
          name="phoneNumber"
          className="border-b-4 border-red-900 outline-none w-full"
        />
        <p>কাষ্টমার এর ঠিকানা দিন</p>
        <input
          type="text"
          name="address"
          className="border-b-4 border-red-900 outline-none w-full"
        />
        <p>কাষ্টমার এর নাম দিন</p>
        <input
          type="text"
          name="customerName"
          className="border-b-4 border-red-900 outline-none w-full"
        />
        <button className="mt-6 py-2 px-10 border w-[400px] rounded-2xl bg-gray-600 text-white text-2xl">
          {loader ? "অপেক্ষা করুন" : "  কাষ্টমার তৈরি করুন"}
        </button>
      </form>
    </div>
  );
};

export default CreateCustomer;
