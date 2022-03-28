import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { createApplication, createApplicationError, createApplicationSuccess } from "../store/actionCreators/applicantsAction";
import { fetchOneVacancy } from "../store/actionCreators/vacanciesAction";
import Swal from "sweetalert2";

export default function ApplicationForm() {
  const { vacancy } = useSelector((state) => state.vacanciesReducer);
  const { newError } = useSelector((state) => state.applicantsReducer);
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchOneVacancy(id));
  }, [dispatch, id]);

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  function changeName(e) {
    const { value } = e.target;
    setName(value);
  }
  function changePhoneNumber(e) {
    const { value } = e.target;
    setPhoneNumber(value);
  }
  function changeWhatsapp(e) {
    const { value } = e.target;
    setWhatsapp(value);
  }

  const submitForm = async function (e) {
    e.preventDefault();
    let data = {
      name,
      phoneNumber,
      whatsapp,
      vacancyId: +id,
    };
    dispatch(createApplication(data))
      .then((hasil) => {
        createApplicationSuccess(hasil);
        Swal.fire({
          title: "Created",
          text: `Your application to ${vacancy.name} has been created`,
          icon: "success",
          confirmButtonColor: "#3085d6",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/");
          }
        });
      })
      .catch((err) => {
        dispatch(createApplicationError(err));
      })
      .finally(() => {
        setName("");
        setPhoneNumber("");
        setWhatsapp("");
      });
  };
  if (newError) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: newError.message,
    });
  }

  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <Form onSubmit={submitForm} className="m-3 col-6">
          <h2 className="mt-5">Application Form</h2>
          <Form.Group className="mb-3">
            <Form.Label>Nama</Form.Label>
            <Form.Control type="text" placeholder="Nama" value={name} onChange={changeName} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Nomor Telepon</Form.Label>
            <Form.Control type="text" placeholder="Nomor Telepon" value={phoneNumber} onChange={changePhoneNumber} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Nomor Whatsapp</Form.Label>
            <Form.Control type="text" placeholder="Nomor Whatsapp" value={whatsapp} onChange={changeWhatsapp} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Lowongan</Form.Label>
            <Form.Control type="text" placeholder="Lowongan" defaultValue={vacancy.name} disabled />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}
