import React, { useState } from "react";
import "./Cart.css";
import { AiFillHeart } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import { TfiArrowCircleDown, TfiArrowCircleUp } from "react-icons/tfi";

const Cart = () => {
  const [num, setNum] = useState(1);
  const incNumber = () => {
    setNum(num + 1);
  };
  const decNumber = () => {
    if (num > 0) {
      setNum(num - 1);
    } else {
      alert("Sorry, Zero Limit Reached")(setNum(0));
    }
  };
  return (
    <>
      <h1 className=" main-div d-flex justify-content-left mx-5">Cart</h1>

      <hr />
      <div className="row">
        <div className="col-3">
          <img
            className="Image"
            src="https://cdn.pixabay.com/photo/2016/12/06/09/31/blank-1886008__340.png"
          ></img>
        </div>

        <div className="col-6 ">
          <p className="d-flex justify-content-left fs-5 fw-bold text-muted">
            Relaxed Fit T-shirt
          </p>
          <p className=" m-1 d-flex justify-content-left fs-6 text-muted">
            {" "}
            $ 12.99 <span className=" fw-bold text-success mx-2">In Stock</span>
          </p>

          <div className=" selector row">
            <div className="size col-4">
              <div>
                {" "}
                <h5 className="mt-1">XL</h5>
              </div>
              <div className="up_down_icon">
                <TfiArrowCircleUp />
                <TfiArrowCircleDown />
              </div>
            </div>
            <div className="size col-4">
              <div>
                {" "}
                <h5 className="mt-1">Blue</h5>
              </div>
              <div className="up_down_icon">
                <TfiArrowCircleUp />
                <TfiArrowCircleDown />
              </div>
            </div>
            <div className="size col-4 btn-group" role="group">
              <button
                type="button"
                class="btn btn-light d-flex justify-content-left"
                onClick={decNumber}
              >
                -
              </button>
              <button type="button" class="btn btn-light">
                {num}
              </button>
              <button type="button" class="btn btn-light" onClick={incNumber}>
                +
              </button>
            </div>
          </div>
        </div>

        <div className="col-3 ">
          <p className="text-muted  fw-bold">$12.99</p>
          <div className="d-flex justify-content-center ">
            <p className="m-1 text-muted">
              <AiFillHeart />
              Save
            </p>
            <p className="m-1 text-muted">
              {" "}
              <MdDeleteOutline />
              Delete
            </p>
          </div>
        </div>
      </div>
      <div className="row item">
        <div className="col-3">
          <img
            className="image1"
            src="https://m.media-amazon.com/images/I/61RimBz8dOL._UX679_.jpg"
          ></img>
        </div>

        <div className="col-6">
          <p className="d-flex justify-content-lef fs-5 fw-bold text-muted">
            Nylon Sports Cap
          </p>
          <p className=" m-2 d-flex justify-content-left  text-muted">
            {" "}
            $ 14.99 <span className="mx-2">Avaliable in 2 days </span>
          </p>
          <div className="size col-4 btn-group" role="group">
              <button
                type="button"
                class="btn btn-light d-flex justify-content-left"
                onClick={decNumber}
              >
                -
              </button>
              <button type="button" class="btn btn-light">
                {num}
              </button>
              <button type="button" class="btn btn-light" onClick={incNumber}>
                +
              </button>
            </div>

        </div>

        <div className="col-3 ">
          <p className="text-muted  fw-bold">$14.99</p>
          <div className="d-flex justify-content-center ">
            <p className="m-1 text-muted">
              <AiFillHeart />
              Save
            </p>
            <p className="m-1 text-muted">
              {" "}
              <MdDeleteOutline />
              Delete
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <img
            className="Image3"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOq8jHLv5T_iazRU2jqfu-ES_OuS4mRQF2p86BdGwH&s"
          ></img>
        </div>

        <div className="col-6 ">
          <p className="d-flex justify-content-left fs-5 fw-bold text-muted">
            Snakers
          </p>
          <p className=" m-1 d-flex text-muted justify-content-left">
            {" "}
            $ 34.99{" "}
            <span className="mx-2 fw-bold text-danger">Out of Stock</span>
          </p>
          <div className=" selector row">
            <div className="size col-4">
              <div>
                {" "}
                <h5 className="mt-1">UK 9</h5>
              </div>
              <div className="up_down_icon">
                <TfiArrowCircleUp />
                <TfiArrowCircleDown />
              </div>
            </div>
            <div className="size col-4 btn-group" role="group">
              <button
                type="button"
                class="btn btn-light d-flex justify-content-left"
                onClick={decNumber}
              >
                -
              </button>
              <button type="button" class="btn btn-light">
                {num}
              </button>
              <button type="button" class="btn btn-light" onClick={incNumber}>
                +
              </button>
            </div>
          </div>
        </div>

        <div className="col-3 ">
          <p className="text-muted  fw-bold">$34.99</p>
          <div className="d-flex justify-content-center ">
            <p className="m-1 text-muted">
              <AiFillHeart />
              Save
            </p>
            <p className="m-1 text-muted">
              {" "}
              <MdDeleteOutline />
              Delete
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <img
            className="image4"
            src="data:image/jpeg;base64,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"
          ></img>
        </div>

        <div className="col-6 ">
          <p className="d-flex justify-content-left fs-5 fw-bold text-muted">
            Slim Fit Suit Vest
          </p>
          <p className=" m-1 text-muted fs-6  d-flex justify-content-left">
            {" "}
            $ 17.99 <span className=" fw-bold mx-2 text-success">In Stock</span>
          </p>

          <div className=" selector row">
            <div className="size col-4">
              <div>
                {" "}
                <h5 className="mt-1">XL</h5>
              </div>
              <div className="up_down_icon">
                <TfiArrowCircleUp />
                <TfiArrowCircleDown />
              </div>
            </div>
            <div className="size col-4">
              <div>
                {" "}
                <h5 className="mt-1">Yellow</h5>
              </div>
              <div className="up_down_icon">
                <TfiArrowCircleUp />
                <TfiArrowCircleDown />
              </div>
            </div>
            <div className="size col-4 btn-group" role="group">
              <button
                type="button"
                class="btn btn-light d-flex justify-content-left"
                onClick={decNumber}
              >
                -
              </button>
              <button type="button" class="btn btn-light">
                {num}
              </button>
              <button type="button" class="btn btn-light" onClick={incNumber}>
                +
              </button>
            </div>
          </div>

        </div>

        <div className="col-3 ">
          <p className="text-muted  fw-bold">$17.99</p>
          <div className="d-flex justify-content-center ">
            <p className="m-1 text-muted">
              <AiFillHeart />
              Save
            </p>
            <p className="m-1 text-muted">
              {" "}
              <MdDeleteOutline />
              Delete
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
