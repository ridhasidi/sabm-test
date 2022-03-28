import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Card({ item }) {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
    // console.log(show);
  };
  const navigate = useNavigate();
  return (
    <>
      <div onClick={handleShow} className="col">
        <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{ backgroundImage: `url(${item.photoUrl})` }}>
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">{item.name}</h2>
          </div>
          <Button
            onClick={() => {
              navigate(`/apply/${item.id}`);
            }}
            className="m-2"
            variant="primary"
          >
            Apply
          </Button>{" "}
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body style={{ backgroundImage: `url(${item.photoUrl})`, height: 610, width: 410 }}></Modal.Body>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal>
    </>
  );
}
