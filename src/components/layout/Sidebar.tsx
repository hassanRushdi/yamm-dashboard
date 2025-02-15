import { ReactNode } from "react";
import { FaHome, FaShoppingBag } from "react-icons/fa";

const Sidebar = ({ children }: { children: ReactNode }) => {
  return (
    <div className="hidden md:flex min-h-screen">
      <aside className="w-1/4 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold pt-5 mb-4">Dashboard</h2>
        <nav>
          <ul className="space-y-2 font-semibold">
            <li className="flex hover:bg-gray-700 p-2 rounded cursor-pointer gap-3 items-center">
              <FaHome className="w-6 h-6" />
              Home
            </li>
            <li className="flex hover:bg-gray-700 p-2 rounded cursor-pointer gap-3 items-center">
              <FaShoppingBag className="w-5 h-5" />
              Orders
            </li>
            <li className="flex hover:bg-gray-700 p-2 rounded cursor-pointer gap-3 items-center">
              <FaShoppingBag className="w-5 h-5" />
              Refunds
            </li>
          </ul>
        </nav>
      </aside>
      <main className="w-3/4 p-4">{children}</main>
    </div>
  );
};

export default Sidebar;
