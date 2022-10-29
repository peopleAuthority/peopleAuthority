import {cloneElement, Fragment, useState} from "react";
import ReactDOM from "react-dom";

export default function SimpleModal(props) {
    const {
        openButton,
        modalTitle,
        saveButtonClass = 'bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150',
        saveButtonChild = 'Save Changes',
        onModalOpen = () => {
        },
        onSave = () => {
        },
        closeButtonClass = 'text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150',
        closeButtonChild = 'Close',
        onClose = () => {
        },
        modalBody,
        hideSaveButton = false,
    } = props;

    const [showModal, setShowModal] = useState(false);

    const openModalButton = cloneElement(openButton, {
        onClick: () => {
            setShowModal(true);
            onModalOpen();
        }
    })

    const ModalBody = (props) => {
        return (
            showModal ? (
                <Fragment>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl ">
                            {/*content*/}
                            <div
                                className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
                               >
                                {/*header*/}
                                <div
                                    className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">

                                    {modalTitle}

                                    <button
                                        className="p-1 ml-auto border-0 text-gray-300 hover:text-gray-500 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => {
                                            onClose();
                                            setShowModal(false)
                                        }}
                                    >
                                    <span
                                        className="bg-transparent text-gray-300 hover:text-gray-500 opacity-8 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                      ×
                                    </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">

                                    {modalBody}

                                </div>
                                {/*footer*/}
                                <div
                                    className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className={closeButtonClass}
                                        type="button"
                                        onClick={() => {
                                            onClose();
                                            setShowModal(false)
                                        }}
                                    >

                                        {closeButtonChild}

                                    </button>
                                    {!hideSaveButton ? (<button
                                        className={saveButtonClass}
                                        type="button"
                                        onClick={() => {
                                            onSave()
                                            setShowModal(false)
                                        }}
                                    >

                                        {saveButtonChild}

                                    </button>) : ''
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"/>
                </Fragment>
            ) : null
        )
    }

    return (
        <Fragment>
            {openModalButton}
            {ReactDOM.createPortal(<ModalBody/>, document.getElementById('modal-root'))}
        </Fragment>
    );
}
