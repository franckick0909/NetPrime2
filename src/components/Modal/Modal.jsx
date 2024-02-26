import "./Modal.scss";
import { FaXmark } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import propTypes from "prop-types";

const Modal = ({ imageSrc, title }) => {
  const [openModal, setOpenModal] = useState(false);

  const open = () => {
    setOpenModal(true);
  };
  const close = () => {
    setOpenModal(false);
    
  };

  return (
    <>
      <button onClick={open} className="open-modal">
        Open
      </button>

      <AnimatePresence>
        {openModal && (
          <motion.dialog
            initial={{ opacity: 0, y: -500 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: [2, 0] }}
            transition={{ stiffness: 100, damping: 20 }}
            open
            onClose={close}
            className="modal modal plein-ecran">
            <div id="container-modal">
              <button className="close" onClick={close}>
                <FaXmark />
              </button>
              <div className="content">
                <div className="images">
                  <img src={imageSrc} alt={title} />
                </div>

                <div className="text">
                  <h3>{title}</h3>
                  <p></p>
                </div>
              </div>
            </div>
          </motion.dialog>
        )}
      </AnimatePresence>
    </>
  );
};

Modal.propTypes = {
  imageSrc: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
};

export default Modal;
