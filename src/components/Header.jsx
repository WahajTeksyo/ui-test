
import { useState } from 'react'
import ProfileIcon from '../assets/images/profileIcon.png'
const Header = () => {

    const [dropdownToggle, setDropdownToggle] = useState(false)

  return (
    <>
        {/* Header */}
        <header className="transition-all ease-in-out duration-1000 flex justify-between items-center border-b border-secondary py-3 bg-white px-4 md:px-6">
        {/* Header */}
        <div className='flex items-center lg:max-w-[55%] lg:w-full justify-between'>
            <h3 className='text-base font-semibold text-primary'>
                <span className='shrink-0 py-2 px-2.5 text-xs rounded-full bg-primary text-white mr-2'>W</span>
                GoodUI
            </h3>

            <div className="lg:flex hidden bg-txtbg px-4 py-2 grow justify-between items-center rounded-lg ml-[20%] ">
                <input className='outline-none w-full border-0 bg-transparent' placeholder='Search...' type="text" />
                <svg className='size-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>
            </div>
        </div>
        {/* notification */}
        <div className='flex items-center'>
            <div className="relative cursor-pointer border-r pr-3">
            <span className='absolute top-0.5 right-3.5 size-1.5 bg-red-500 z-[3] rounded-full'></span>
            <svg className='text-icon-clr size-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 17H22V19H2V17H4V10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10V17ZM18 17V10C18 6.68629 15.3137 4 12 4C8.68629 4 6 6.68629 6 10V17H18ZM9 21H15V23H9V21Z"></path></svg>
            </div>
            <div className="cursor-pointer flex items-center font-poppins shrink-0 ml-3 relative text-hedtxt font-medium text-xs">
            <div onClick={() => setDropdownToggle(!dropdownToggle)} className="hover:bg-light-prps1 flex items-center p-1.5 rounded-lg ">
                <div className='shrink-0 bg-[#FFE6CC] rounded-full p-1.5'>
                <img className='size-6 object-contain' src={ProfileIcon} alt="Image" />
                </div>
                <p className='shrink-0 ml-2 mr-0.5'>
                Wahaj Ahmed
                </p>
                <svg className='size-4 object-contain' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg>
            </div>
            {/* dropdown */}
            {
                dropdownToggle ? 
                <div className="absolute shadow-md flex flex-col top-14 border rounded-lg bg-white w-full z-[4]">
                    <button onClick={() => setDropdownToggle(!dropdownToggle)} className='flex items-center py-3 gap-2 px-2 border-b hover:bg-light-prps1'>
                    <svg className='size-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"></path></svg>
                    Profile
                    </button>
                    <button onClick={() => setDropdownToggle(!dropdownToggle)} className='flex items-center py-3 gap-2 px-2 border-b hover:bg-light-prps1'>
                    <svg className='size-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8.68637 4.00008L11.293 1.39348C11.6835 1.00295 12.3167 1.00295 12.7072 1.39348L15.3138 4.00008H19.0001C19.5524 4.00008 20.0001 4.4478 20.0001 5.00008V8.68637L22.6067 11.293C22.9972 11.6835 22.9972 12.3167 22.6067 12.7072L20.0001 15.3138V19.0001C20.0001 19.5524 19.5524 20.0001 19.0001 20.0001H15.3138L12.7072 22.6067C12.3167 22.9972 11.6835 22.9972 11.293 22.6067L8.68637 20.0001H5.00008C4.4478 20.0001 4.00008 19.5524 4.00008 19.0001V15.3138L1.39348 12.7072C1.00295 12.3167 1.00295 11.6835 1.39348 11.293L4.00008 8.68637V5.00008C4.00008 4.4478 4.4478 4.00008 5.00008 4.00008H8.68637ZM6.00008 6.00008V9.5148L3.5148 12.0001L6.00008 14.4854V18.0001H9.5148L12.0001 20.4854L14.4854 18.0001H18.0001V14.4854L20.4854 12.0001L18.0001 9.5148V6.00008H14.4854L12.0001 3.5148L9.5148 6.00008H6.00008ZM12.0001 16.0001C9.79094 16.0001 8.00008 14.2092 8.00008 12.0001C8.00008 9.79094 9.79094 8.00008 12.0001 8.00008C14.2092 8.00008 16.0001 9.79094 16.0001 12.0001C16.0001 14.2092 14.2092 16.0001 12.0001 16.0001ZM12.0001 14.0001C13.1047 14.0001 14.0001 13.1047 14.0001 12.0001C14.0001 10.8955 13.1047 10.0001 12.0001 10.0001C10.8955 10.0001 10.0001 10.8955 10.0001 12.0001C10.0001 13.1047 10.8955 14.0001 12.0001 14.0001Z"></path></svg>
                    Setting
                    </button>
                    <button onClick={() => setDropdownToggle(!dropdownToggle)} className='flex items-center py-3 gap-2 px-2 border-b hover:bg-light-prps1'>
                    <svg className='size-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.7279 9.57627L14.3137 8.16206L5 17.4758V18.89H6.41421L15.7279 9.57627ZM17.1421 8.16206L18.5563 6.74785L17.1421 5.33363L15.7279 6.74785L17.1421 8.16206ZM7.24264 20.89H3V16.6473L16.435 3.21231C16.8256 2.82179 17.4587 2.82179 17.8492 3.21231L20.6777 6.04074C21.0682 6.43126 21.0682 7.06443 20.6777 7.45495L7.24264 20.89Z"></path></svg>
                    Edit
                    </button>
                    <button onClick={() => setDropdownToggle(!dropdownToggle)} className='flex items-center py-3 gap-2 px-2 border-b hover:bg-light-prps1'>
                    <svg className='size-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5 22C4.44772 22 4 21.5523 4 21V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V6H18V4H6V20H18V18H20V21C20 21.5523 19.5523 22 19 22H5ZM18 16V13H11V11H18V8L23 12L18 16Z"></path></svg>
                    Logout
                    </button>
                </div>
                : null 
            }
            </div>
        </div>
        </header>
    </>
  )
}

export default Header