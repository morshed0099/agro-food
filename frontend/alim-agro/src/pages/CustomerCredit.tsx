import { useState } from "react";
import {
  useCreateCreaditMutation,
  useGetSingleCustomerMutation,
} from "../redux/feature/Customer/CustomerApi";
import toast from "react-hot-toast";
import { TloginError } from "../Interface/Interface";

const CustomerCredit = () => {
  const [customer, { data }] = useGetSingleCustomerMutation();
  const [creaditCreate] = useCreateCreaditMutation();
  const [loader, setLoader] = useState(false);
  const [loader1, setLoader1] = useState(false);

  const handelSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      setLoader1(true);
      e.preventDefault();
      const form = e.currentTarget;
      const date = form.date.value;
      const credit = form.creadit.value;
      const creaditInfo = {
        date,
        customerId: data?.data?._id,
        credit,
      };
      const res = await creaditCreate(creaditInfo).unwrap();
      toast.success(res.message), setLoader1(false);
      form.reset();
    } catch (error) {
      const finalError = error as TloginError;
      toast.error(finalError.data.message || finalError.data.errorMessage);
      setLoader1(false);
    }
  };
  const customerFind = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoader(true);
    try {
      e.preventDefault();
      const phoneNumber = e.currentTarget.phoneNumber.value;
      const phoneNumberInfo = {
        phoneNumber,
      };
      const res = await customer(phoneNumberInfo).unwrap();
      console.log(res);
      setLoader(false);
    } catch (error) {
      const finalError = error as TloginError;
      toast.error(finalError.data.message || finalError.data.errorMessage);
      setLoader(false);
    }
  };

  return (
    <div>
      <div className="mt-20 flex flex-col items-center justify-center ">
        <form onSubmit={customerFind}>
          <p className="mb-2 text-2xl">
            কাষ্টমার খোজার জন্য তার ফোন নাম্বার দিন
          </p>
          <input
            type="text"
            name="phoneNumber"
            placeholder="ফোন নাম্বার 11 সংখ্যা হতে হবে"
            className="w-[400px]  outline-none border-b-4 border-red-900 "
          />
          <div>
            <button className="mt-6 py-2 px-10 border w-[400px] rounded-2xl bg-gray-600 text-white text-2xl">
              {loader ? "অপেক্ষা করুন" : "খুজুন"}
            </button>
          </div>
        </form>
      </div>
      <div>
        <div className="overflow-x-auto mt-6 mx-4 border">
          <table className="table">
            <thead>
              <tr>
                <th>নামঃ</th>
                <th>ঠিকানাঃ</th>
                <th>মোবাইলঃ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="borde text-1xl font-bold text-indigo-950">
                  {data?.data?.name}
                </td>
                <td className="borde text-1xl font-bold text-indigo-950">
                  {data?.data?.address}
                </td>
                <td className="borde text-1xl font-bold text-indigo-950">
                  {data?.data?.phoneNumber}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className=" flex justify-center mt-20 items-center">
        {data && data?.data ? (
          <>
            <form onSubmit={handelSubmit}>
              <p className="mb-2">পেমেন্ট এমাউন্ট দিন</p>
              <input
                type="date"
                name="date"
                placeholder="টাকার পরিমান দিন"
                className="w-[400px]  outline-none border-b-4 border-red-900 "
              />
              <p className="mb-2 mt-4">পেমেন্ট এমাউন্ট দিন</p>
              <input
                type="number"
                name="creadit"
                placeholder="টাকার পরিমান দিন"
                className="w-[400px]  outline-none border-b-4 border-red-900 "
              />
              <div>
                <button className="mt-6 py-2 px-10 border w-[400px] rounded-2xl bg-gray-600 text-white text-2xl">
                  {loader1 ? "অপেক্ষা করুন" : " পেমেন্ট"}
                </button>
              </div>
            </form>
          </>
        ) : (
          <>
            <p className="text-4xl">
              মোবাইল নাম্বার দিয়ে কোন কাষ্টমার পাওয়া যায়নি
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default CustomerCredit;
