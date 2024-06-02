import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashborard from "../pages/Dashborard";
import CustomerCredit from "../pages/CustomerCredit";
import CustomerDebit from "../pages/CustomerDebit";
import Login from "../pages/Login";
import CreateCustomer from "../pages/CreateCustomer";
import CreateUser from "../pages/CreateUser";
import DayEarn from "../pages/DayEarn";
import CategoryCreate from "../pages/CategoryCreate";
import DayCost from "../pages/DayCost";
import CreateRiceStock from "../pages/CreateRiceStock";
import CreateReduceRicestoce from "../pages/CreateReduceRicestoce";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Dashborard />,
      },
      {
        path: "/customer-creadit",
        element: <CustomerCredit />,
      },
      {
        path: "/customer-debit",
        element: <CustomerDebit />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/create-customer",
        element: <CreateCustomer />,
      },
      {
        path: "/create-user",
        element: <CreateUser />,
      },
      {
        path: "/daily-earn",
        element: <DayEarn />,
      },
      {
        path: "/daily-cost",
        element: <DayCost />,
      },
      {
        path: "/create-category",
        element: <CategoryCreate />,
      },
      {
        path: "/create-rice-stock",
        element: <CreateRiceStock />,
      },
      {
        path: "/create-rice-stock-reduce",
        element: <CreateReduceRicestoce />,
      },
    ],
  },
]);
