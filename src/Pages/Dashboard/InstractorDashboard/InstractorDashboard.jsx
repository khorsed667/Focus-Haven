import { useState } from 'react';
import AddClass from './AddClass';
import MyClasses from './MyClasses';

const InstructorDashboard = () => {
  const [activeSection, setActiveSection] = useState('add-class');

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-gray-200 p-6">
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

      <main className="flex-1 p-6">
        {activeSection === 'add-class' && (
          <section id="add-class" className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Add New Class</h2>
            <AddClass></AddClass>
          </section>
        )}

        {/* TODO: Impliment functionality for update class */}

        {activeSection === 'my-classes' && (
          <section id="my-classes" className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">My Classes</h2>
            <MyClasses></MyClasses>
          </section>
        )}
      </main>
    </div>
  );
};

export default InstructorDashboard;
