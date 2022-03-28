import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Card({ item }) {
  const navigate = useNavigate();
  return (
    <div className="col">
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
  );
}
