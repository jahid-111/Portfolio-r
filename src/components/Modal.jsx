import ReactDOM from "react-dom";
import { FaXmark } from "react-icons/fa6";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center h-screen overflow-y-scroll">
      <div
        id="modal-content"
        className="p-2 rounded-lg shadow-lg relative w-6/12"
      >
        <button
          className="absolute top-10 -right-5 text-white border border-red-600 p-2 hover:bg-gray-500 rounded"
          onClick={onClose}
        >
          <FaXmark />
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("modal-content")
  );
}
