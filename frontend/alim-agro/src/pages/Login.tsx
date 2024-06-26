import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../redux/feature/Auth/AuthApi";
import { setUser } from "../redux/feature/Auth/AuthSlice";
import { useAppDispatch } from "../redux/hooks";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";
import { TloginError } from "../Interface/Interface";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [login] = useLoginMutation();

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handelSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    try {
      e.preventDefault();
      const form = e.currentTarget;
      const email = form.email.value;
      const password = form.password.value;
      const userInfo = {
        email,
        password,
      };
      const res = await login(userInfo).unwrap();
      const user = jwtDecode(res.data.token);
      dispatch(setUser({ token: res.data.token, user: user }));
      if (res.data.token) {
        toast.success(res.message);
        navigate("/");
        form.reset();
        setLoading(false);
      }
    } catch (error: unknown) {
      const loginError = error as TloginError;
      toast.error(loginError.data.message || loginError.data.errorMessage);
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
