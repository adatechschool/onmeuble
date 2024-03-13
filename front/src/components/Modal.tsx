import React from 'react';
import { IoMdClose } from 'react-icons/io';
import '../Modal.css';
/*
const Modal = () => {
    return <section>Modal</section>;
};*/

const Modal = ({ isModalOpen, modalContent, onClose }) => {
    if (isModalOpen !== true) {
      return null;
    }
    return (
      <section className="modal">
        <article className="modal-content">
          <div className="exit-icon">
            <IoMdClose onClick={onClose} />
          </div>
          <main className="modal-mainContents">
            <h3 className="modal-title">{modalContent.title}</h3>
            <p className="modalText">{modalContent.content1}</p>
            <div className="modal-image">
              <iframe src={modalContent.image} title="gorilla-applause"/>
            </div>
            <p className="modalText">{modalContent.content2}</p>
          </main>
        </article>
      </section>
    );
   };

export default Modal;

