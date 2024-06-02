const CreateUser = () => {
    return (
      <div className="flex flex-col gap-4 w-[75%] mx-auto h-[75%] my-auto">
        <p>ইউজার এর ইমেল  দিন</p>
        <input type="text" name="" className="border-b-4 border-red-900 outline-none w-full" />
        <p>ইউজার পাসওয়াড দিন</p>
        <input type="text" name="" className="border-b-4 border-red-900 outline-none w-full" />
        <p>ইউজার এর নাম দিন</p>
        <input type="text" name="" className="border-b-4 border-red-900 outline-none w-full" />
        <button     
          className="mt-6 py-2 px-10 border w-[400px] rounded-2xl bg-gray-600 text-white text-2xl"
        >
          ইউজার তৈরি করুন
        </button>
      </div>
    );
  };
  
  export default CreateUser;