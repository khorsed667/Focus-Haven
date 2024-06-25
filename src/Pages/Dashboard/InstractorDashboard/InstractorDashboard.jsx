import { useState } from 'react';
import AddClass from './AddClass';
import MyClasses from './MyClasses';

const InstructorDashboard = () => {
  const [activeSection, setActiveSection] = useState('add-class');
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
            <h2 className="text-xl font-semibold mb-4">Instructor Dashboard</h2>
            <nav>
              <ul>
                <li className="mb-2">
                  <button
                    onClick={() => {
                      setActiveSection('add-class');
                      setDrawerOpen(false);
                    }}
                    className={`block p-2 rounded ${activeSection === 'add-class' ? 'bg-gray-300' : 'hover:bg-gray-300'}`}
                  >
                    Add a Class
                  </button>
                </li>
                <li className="mb-2">
                  <button
                    onClick={() => {
                      setActiveSection('my-classes');
                      setDrawerOpen(false);
                    }}
                    className={`block p-2 rounded ${activeSection === 'my-classes' ? 'bg-gray-300' : 'hover:bg-gray-300'}`}
                  >
                    My Classes
                  </button>
                </li>
              </ul>
            </nav>
          </aside>
        )}
      </div>

      {/* Sidebar for larger screens */}
      <aside className="hidden lg:block lg:w-64 bg-gray-200 p-6">
        <h2 className="text-xl font-semibold mb-4">Instructor Dashboard</h2>
        <nav>
          <ul>
            <li className="mb-2">
              <button
                onClick={() => setActiveSection('add-class')}
                className={`block p-2 rounded ${activeSection === 'add-class' ? 'bg-gray-300' : 'hover:bg-gray-300'}`}
              >
                Add a Class
              </button>
            </li>
            <li className="mb-2">
              <button
                onClick={() => setActiveSection('my-classes')}
                className={`block p-2 rounded ${activeSection === 'my-classes' ? 'bg-gray-300' : 'hover:bg-gray-300'}`}
              >
                My Classes
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {activeSection === 'add-class' && (
          <section id="add-class" className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Add New Class</h2>
            <AddClass />
          </section>
        )}

        {activeSection === 'my-classes' && (
          <section id="my-classes" className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">My Classes</h2>
            <MyClasses />
          </section>
        )}
      </main>
    </div>
  );
};

export default InstructorDashboard;
