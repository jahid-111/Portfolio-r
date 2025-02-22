import { Outlet } from "react-router-dom";
import SideData from "../../components/dashboard/SideData";

export default function DashboardLayout() {
  return (
    <div className=" mt-16">
      <h1 className="text-3xl font-bold text-center my-5 underline">
        Dashboard
      </h1>

      <div className="flex gap-3 ">
        <aside className="w-1/4 border h-screen">
          <SideData />
        </aside>

        <main className="w-3/4 rounded-md bg-[#2d2d27] h-screen">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
