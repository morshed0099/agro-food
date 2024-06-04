import { useCreateCustomerMutation } from "../redux/feature/Customer/CustomerApi";

const CreateCustomer = () => {
  const [customer] = useCreateCustomerMutation();
  const handelSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const address = form.address.value;
    const name = form.customerName.value;
    const phoneNumber = form.phoneNumber.value;

    const customerInfo = {
      name,
      address,
      phoneNumber,
    };
    await customer(customerInfo).unwrap();
    form.reset();
  };
  return (
    <div className="flex flex-col gap-4 w-[75%] mx-auto h-[75%] my-auto">
      <form onSubmit={handelSubmit}>
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
          কাষ্টমার তৈরি করুন
        </button>
      </form>
    </div>
  );
};

export default CreateCustomer;
