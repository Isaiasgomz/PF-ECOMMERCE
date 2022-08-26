import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import UserPanel from "../UserPanel";
import UserReviewCard from "./UserReviewCard";
import style from "./UserReviews.module.css"

function UserReviews() {
    const { userDetail } = useSelector((state) => state);
    const { AllProducts } = useSelector(state => state);
    const dispatch = useDispatch();

    let reviews = userDetail?.Reviews

    let productsReview = reviews?.map(e => {
        for (let i = 0; i < AllProducts?.length; i++) {
            if (e.ProductIdProduct === AllProducts[i]?.idProduct)
                return {
                    review: e.review,
                    qualification: e.qualification,
                    idProduct: AllProducts[i]?.idProduct,
                    img: AllProducts[i]?.image,
                    productName: AllProducts[i]?.productName
                }
        }
    })
    console.log("coinciden;: ", productsReview);


    return (
        <React.Fragment>
            <div>
                <UserPanel />
            </div>
            <div className={style.reviewConteiner}>
                {productsReview?.length ? <div>{productsReview?.map((e, index) => (

                    <UserReviewCard
                        key={index}
                        id={e.idProduct}
                        img={e.img}
                        nameP={e.productName}
                        review={e.review}
                        qualification={e.qualification}
                    />)
                )}
                </div> : <div className={style.noReview}>
                    <span className={style.noTienes}> <h2> No tienes opiniones para mostrar </h2></span>
                    <div className={style.noCartImgConteiner}>
                        <img className={style.noCartImg} src="https://letrasrecortadas.com/carritoVacio.png" />
                    </div>
                    <Link to="/home"><span className={style.veAcomprar}> Ve a comprar!</span></Link>
                </div>
                }
                {productsReview?.map((e, index) => (

                    <UserReviewCard
                        key={index}
                        id={e.idProduct}
                        img={e.img}
                        nameP={e.productName}
                        review={e.review}
                        qualification={e.qualification}
                    />)
                )}
            </div>
        </React.Fragment>
    )
}

export default UserReviews;