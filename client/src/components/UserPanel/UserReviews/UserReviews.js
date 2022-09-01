import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import UserPanel from "../UserPanel";
import UserReviewCard from "./UserReviewCard";
import style from "./UserReviews.module.css";
import loadingLogo from "../../../imagenes/loading.png";

function UserReviews() {
  const { userDetail } = useSelector((state) => state);
  const { AllProducts } = useSelector((state) => state);
  const [loading, setLoading] = useState(true);

  let reviews = userDetail?.Reviews;

  let productsReview = reviews?.map((e) => {
    for (let i = 0; i < AllProducts?.length; i++) {
      if (e.ProductIdProduct === AllProducts[i]?.idProduct)
        return {
          review: e.review,
          qualification: e.qualification,
          idProduct: AllProducts[i]?.idProduct,
          img: AllProducts[i]?.image,
          productName: AllProducts[i]?.productName,
        };
    }
  });

  setTimeout((loading) => {
    setLoading(false);
  }, 1500);
  if (loading) {
    return (
      <div className={style.contenedorLoading}>
        <div className={style.loading}>
          <img className={style.img} src={loadingLogo} />
        </div>
      </div>
    );
  } else {
    return (
      <React.Fragment>
        <div>
          <UserPanel />
        </div>
        <div className={style.reviewConteiner}>
          {productsReview?.length ? (
            <div>
              {productsReview?.map((e, index) => (
                <UserReviewCard
                  key={index}
                  id={e?.idProduct}
                  img={e?.img}
                  nameP={e?.productName}
                  review={e?.review}
                  qualification={e?.qualification}
                />
              ))}
            </div>
          ) : (
            <div className={style.noReview}>
              <span className={style.noTienes}>
                {" "}
                <h2> No tienes opiniones para mostrar </h2>
              </span>
              <div className={style.noCartImgConteiner}>
                <img
                  className={style.noCartImg}
                  src="https://letrasrecortadas.com/carritoVacio.png"
                />
              </div>
              <Link to="/home">
                <span className={style.veAcomprar}> Ve a comprar!</span>
              </Link>
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default UserReviews;
