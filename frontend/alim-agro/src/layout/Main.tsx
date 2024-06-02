import { NavLink, Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="drawer lg:drawer-open">
      <label htmlFor="dashbord-alim" className=" flex justify-end">
        Open drawer
      </label>
      <input id="dashbord-alim" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col ">
        <Outlet />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="dashbord-alim"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full flex   flex-col gap-4 bg-base-200 text-base-content">
          {/* Sidebar content here */}

          <li>
            <NavLink to="/create-customer">কাস্টমার তৈরি করুন</NavLink>
          </li>
          <li>
            <NavLink to="/customer-debit">কাস্টমার ডেবিট যোগ করুন</NavLink>
          </li>
          <li>
            <NavLink to="/customer-creadit">কাস্টমার ক্রেডিট যোগ করুন</NavLink>
          </li>
          <li>
            <NavLink to="/daily-earn">দৈনিক আয় যোগ করুন</NavLink>
          </li>
          <li>
            <NavLink to="/daily-cost">দৈনিক ব্যায় যোগ করুন</NavLink>
          </li>
          <li>
            <NavLink to="/create-category">ধান চাল এর কাটাগরী যোগ করুন</NavLink>
          </li>
          <li>
            <NavLink to="#">চাল এর ষ্টক যোগ করুন</NavLink>
          </li>
          <li>
            <NavLink to="#">চাল এর ষ্টক বিয়োগ করুন</NavLink>
          </li>
          <li>
            <NavLink to="#">চাল এর ষ্টক দেখুন</NavLink>
          </li>
          <li>
            <NavLink to="/create-user">ইউজার তৈরি করুন</NavLink>
          </li>
          <li>
            <NavLink to="/login">লগইন করুন</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Main;
