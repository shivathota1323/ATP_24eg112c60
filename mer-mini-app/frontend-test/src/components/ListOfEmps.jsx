import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

function ListOfEmps() {
  const [emps, setEmps] = useState([]);
  const navigate = useNavigate();

  const gotoEmployee = (empObj) => {
    navigate("/employee", { state: empObj });
  };

  const gotoEditEmployee = (empObj) => {
    navigate("/edit-emp", { state: empObj });
  };

  //  Delete employee
  const deleteEmployee = async (id) => {
    try {
      let res = await fetch(`http://localhost:4000/emp-api/employees/${id}`, {
        method: "DELETE",
      });
      if (res.status === 200) {
        // remove from state without refetch
        setEmps((prev) => prev.filter((emp) => emp._id !== id));
      } else {
        console.error("Failed to delete employee, status:", res.status);
      }
    } catch (err) {
      console.error("Error deleting employee:", err);
    }
  };

  useEffect(() => {
    async function getEmps() {
      try {
        let res = await fetch("http://localhost:4000/emp-api/employees");
        if (res.status === 200) {
          let resObj = await res.json();
          setEmps(resObj.payload);
        } else {
          console.error("Failed to fetch employees, status:", res.status);
        }
      } catch (err) {
        console.error("Error fetching employees:", err);
      }
    }
    getEmps();
  }, []);

  return (
    <div>
      <h1 className="text-5xl text-center text-gray-950 mr-60">List of Employees :</h1><br /><br />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {emps.map((empObj) => (
          <div
            key={empObj._id}
            className="bg-white p-5 text-center text-2xl rounded-2xl shadow-2xl shadow-stone-600"
          >
            <p>{empObj.email}</p>
            <p className="mb-4">{empObj.name}</p>
            <div className="flex justify-around">
              <button
                onClick={() => gotoEmployee(empObj)}
                className="bg-green-600 p-2 rounded-2xl text-white"
              >
                View
              </button>
              <button
                onClick={() => gotoEditEmployee(empObj)}
                className="bg-yellow-600 p-2 rounded-2xl text-white"
              >
                Edit
              </button>
              <button
                onClick={() => deleteEmployee(empObj._id)}
                className="bg-red-600 p-2 rounded-2xl text-white"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListOfEmps;
