const Login = () => {
  return (
    <div className="w-[75%] my-auto h-[75%]  mx-auto">
      <form className="flex flex-col gap-4">
        <p>আপনার ইমেল এড্ডেস টি দিন</p>
        <input
          type="email"
          placeholder=""
          className="w-full outline-none border-b-4 border-red-900"
        />
        <p>আপনার পাসওয়াড দিন</p>
        <input
          type="password"
          placeholder=""
          className="w-full outline-none border-b-4 border-red-900"
        />
        <button         
          className="mt-6 py-2 px-10 border w-[400px] rounded-2xl bg-gray-600 text-white text-2xl"
        >
          লগইন করুন
        </button>
      </form>
    </div>
  );
};

export default Login;
