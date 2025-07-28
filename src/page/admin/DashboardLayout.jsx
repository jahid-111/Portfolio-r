import { Outlet } from "react-router-dom";
import SideData from "../../components/dashboard/SideData";
export default function DashboardLayout() {
  return (
    <div className=" mt-8 relative">
      <h1 className="text-3xl font-bold text-center my-5 underline">
        Dashboard
      </h1>

      <div className="flex gap-3 h-auto  ">
        <aside className="w-1/4 h-screen bg-[#1c1c1a] rounded-md">
          <SideData />
        </aside>

        <main className="w-3/4 h-screen overflow-hidden  rounded-md bg-[#2d2d27] relative">
          <Outlet />
          <div id="modal-content"></div>
        </main>
      </div>
    </div>
  );
}
