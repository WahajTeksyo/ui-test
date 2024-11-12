import { useEffect, useState } from "react";
import Sidebarsd from './components/Sidebarsd';
import UserModal from './components/UserModal';
import './App.css';
import Header from './components/Header';

function App() {
  const [users, setUsers] = useState([]);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [toggleTableGrid, setToggleTableGrid] = useState(false);
  const [toggleDltModal, setToggleDltModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log('-->API Error',err))
  }, []);

  const toggleDropdown = (userId) => {
    setActiveDropdown((prev) => (prev === userId ? null : userId));
  };

  const deleteUser = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers); // Update the users state with the filtered list
    setActiveDropdown(null); // Close the dropdown after deletion
    setToggleDltModal(true);
    setTimeout(() => {
      setToggleDltModal(false)
    }, 800);
  };

  const showUserDetails = (user) => {
    setSelectedUser(user);
    setActiveDropdown(null);
  };

  const closeUserModal = () => setSelectedUser(null);


  return (
    <div className="h-screen overflow-hidden">

      {
        toggleDltModal ? 
        <div className="fixed flex items-center gap-3 font-semibold p-4  border-red-500 shadow-md text-center top-5 left-1/2 -translate-x-1/2 bg-white rounded-lg border z-[7]">
          <div className="size-7 border border-red-400 rounded-full pt-[5px] pl-[6px]">
            <svg className="w-4 h-w-4 fill-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 6C12.8284 6 13.5 5.32843 13.5 4.5C13.5 3.67157 12.8284 3 12 3C11.1716 3 10.5 3.67157 10.5 4.5C10.5 5.32843 11.1716 6 12 6ZM9 10H11V18H9V20H15V18H13V8H9V10Z"></path></svg>
          </div>
           Employee Details Deleted
        </div> : ''
      }
      
      <Header />

      <div className="flex">
        <Sidebarsd />
        {/* employees */}

        <section className='grow w-full'>
          <div className="lg:px-6 px-4 lg:py-8 py-6 h-screen overflow-auto">
            <div className="flex justify-between items-center flex-wrap gap-5">
              <h1 className='text-hedtxt font-semibold text-2xl'>Employees</h1>
              <div onClick={() => setToggleTableGrid(!toggleTableGrid)} className="flex items-center gap-2 px-2 py-1.5 rounded-lg bg-light-prps1">
                <svg className={`size-5 cursor-pointer shrink-0 rounded-sm fill-icon-clr ${ !toggleTableGrid ? 'bg-primary rounded-sm fill-white' : '' }`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21 3C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM11 13H4V19H11V13ZM20 13H13V19H20V13ZM11 5H4V11H11V5ZM20 5H13V11H20V5Z"></path></svg>
                <svg className={`size-5 cursor-pointer shrink-0 rounded-sm fill-icon-clr ${ toggleTableGrid ? 'bg-primary rounded-sm fill-white' : '' }`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 4H21V6H8V4ZM3 3.5H6V6.5H3V3.5ZM3 10.5H6V13.5H3V10.5ZM3 17.5H6V20.5H3V17.5ZM8 11H21V13H8V11ZM8 18H21V20H8V18Z"></path></svg>
              </div>
            </div>
            {/*  */}

            { !toggleTableGrid ? 
              <div className="mt-8 border border-gray-200 rounded-lg overflow-auto">
                <table className="w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-semibold tracking-wider text-left text-gray-700 uppercase"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-semibold tracking-wider text-left text-gray-700 uppercase"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-semibold tracking-wider text-left text-gray-700 uppercase"
                      >
                        Phone
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-semibold tracking-wider text-left text-gray-700 uppercase"
                      >
                        Address
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-semibold tracking-wider text-left text-gray-700 uppercase"
                      >
                        Company
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-semibold tracking-wider text-left text-gray-700 uppercase"
                      >
                        Actioins
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {users.map((user) => (
                      <tr key={user.id}>
                        <td className="px-6 py-4 text-sm font-medium text-hedtxt whitespace-nowrap">
                          {user.name}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                        {user.email}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                        {user.phone}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                          {user.address.city}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                          {user.company.name}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                          <div className="relative">
                            <button onClick={() => toggleDropdown(user.id)} className="text-gray-500 text-center hover:text-gray-700">
                              <svg className="size-5 fill-[#F99C30] mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C10.9 3 10 3.9 10 5C10 6.1 10.9 7 12 7C13.1 7 14 6.1 14 5C14 3.9 13.1 3 12 3ZM12 17C10.9 17 10 17.9 10 19C10 20.1 10.9 21 12 21C13.1 21 14 20.1 14 19C14 17.9 13.1 17 12 17ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"></path></svg>
                            </button>
                            {activeDropdown === user.id && (
                              <div className="absolute min-w-36 flex flex-col right-20 z-10 mt-2 w-full bg-white border rounded-lg shadow-lg">
                                <button onClick={() => showUserDetails(user)} className="w-full flex items-center gap-2 border-b px-4 py-2.5 text-base text-left text-gray-700 hover:bg-gray-100">
                                  <svg className="size-4 fill-[#2FBFDE]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V4H5V20H19ZM8 7H16V9H8V7ZM8 11H16V13H8V11ZM8 15H16V17H8V15Z"></path></svg>
                                    Details
                                </button>
                                <button
                                  className="w-full flex items-center gap-2 px-4 py-2.5 text-base text-left text-red-600 hover:bg-gray-100"
                                  onClick={() => deleteUser(user.id)}
                                >
                                  <svg className="size-4 fill-red-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M7 4V2H17V4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7ZM6 6V20H18V6H6ZM9 9H11V17H9V9ZM13 9H15V17H13V9Z"></path></svg>
                                  Delete
                                </button>
                              </div>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              :
              <div className="mt-8 grid md:grid-cols-2 grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 gap-4">
                {console.log(users)}
                {users.map((user) =>  {
                      const initials = user.name
                          .split(' ')
                          .map(word => word[0])
                          .join('')
                          .toUpperCase(); // Ensures initials are uppercase

                      return (
                          <div key={user.id} className="bg-[#F8F8FA] rounded-lg p-4 border ">
                              <div className="img-box flex gap-2 mb-3">
                                  <p className="bg-light-prps1 text-primary font-semibold text-base rounded-full text-center size-12 pt-3">{initials}</p>
                                  <div>
                                    <p className="text-lg font-semibold">{user.name}</p>
                                    <p className="text-gray-400 text-xs">{user.email}</p>
                                  </div>
                                  <div className="relative ml-auto mt-2">
                                        <button onClick={() => toggleDropdown(user.id)} className="text-gray-500 ml-auto text-center hover:text-gray-700">
                                          <svg className="size-5 fill-hedtxt ml-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 4H21V6H8V4ZM4.5 6.5C3.67157 6.5 3 5.82843 3 5C3 4.17157 3.67157 3.5 4.5 3.5C5.32843 3.5 6 4.17157 6 5C6 5.82843 5.32843 6.5 4.5 6.5ZM4.5 13.5C3.67157 13.5 3 12.8284 3 12C3 11.1716 3.67157 10.5 4.5 10.5C5.32843 10.5 6 11.1716 6 12C6 12.8284 5.32843 13.5 4.5 13.5ZM4.5 20.4C3.67157 20.4 3 19.7284 3 18.9C3 18.0716 3.67157 17.4 4.5 17.4C5.32843 17.4 6 18.0716 6 18.9C6 19.7284 5.32843 20.4 4.5 20.4ZM8 11H21V13H8V11ZM8 18H21V20H8V18Z"></path></svg>
                                        </button>
                                        {activeDropdown === user.id && (
                                          <div className="absolute flex flex-col right-0 z-10 mt-2 bg-white border rounded-lg shadow-lg">
                                            <button onClick={() => showUserDetails(user)} className="w-full flex items-center gap-2 border-b px-4 py-2.5 text-base text-left text-gray-700 hover:bg-gray-100">
                                              <svg className="size-4 fill-[#2FBFDE]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V4H5V20H19ZM8 7H16V9H8V7ZM8 11H16V13H8V11ZM8 15H16V17H8V15Z"></path></svg>
                                                Details
                                            </button>
                                            <button
                                              className="w-full flex items-center gap-2 px-4 py-2.5 text-base text-left text-red-600 hover:bg-gray-100"
                                              onClick={() => deleteUser(user.id)}
                                            >
                                              <svg className="size-4 fill-red-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M7 4V2H17V4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7ZM6 6V20H18V6H6ZM9 9H11V17H9V9ZM13 9H15V17H13V9Z"></path></svg>
                                              Delete
                                            </button>
                                          </div>
                                        )}
                                      </div>
                              </div>
                              <p className="text-white text-center px-4 w-fit  py-1 rounded-lg text-sm my-3  bg-primary">{user.company.name}</p>
                              <p className="mt-.5 text-xs"><span className="text-sm mr-3 text-hedtxt font-semibold">Phone:</span>{user.phone}</p>
                              <p className="mt-.5 text-xs"><span className="text-sm mr-3 text-hedtxt font-semibold">UserName:</span>{user.username}</p>
                              <p className="mt-.5 text-xs"><span className="text-sm mr-3 text-hedtxt font-semibold">Website:</span>{user.website}</p>
                          </div>
                      );
                  })}
              </div>
            } 
          </div>
        </section>

      </div>
      <UserModal user={selectedUser} onClose={closeUserModal} />
    </div>
  )
}

export default App
