import { useEffect, useState } from "react";

export default function ExpertiseAdmin() {
  const [expertise, setExpertise] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          import.meta.env.VITE_APP_PORTFOLIO_API_URL + "/expertise"
        );
        const data = await response.json();
        setExpertise(data || []); // if data is null, set it to an empty array
      } catch (error) {
        console.error("Error fetching expertise:", error);
      }
    }
    fetchData();
  }, []);
  // console.log(expertise);
  return (
    <section className="p-4">
      <h2 className="text-xl bg-[#050505] rounded-md py-4 font-bold text-center mb-4">
        Expertise Management
      </h2>
      <div className=" flex items-center justify-between my-4">
        <p className=" font-semibold"> Total Expertise : {expertise?.length}</p>
        <button className="py-2  px-5 bg-green-500 text-white rounded hover:bg-blue-600 transition">
          Add Expertise
        </button>
      </div>
      {expertise.length === 0 ? (
        <p className="text-center text-gray-500">No Expertise found!</p>
      ) : (
        <div className="space-y-2 mb-10">
          {expertise.map((expertise, i) => (
            <div
              key={expertise._id}
              className="p-4 shadow-md bg-[#1f1f1b] rounded-lg flex justify-between items-center border border-gray-700"
            >
              <div>
                <h3 className="text-lg font-bold">
                  {" "}
                  {i + 1}. {expertise?.name}
                </h3>
                <p className="text-sm text-gray-400">
                  {expertise?.description}
                </p>
              </div>
              <div className="flex gap-2">
                <button className="py-1 px-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                  Edit
                </button>
                <button className="py-1 px-3 bg-red-500 text-white rounded hover:bg-red-600 transition">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
