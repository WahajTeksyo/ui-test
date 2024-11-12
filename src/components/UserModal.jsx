// UserModal.js

const UserModal = ({ user, onClose }) => {
  if (!user) return null;

  return (
    <div className="fixed inset-0 bg-gray-400 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md md:mx-auto pb-6 pt-4 mx-3">
        <h2 className="text-base uppercase font-semibold text-txtClr mb-4 border-b lg:px-6 px-4 pb-2">User Details</h2>
        <div className="flex flex-wrap lg:gap-6 gap-4 lg:px-6 px-4">
            <div className="lg:w-[45%] w-full ">
                <label className="text-sm font-medium pb-1 text-gray-400 block" htmlFor="">Name</label>
                <p className="text-xs font-normal tracking-wider px-2 py-3 rounded-lg border">{user.name}</p>
            </div>
            <div className="lg:w-[45%] w-full ">
                <label className="text-sm font-medium pb-1 text-gray-400 block" htmlFor="">Email</label>
                <p className="text-xs font-normal tracking-wider px-2 py-3 rounded-lg border">{user.email}</p>
            </div>
            <div className="lg:w-[45%] w-full ">
                <label className="text-sm font-medium pb-1 text-gray-400 block" htmlFor="">Phone</label>
                <p className="text-xs font-normal tracking-wider px-2 py-3 rounded-lg border">{user.phone}</p>
            </div>
            <div className="lg:w-[45%] w-full ">
                <label className="text-sm font-medium pb-1 text-gray-400 block" htmlFor="">Company</label>
                <p className="text-xs font-normal tracking-wider px-2 py-3 rounded-lg border">{user.company.name}</p>
            </div>
            <div className="w-full ">
                <label className="text-sm font-medium pb-1 text-gray-400 block" htmlFor="">Address</label>
                <p className="text-xs font-normal tracking-wider px-2 py-3 rounded-lg border">{user.address.city}</p>
            </div>
        </div>
        
        <div className="mt-6 border-t-[.5px] ">
            <button
            className=" block w-fit px-6 py-2 font-light ml-auto lg:mr-6 mr-4 mt-4 tracking-wider outline-none border text-primary border-primary rounded-lg"
            onClick={onClose}
            >
            Close
            </button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
