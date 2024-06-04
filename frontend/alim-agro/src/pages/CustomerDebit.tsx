import { useState } from "react";
import {
  useCreateDebitMutation,
  useGetSingleCustomerMutation,
} from "../redux/feature/Customer/CustomerApi";
import toast from "react-hot-toast";
import { TloginError } from "../Interface/Interface";

const CustomerDebit = () => {
  const [customer, { data }] = useGetSingleCustomerMutation();
  const [debit] = useCreateDebitMutation();
  const [loader, setLoader] = useState(false);
  const [loader1, setLoader1] = useState(false);
  const handelSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoader(true);
    try {
      const form = e.currentTarget;
      const phoneNumber = form.phoneNumber.value;

      const res = await customer({ phoneNumber }).unwrap();
      toast.success(res.message);
      setLoader(false);
    } catch (error) {
      setLoader(false);
      const finalError = error as TloginError;
      toast.error(finalError.data.errorMessage || finalError.data.message);
    }
  };

  const handelSubmitForDebit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoader1(true);
    try {
      e.preventDefault();
      const form = e.currentTarget;
      const date = form.date.value;
      const amount = Number(form.amount.value);
      const debitInfo = {
        date,
        debit:amount,
        customerId:data?.data?._id
      };
      const res = await debit(debitInfo).unwrap();
      toast.success(res.message);
      setLoader1(false);
      form.reset()
    } catch (error) {
      const finalError = error as TloginError;
      console.log(error)
      toast.error(finalError.data.errorMessage || finalError.data.message);
      setLoader1(false);
    }
  };

  return (
    <div>
      <div className="mt-20 flex items-center justify-center flex-col">
        <form className="flex flex-col gap-4" onSubmit={handelSubmit}>
          <p className="mb-2 text-2xl">
            কাষ্টমার খোজার জন্য তার ফোন নাম্বার দিন
          </p>
          <input
            type="text"
            name="phoneNumber"
            placeholder="ফোন নাম্বার 11 সংখ্যা হতে হবে"
            className="w-[400px]  outline-none border-b-4 border-red-900 "
          />
          <button className="mt-6 py-2 px-10 border w-[400px] rounded-2xl bg-gray-600 text-white text-2xl">
            {loader ? "অপেক্ষা করুন" : "  খুজুন"}
          </button>
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
        {data ? (
          <>
            <form onSubmit={handelSubmitForDebit}>
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
                name="amount"
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

export default CustomerDebit;
