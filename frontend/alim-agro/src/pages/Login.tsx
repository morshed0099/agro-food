import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../redux/feature/Auth/AuthApi";
import { setUser } from "../redux/feature/Auth/AuthSlice";
import { useAppDispatch } from "../redux/hooks";
import { useState } from "react";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [login,{isError,error,isLoading}] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handelSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();   
    const form = e.currentTarget;
    const email = form.email.value;
    const password = form.password.value;
    const userInfo = {
      email,
      password,
    };
    const res = await login(userInfo).unwrap();    
    dispatch(setUser({ token: res.data.token, user: {} }));
    setLoading(false);
    form.reset();
    console.log(ResizeObserver);
    if (res.data.token) {
      navigate("/");
      setLoading(false);    
    }
  
  };

  return (
    <div className="w-[75%] my-auto h-[75%]  mx-auto">
      <form onSubmit={handelSubmit} className="flex flex-col gap-4">
        <p>আপনার ইমেল এড্ডেস টি দিন</p>
        <input
          type="email"
          placeholder=""
          name="email"
          className="w-full outline-none border-b-4 border-red-900"
        />
        <p>আপনার পাসওয়াড দিন</p>
        <input
          type="password"
          placeholder=""
          className="w-full outline-none border-b-4 border-red-900"
          name="password"
        />
        <button className="mt-6 py-2 px-10 border w-[400px] rounded-2xl bg-gray-600 text-white text-2xl">
          {loading ? "অপেক্ষা করুন " : "  লগইন করুন"}
        </button>
      </form>
    </div>
  );
};

export default Login;
