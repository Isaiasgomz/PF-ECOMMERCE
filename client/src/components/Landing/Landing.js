import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../../Actions/index.js";
import "./Landing.css";


function Landing() {
  /////////////////////// declaro el dispatch

  const dispatch = useDispatch();

  /////////////////////// al montar el componente me traigo los productos

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div class="container">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="true"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://cdn.mos.cms.futurecdn.net/xyiGWw8VkpBkeEXifog8Jh.jpg"
              class="d-block"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://dlcdnrog.asus.com/rog/media/1640742394134.jpg"
              class="d-block"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://www.redsharknews.com/hubfs/ASUS_14X_Space_Edition2-jpg.jpeg"
              class="d-block"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://press.razer.com/wp-content/uploads/2019/01/Blade-15-2019-Advanced-Model-Studio-Photo-02-1-1024x683.png"
              class="d-block"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://nissei.com/media/wysiwyg/Triton_500_SE_AGW_KSP01.jpg"
              class="d-block"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://i.blogs.es/6c6cdf/acer-predator-helios-300/1366_2000.jpeg"
              class="d-block"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Landing;
