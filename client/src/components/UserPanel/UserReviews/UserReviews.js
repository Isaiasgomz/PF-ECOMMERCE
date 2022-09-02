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

  if (loading === true) {
    setTimeout(() => {
      setLoading(false);
    }, 1000);

    return (
      <div className={style.contenedorLoading}>
        <div className={style.loading}>
          <img className={style.img} src={loadingLogo} />
        </div>
      </div>
    );
  } else if (loading === false) {
    return (

      <div className={style.reviewConteiner}>
        
        
          <div className={style.container}>
          <div className={style.containerTitle}>
            <h2>Mis opiniones</h2>
          </div>
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
        
      </div>

    );
  }
}

export default UserReviews;
