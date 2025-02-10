import React, { useEffect, useRef } from "react";
import { FaXmark } from "react-icons/fa6";

const Modal = ({ show, mode, label, changeModalState }: any) => {
  const modalRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (show) {
      modalRef.current?.showModal(); // نمایش مودال
    } else {
      modalRef.current?.close(); // بستن مودال
    }
  }, [show]);

  const initialOnClose = () => {
    changeModalState((prev: any) => ({ ...prev, modal: false, mode: null }));
  };

  return (
    <dialog ref={modalRef} className="modal ">
      <div className="modal-box w-11/12 max-w-5xl flex flex-col  rounded-box p-0">
        {/* هدر مودال */}
        <div className="w-full flex justify-between items-center bg-red-black-gradient p-1 ">
          <span className="text-white p-2">
            {`${mode === "add" ? "افزودن" : "ویرایش"} ${label}`}
          </span>
          <button
            type="button"
            className="btn btn-sm btn-circle btn-ghost"
            onClick={initialOnClose}
          >
            <FaXmark fontSize={'1.2rem'} className="text-white" />
          </button>
        </div>
        <div className="flex justify-center py-14"   >
    <span>
        modalContetnt
    </span>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
