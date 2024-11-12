
import  { useState } from 'react';

const Sidebar = () => {

  const [toggleMenue, setToggleMenue] = useState(true);
  const [selectedItem, setSelectedItem] = useState('Dashboard'); // Default active item

  const handleItemClick = (item) => {
    setSelectedItem(item); // Update active item
  };

  return (
    <>
      {/* SideBar */}
      <section className={`h-screen xl:block transition-all ease-in-out duration-700 xl:relative xl:left-0 top-0 absolute border-r bg-sd-gray-shade max-w-72 w-full xl:-mt-[73px] z-[4] pt-6
          ${toggleMenue ? 'left-0' : '-left-[287px]'}
        `}>

        <div onClick={() => setToggleMenue(!toggleMenue)} className="size-9 p-2 cursor-pointer bg-light-prp xl:hidden block rounded-tr-lg rounded-br-lg absolute -right-9 top-[72px]">
          <svg className='w-full h-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 4H21V6H3V4ZM3 11H15V13H3V11ZM3 18H21V20H3V18Z"></path></svg>
        </div>

        <h3 className='text-base uppercase font-semibold text-primary border-b border-secondary pl-8 pb-6'>
          <span className='shrink-0 mr-1.5 py-2 px-2.5 text-xs rounded-full bg-primary text-white'>W</span>
          GoodUI
        </h3>
        <ul className='px-8 text-sm mt-8 flex flex-col gap-3'>
          <li
            className={`flex items-center cursor-pointer px-2.5 py-3 rounded-lg gap-2  tracking-wider ${
              selectedItem === 'Dashboard' ? 'bg-light-prps1 text-primary font-medium' : 'text-txtClr hover:bg-light-prp'
            }`}
            onClick={() => handleItemClick('Dashboard')}
          >
            <svg className={`size-5 ${selectedItem === 'Dashboard' ? 'fill-primary' : 'fill-icon-clr'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM4 5V19H20V5H4ZM7 13H9V17H7V13ZM11 7H13V17H11V7ZM15 10H17V17H15V10Z"></path></svg>
            Dashboard
          </li>
          <li
            className={`flex items-center cursor-pointer px-2.5 py-3 rounded-lg gap-2 tracking-wider ${
              selectedItem === 'Settings' ? 'bg-light-prps1 text-primary font-medium' : 'text-txtClr hover:bg-light-prp'
            }`}
            onClick={() => handleItemClick('Settings')}
          >
            <svg className={`size-5 ${selectedItem === 'Settings' ? 'fill-primary' : 'fill-icon-clr'}`}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8.68637 4.00008L11.293 1.39348C11.6835 1.00295 12.3167 1.00295 12.7072 1.39348L15.3138 4.00008H19.0001C19.5524 4.00008 20.0001 4.4478 20.0001 5.00008V8.68637L22.6067 11.293C22.9972 11.6835 22.9972 12.3167 22.6067 12.7072L20.0001 15.3138V19.0001C20.0001 19.5524 19.5524 20.0001 19.0001 20.0001H15.3138L12.7072 22.6067C12.3167 22.9972 11.6835 22.9972 11.293 22.6067L8.68637 20.0001H5.00008C4.4478 20.0001 4.00008 19.5524 4.00008 19.0001V15.3138L1.39348 12.7072C1.00295 12.3167 1.00295 11.6835 1.39348 11.293L4.00008 8.68637V5.00008C4.00008 4.4478 4.4478 4.00008 5.00008 4.00008H8.68637ZM6.00008 6.00008V9.5148L3.5148 12.0001L6.00008 14.4854V18.0001H9.5148L12.0001 20.4854L14.4854 18.0001H18.0001V14.4854L20.4854 12.0001L18.0001 9.5148V6.00008H14.4854L12.0001 3.5148L9.5148 6.00008H6.00008ZM12.0001 16.0001C9.79094 16.0001 8.00008 14.2092 8.00008 12.0001C8.00008 9.79094 9.79094 8.00008 12.0001 8.00008C14.2092 8.00008 16.0001 9.79094 16.0001 12.0001C16.0001 14.2092 14.2092 16.0001 12.0001 16.0001ZM12.0001 14.0001C13.1047 14.0001 14.0001 13.1047 14.0001 12.0001C14.0001 10.8955 13.1047 10.0001 12.0001 10.0001C10.8955 10.0001 10.0001 10.8955 10.0001 12.0001C10.0001 13.1047 10.8955 14.0001 12.0001 14.0001Z"></path></svg>
            Settings
          </li>
          <li
            className={`flex items-center cursor-pointer px-2.5 py-3 rounded-lg gap-2 tracking-wider ${
              selectedItem === 'Help' ? 'bg-light-prps1 text-primary font-medium' : 'text-txtClr hover:bg-light-prp'
            }`}
            onClick={() => handleItemClick('Help')}
          >
            <svg className={`size-5 ${selectedItem === 'Help' ? 'fill-primary' : 'fill-icon-clr'}`}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 6C12.8284 6 13.5 5.32843 13.5 4.5C13.5 3.67157 12.8284 3 12 3C11.1716 3 10.5 3.67157 10.5 4.5C10.5 5.32843 11.1716 6 12 6ZM9 10H11V18H9V20H15V18H13V8H9V10Z"></path></svg>
            Help
          </li>
        </ul>
      </section>
    </>
  )
}

export default Sidebar