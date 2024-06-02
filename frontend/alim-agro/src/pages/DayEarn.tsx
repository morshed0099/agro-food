const DayEarn = () => {
    return (
      <div className="flex flex-col gap-4 w-[75%] mx-auto h-[75%] my-auto">
        <p>তারিখ সেট করুন</p>
        <input type="date" name="" className="border-b-4 border-red-900 outline-none w-full" />
        <p>বিবরণ সেট করুন</p>
        <input type="text" name="" className="border-b-4 border-red-900 outline-none w-full" />
        <p>এমাউন্ট দিন</p>
        <input type="number" name="" className="border-b-4 border-red-900 outline-none w-full" />
        <button     
          className="mt-6 py-2 px-10 border w-[400px] rounded-2xl bg-gray-600 text-white text-2xl"
        >
         দৈনিক আয় যোগ করুন
        </button>
      </div>
    );
  };
  
  export default DayEarn;