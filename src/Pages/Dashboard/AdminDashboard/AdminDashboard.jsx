import { useState } from "react";
import ManageClasses from "./ManageClasses";
import ManageUsers from "./ManageUsers";

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("manage-classes");
  const [drawerOpen, setDrawerOpen] = useState(false);

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
        if (data.modifiedCount > 0) {
          window.location.reload();
        }
      });
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      {/* Drawer for smaller screens */}
      <div className="lg:hidden">
        <button
          onClick={() => setDrawerOpen(!drawerOpen)}
          className="p-4 bg-gray-200 text-lg"
        >
          {drawerOpen ? "Close Menu" : "Open Menu"}
        </button>
        {drawerOpen && (
          <aside className="w-full bg-gray-200 p-6">
            <h2 className="text-xl font-semibold mb-4">Admin Dashboard</h2>
            <nav>
              <ul>
                <li className="mb-2">
                  <button
                    onClick={() => {
                      setActiveSection("manage-classes");
                      setDrawerOpen(false);
                    }}
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
                    onClick={() => {
                      setActiveSection("manage-users");
                      setDrawerOpen(false);
                    }}
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
        )}
      </div>

      {/* Sidebar for larger screens */}
      <aside className="hidden lg:block lg:w-64 bg-gray-200 p-6">
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
            <ManageClasses />
          </section>
        )}

        {activeSection === "manage-users" && (
          <section id="manage-users" className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Manage Users</h2>
            <ManageUsers handelUserRole={handelUserRole} />
          </section>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
