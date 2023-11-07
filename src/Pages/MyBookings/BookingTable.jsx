const BookingTable = ({ booking, handleDelete, handleUpdate }) => {
  const { _id, room_name, check_in, check_out, img } = booking;

  const handleClose = () => {
    const modal = document.getElementById('my_modal_1');
    modal.close();
  };
  

  return (
    <tr>
      <th>
        <button onClick={() => handleDelete(_id)} className="btn btn-square">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="w-12 h-12 rounded">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>
        <div className="font-bold">{room_name}</div>
      </td>
      <td>{check_in}</td>
      <td>{check_out}</td>
      <th>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>Update</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <div className="h-full text-center space-y-5">
      <form onSubmit={(e) => handleUpdate(_id, e)} className="">
      <div className="form-control">
          <label className="label">
            <span className="label-text clear-left text-lg font-normal">Check In</span>
          </label>
          <input name="check_in" type="date" placeholder="Arrive Date" className="input input-bordered rounded-none" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text clear-left text-lg font-normal">Check Out</span>
          </label>
          <input name="check_out" type="date" placeholder="Departure Date" className="input input-bordered rounded-none" required />
        </div>
        <button className="btn mt-5 border border-black hover:bg-[#AA8453] hover:text-white ">Update</button>
        <button onClick={handleClose} className="btn mt-5 ml-5 px-5 border border-black hover:bg-[#AA8453] hover:text-white ">Close</button>
      </form>
    </div>
  </div>
</dialog>
      </th>
    </tr>
  );
};

export default BookingTable;
