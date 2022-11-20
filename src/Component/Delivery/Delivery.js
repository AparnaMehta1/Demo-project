import React from "react";

const Delivery = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title d-flex justify-content-left mx-5 fw-bold text-muted">
              Delivery
            </h5>
            <hr />
            <div className="btn-group border border-secondary ">
              <a
                href="#"
                className="btn btn-light bg-light active "
                aria-current="page"
              >
                Free
              </a>
              <a href="#" className="btn btn-light">
                Express:$9.99
              </a>
            </div>

            <p className="text-muted  d-flex justify-content-left">Delivery date : June 242022</p>
            <hr />
            <div className="btn-group border border-secondary  form-control">
              <a
                href="#"
                className="btn btn-light bg-light  active fw-bold text-muted"
                aria-current="page"
              >
                Promocode
              </a>
              <a
                href="#"
                className="btn btn-light border border-secondary text-dark fw-bold"
              >
                Apply
              </a>
            </div>

            <p className="text-muted  d-flex justify-content-left">20% off discount</p>
            <div className="row">
              <div className="row">
                <div className="row">
                  <p className=" col-6 fs-4 fw-bold text-dark d-flex justify-content-left">
                    Subtotal
                  </p>
                  <p className="col-6 fs-4  d-flex justify-content-end fw-bold">$80.96</p>
                </div>
                <div className="row">
                  <p className=" col-6 text-dark d-flex justify-content-left">
                    Discount
                  </p>
                  <p className="col-6  d-flex justify-content-end">(20%)-$16.19</p>
                </div>

                <div className="row">
                  <p className=" col-6 text-dark d-flex justify-content-left">
                    Delivery
                  </p>
                  <p className="col-6  d-flex justify-content-end">$0.00</p>
                </div>
                <div className="row">
                  <p className=" col-6 text-dark d-flex justify-content-left">
                    Tax
                  </p>
                  <p className="col-6  d-flex justify-content-end">$14.96</p>
                </div>
                <hr />
                <div className="row">
                  <p className=" col-6  fs-5 fw-bold text-dark d-flex justify-content-left">
                    Total
                  </p>
                  <p className="col-6 fs-4 d-flex justify-content-end fw-bold text-dark">$78.76</p>
                </div>
              </div>
            </div>

            <div>
           <div>
           <a href="#" className="btn btn-primary form-control">
              Proceed to checkout
            </a>
           </div>
           <div>
           <a href="#" className="btn btn-light form-control bg-light">
              Continue Shoping
            </a>
           </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Delivery;
