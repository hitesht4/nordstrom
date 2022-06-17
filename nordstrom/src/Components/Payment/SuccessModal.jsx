import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

function SuccessModal({show,handleClose}) {
    const navigate=useNavigate();
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>✔ Payement SuccessFull</Modal.Title>
        </Modal.Header>
        <Modal.Body>🎁 Explore More Products!</Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Close
          </Button>
          <Button variant="dark" onClick={()=>{navigate("/")}}>
            Home Page
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SuccessModal;