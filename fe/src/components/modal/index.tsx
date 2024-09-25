import React from 'react';
import { Modal as BootstrapModal, Button } from 'react-bootstrap';


const Modal = ({ show, children, handleClose }: { show: boolean, children: React.ReactNode, handleClose: () => void }) => {


    return (
        <BootstrapModal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            size="lg"
            centered
        >
            <BootstrapModal.Header closeButton>
                <BootstrapModal.Title>Leave A Message For Mama</BootstrapModal.Title>
            </BootstrapModal.Header>
            <BootstrapModal.Body>
                {children}
            </BootstrapModal.Body>
            <BootstrapModal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <button type="submit" className="primary-btn">Submit</button>
            </BootstrapModal.Footer>
        </BootstrapModal>
    );
};

export default Modal;
