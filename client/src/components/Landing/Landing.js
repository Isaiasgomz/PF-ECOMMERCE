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
    <div className="containerLanding">
      <div className="containerCarousel1">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="true"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
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
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="6"
              aria-label="Slide 7"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="7"
              aria-label="Slide 8"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://www.computerlounge.co.nz/Data/Media/Images/Brand/HyperX/hyperx-brand-banner.jpg"
                className="d-block"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://dobleclicknet.com/wp-content/uploads/2019/07/banner_redragon.jpg"
                className="d-block"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://dlcdnwebimgs.asus.com/gain/77614B08-0FD4-41FB-9517-ADB95C1F4546/fwebp"
                className="d-block"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://www.techlandbd.com/image/catalog/Monitor/Samsung/samsung_Monitors-min.jpg"
                className="d-block"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://webonline.macstore.mx/img/categorias-productos/accesorios/perifericos/banner_perifericos.jpg"
                className="d-block"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://newsletters.pcel.com/assets/templates/template-6109/banner-landing-logitech-28-09-21.jpg"
                className="d-block"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://cdn.shopify.com/s/files/1/0566/0989/8694/files/JBL-Headphone-Series-Category-Banner.jpg?v=1635476150"
                className="d-block"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://bangho.vteximg.com.br/arquivos/ids/159692/banner-notebook-desktop-v4.png?v=637405225029700000"
                className="d-block"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <h2 className="titleMarcas">¡Las mejores marcas están en Pull Origin!</h2>
      <div className="containerCarousel2">
        
      </div>
    </div>
  );
}

export default Landing;
