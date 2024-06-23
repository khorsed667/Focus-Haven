import { useState } from "react";
import ManageClasses from "./ManageClasses";
import ManageUsers from "./ManageUsers";

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("manage-classes");

  const handelUserRole = (id, value) => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ role: value }),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.modifiedCount > 0){
          window.location.reload();
        }
      });
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-200 p-6">
        <h2 className="text-xl font-semibold mb-4">Admin Dashboard</h2>
        <nav>
          <ul>
            <li className="mb-2">
              <button
                onClick={() => setActiveSection("manage-classes")}
                className={`block p-2 rounded ${
                  activeSection === "manage-classes"
                    ? "bg-gray-300"
                    : "hover:bg-gray-300"
                }`}
              >
                Manage Classes
              </button>
            </li>
            <li className="mb-2">
              <button
                onClick={() => setActiveSection("manage-users")}
                className={`block p-2 rounded ${
                  activeSection === "manage-users"
                    ? "bg-gray-300"
                    : "hover:bg-gray-300"
                }`}
              >
                Manage Users
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {activeSection === "manage-classes" && (
          <section id="manage-classes" className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Manage Classes</h2>
            <ManageClasses></ManageClasses>
          </section>
        )}

        {activeSection === "manage-users" && (
          <section id="manage-users" className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Manage Users</h2>
            <ManageUsers handelUserRole={handelUserRole} ></ManageUsers>
          </section>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
