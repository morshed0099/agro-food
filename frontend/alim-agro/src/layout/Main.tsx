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

          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="w-full ml-10 ">
              কাস্টমার
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/create-customer">কাস্টমার তৈরি করুন</NavLink>
              </li>
              <li>
                <NavLink to="/customer-debit">কাস্টমার ডেবিট যোগ করুন</NavLink>
              </li>
              <li>
                <NavLink to="/customer-creadit">
                  কাস্টমার ক্রেডিট যোগ করুন
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="w-full ml-10 ">
              দৈনিক আয় ব্যায়
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/daily-earn">দৈনিক আয় যোগ করুন</NavLink>
              </li>
              <li>
                <NavLink to="/daily-cost">দৈনিক ব্যায় যোগ করুন</NavLink>
              </li>
            </ul>
          </div>

          <li>
            <NavLink to="/create-category">ধান চাল এর কাটাগরী যোগ করুন</NavLink>
          </li>
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="w-full ml-10 ">
              চাল ষ্টক
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/create-rice-stock">চাল এর ষ্টক যোগ করুন</NavLink>
              </li>
              <li>
                <NavLink to="/create-rice-stock-reduce">
                  চাল এর ষ্টক বিয়োগ করুন
                </NavLink>
              </li>
            </ul>
          </div>
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
