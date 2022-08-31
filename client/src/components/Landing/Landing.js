import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../../Actions/index.js";
import "./Landing.css";
import CarouselMarcas from "./CarouselMarcas/CarouselMarcas.js";
import DestacadosTech from "./DestacadosTech/DestacadosTech.js";
import { Link } from "react-router-dom";
import logo from "../../imagenes/logo.png";

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
                src="https://gameone.ph/media/wysiwyg/GameOne-Inner-Banner-Redragon.jpg"
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
                src="https://www.grupoxfone.com.br/wp-content/uploads/2020/12/apple-products.jpg"
                className="d-block"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://logitechsouthcone.com/logitechg/images/PRO_Banner1920x1094_1.jpg"
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
      <div className="contImgCompra">
        <div className="imgCompra">
          <Link to="/home">
            <img
              src="https://cdn.jsdelivr.net/gh/persano/BannersWebMaximus/top-under-header/mejores-precios-main-top.webp"
              alt=""
            />
          </Link>
        </div>
      </div>
      <DestacadosTech></DestacadosTech>
      <div className="contPcMarcas">
        <div className="imgArmaPC">
          <Link to="/build">
            <img
              src="https://cdn.jsdelivr.net/gh/persano/BannersWebMaximus/armado-pc-home/arma-tu-compu-new.webp"
              alt=""
            />
          </Link>
        </div>
        <div>
          <h2 className="titleMarcas">
            ¡Las mejores marcas las encontrás en
            <span className="spanTitle">PULL REQUEST!</span>
          </h2>
        </div>
        <CarouselMarcas></CarouselMarcas>
        <br />
        <br />
      </div>
      <div className="logoPartners">
        <img src={logo} alt="" />
        <h3 className="titlePartners">
          Somos partners certificados de las principales marcas de tecnología.
        </h3>
      </div>
    </div>
  );
}

export default Landing;
