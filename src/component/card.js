import React from 'react';
import '../../src/index';
import 'bootstrap/dist/css/bootstrap.min.css';

const card = ({ cars }) => {
  return (
    <>
      <div className="container">
        <div className="cars-container row">
          {cars.map((car) => (
          <div className="col-md-4 my-2" key={car.id}>
            <div className="card p-3 mb-3 shadow-lg" style={{ height: 600 + "px" }}>
              <div className="card-body">
                <img src={car.image} className="card-img" style={{ objectFit: "cover",height: 230 + "px" }} />
                <h6 className="card-title mt-3 card-title-text">
                  {car.manufacture}/{car.model}
                </h6>
                <h5 className="card-title mt-3 card-title-text">Rp {car.rentPerDay} / hari</h5>
                <p className="card-text" style={{overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis"}}>
                  {car.description}</p>
                <h6>
                  <i className="bi bi-people" style={{ fontSize: 20 + "px" }}></i> {car.capacity} orang
                </h6>
                <h6>
                  <i className="bi bi-gear" style={{ fontSize: 20 + "px" }}></i> {car.transmission}
                </h6>
                <h6>
                  <i className="bi bi-calendar" style={{ fontSize: 20 + "px" }}></i> Tahun {car.year}
                </h6>
                <div className="d-flex flex-column mt-3 align-items-stretch">
                  <button className="btn btn-success">Pilih Mobil</button>
                </div>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>

    </>
  );
};


export default card;