import { useState } from "react";
import ScheduleClass from "./ScheduleClass";
import PaymentHistory from "./PaymentHistory";
import EnrolledClass from "./EnrolledClass";

const StudentDashboard = () => {
  const [activeSection, setActiveSection] = useState("selected-classes");
  const [drawerOpen, setDrawerOpen] = useState(false);

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
            <h2 className="text-xl font-semibold mb-4">Student Dashboard</h2>
            <nav>
              <ul>
                <li className="mb-2">
                  <button
                    onClick={() => {
                      setActiveSection("selected-classes");
                      setDrawerOpen(false);
                    }}
                    className={`block p-2 rounded ${
                      activeSection === "selected-classes"
                        ? "bg-gray-300"
                        : "hover:bg-gray-300"
                    }`}
                  >
                    Scheduled Classes
                  </button>
                </li>
                <li className="mb-2">
                  <button
                    onClick={() => {
                      setActiveSection("enrolled-classes");
                      setDrawerOpen(false);
                    }}
                    className={`block p-2 rounded ${
                      activeSection === "enrolled-classes"
                        ? "bg-gray-300"
                        : "hover:bg-gray-300"
                    }`}
                  >
                    Enrolled Classes
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setActiveSection("payment-history");
                      setDrawerOpen(false);
                    }}
                    className={`block p-2 rounded ${
                      activeSection === "payment-history"
                        ? "bg-gray-300"
                        : "hover:bg-gray-300"
                    }`}
                  >
                    Payment History
                  </button>
                </li>
              </ul>
            </nav>
          </aside>
        )}
      </div>

      {/* Sidebar for larger screens */}
      <aside className="hidden lg:block lg:w-64 bg-gray-200 p-6">
        <h2 className="text-xl font-semibold mb-4">Student Dashboard</h2>
        <nav>
          <ul>
            <li className="mb-2">
              <button
                onClick={() => setActiveSection("selected-classes")}
                className={`block p-2 rounded ${
                  activeSection === "selected-classes"
                    ? "bg-gray-300"
                    : "hover:bg-gray-300"
                }`}
              >
                Scheduled Classes
              </button>
            </li>
            <li className="mb-2">
              <button
                onClick={() => setActiveSection("enrolled-classes")}
                className={`block p-2 rounded ${
                  activeSection === "enrolled-classes"
                    ? "bg-gray-300"
                    : "hover:bg-gray-300"
                }`}
              >
                Enrolled Classes
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection("payment-history")}
                className={`block p-2 rounded ${
                  activeSection === "payment-history"
                    ? "bg-gray-300"
                    : "hover:bg-gray-300"
                }`}
              >
                Payment History
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {activeSection === "selected-classes" && (
          <section id="selected-classes" className="mb-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">My Scheduled Classes</h2>
            <ScheduleClass />
          </section>
        )}

        {activeSection === "enrolled-classes" && (
          <section id="enrolled-classes" className="mb-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">My Enrolled Classes</h2>
            <EnrolledClass />
          </section>
        )}

        {activeSection === "payment-history" && (
          <section id="payment-history" className="mb-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">My Payment History</h2>
            <PaymentHistory />
          </section>
        )}
      </main>
    </div>
  );
};

export default StudentDashboard;
