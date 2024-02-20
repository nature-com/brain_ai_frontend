import { Button, Modal } from "flowbite-react";
import { Link } from "react-router-dom";

const Modals = ({ openModal, setOpenModal }) => {
  return (
    <>
      <Modal
        size="md"
        dismissible
        show={openModal}
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header className="border-0 p-0 pt-4 pr-4">&nbsp;</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base text-black text-center">
              You need to upgrade to access this tool
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer className="border-0 flex justify-center">
          <Link
            className="text-sm font-medium text-white px-5 py-2 mr-2 lg:mr-0 bg-[#ba9e63] rounded-lg hover:bg-black cursor-pointer"
            to="/your-account"
          >
            Confirm Upgrade Plan
          </Link>
          <Link
            className="text-sm font-medium text-white px-5 py-2 mr-2 lg:mr-0 bg-black rounded-lg hover:bg-[#ba9e63] cursor-pointer"
            onClick={() => setOpenModal(false)}
            to="/dashboard-login"
          >
            Cancel
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Modals;
