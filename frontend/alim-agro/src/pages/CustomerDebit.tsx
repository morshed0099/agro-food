import { useState } from "react";

const CustomerDebit = () => {
  const [customer, setCustomer] = useState('');
  const [open, setOpen] = useState(false);

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log("hoo");
  };

  return (
    <div>
      <div className="mt-20 flex items-center justify-center flex-col">
        <p className="mb-2 text-2xl">কাষ্টমার খোজার জন্য তার ফোন নাম্বার দিন</p>
        <input
          type="text"
          name="amount"
          placeholder="ফোন নাম্বার 11 সংখ্যা হতে হবে"
          className="w-[400px]  outline-none border-b-4 border-red-900 "
        />
        <button
          onClick={() => setOpen(!open)}
          className="mt-6 py-2 px-10 border w-[400px] rounded-2xl bg-gray-600 text-white text-2xl"
        >
          খুজুন
        </button>
      </div>
      <div>
        <div className="overflow-x-auto mt-6 mx-4 border">
          <table className="table">        
            <thead>
              <tr>
                <th >নামঃ</th>
                <th>ঠিকানাঃ</th>
                <th>মোবাইলঃ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="borde text-1xl font-bold text-indigo-950">{customer[0]?.name}</td>
                <td className="borde text-1xl font-bold text-indigo-950">{customer[0]?.address}</td>
                <td className="borde text-1xl font-bold text-indigo-950">{customer[0]?.phoneNumber}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className=" flex justify-center mt-20 items-center">
        {customer ? (
          <>
            <form onSubmit={handelSubmit}>
              <p className="mb-2">পেমেন্ট এমাউন্ট দিন</p>
              <input
                type="text"
                name="amount"
                placeholder="টাকার পরিমান দিন"
                className="w-[400px]  outline-none border-b-4 border-red-900 "
              />
              <p className="mb-2 mt-4">পেমেন্ট এমাউন্ট দিন</p>
              <input
                type="date"
                name="amount"
                placeholder="টাকার পরিমান দিন"
                className="w-[400px]  outline-none border-b-4 border-red-900 "
              />
              <div>
                <button className="mt-6 py-2 px-10 border w-[400px] rounded-2xl bg-gray-600 text-white text-2xl">
                  পেমেন্ট
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
