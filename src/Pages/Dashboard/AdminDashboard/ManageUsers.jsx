import useFetch from "../../../hooks/useFetch";

const ManageUsers = ({handelUserRole}) => {
  const url = "https://focus-haven-server.onrender.com/users";
  const [data] = useFetch(url);

  // const handelUserRole = (id, value) =>{
  //   setRole(value)
  //   fetch(`https://focus-haven-server.onrender.com/users/${id}`, {
  //     method: 'PATCH',
  //     headers:{
  //       'Content-Type' : 'application/json'
  //     },
  //     body: JSON.stringify({role : value})
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data);
  //   })
  // }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border text-center rounded-lg">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Email</th>
            <th className="px-4 py-2 border">Role</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user._id}>
              <td className="px-4 py-2 border">{user.name}</td>
              <td className="px-4 py-2 border">{user.email}</td>
              <td className="px-4 py-2 border">{user.role}</td>
              <td className="px-4 py-2 border">
                <button onClick={()=>handelUserRole(user._id, 'Instractor')} className="border-2 border-slate-200 hover:bg-gray-600 transition-all duration-300 me-3 hover:text-white font-bold py-2 px-4 hover:rounded-2xl">
                  Make Instructor
                </button>
                <button onClick={()=>handelUserRole(user._id, 'Admin')} className="hover:bg-gray-600 transition-all bg-black text-white duration-300 hover:text-white font-bold py-2 px-4 hover:rounded-2xl">
                  Make Admin
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
