import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Card from "../components/Card";
import { fetchVacancies } from "../store/actionCreators/vacanciesAction";
import { Modal } from "react-bootstrap";
export default function HomePage() {
  const { vacancies, loading } = useSelector((state) => state.vacanciesReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchVacancies());
  }, [dispatch]);

  if (loading) {
    return <div>Loading.......</div>;
  }
  return (
    <div className="container px-4 py-5" id="custom-cards">
      <h2 className="pb-2 border-bottom">Vacancies</h2>

      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        {vacancies.map((vac) => {
          return <Card key={vac.id} item={vac}></Card>;
        })}
      </div>

      <Modal></Modal>
    </div>
  );
}
