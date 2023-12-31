import { createBrowserRouter } from "react-router-dom";

import Dashboard from "@/pages/dashboard";
import BullionOperations from "@/pages/bullion-operations";
import Transactions from "@/pages/transactions";
import YourNetwork from "@/pages/your-network";
import Consumers from "@/pages/consumer";
import OtherOperations from "@/pages/other-operations";
import ManageBankAccounts from "@/pages/manage-bank-accounts";
import Faq from "@/pages/faq";
import CustomizeDashboard from "@/pages/customize-dashboard";

import ErrorPage from "@/pages/error-page";
import RootLayout from "@/layouts/root-layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: (
          <div>
            <p>
              Please navigate to the{" "}
              <span className="font-bold underline mx-2">Consumers Page</span>
              using the left sidebar to see the task
            </p>
            <p>
              The right sidebar can be used to navigate between several pages
            </p>
          </div>
        ),
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/bullion-operations",
        element: <BullionOperations />,
      },
      {
        path: "/transactions",
        element: <Transactions />,
      },
      {
        path: "/network",
        element: <YourNetwork />,
      },
      {
        path: "/consumers",
        element: <Consumers />,
      },
      {
        path: "/other-operations",
        element: <OtherOperations />,
      },
      {
        path: "/manage-bank-accounts",
        element: <ManageBankAccounts />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/customize-dashboard",
        element: <CustomizeDashboard />,
      },
    ],
  },
]);
