import React from "react";
import { Box } from "@material-ui/core";
import Rating from '@material-ui/lab/Rating';
import { withStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import x from "./UserReviewCard.module.css";

const StyledRating = withStyles({
  iconFilled: {
    color: '#bcf13f', 
    marginBottom: 0,
  },
  iconHover: {
    color: '#bcf13f',
  },
})(Rating);

function UserReviewCard({ id, img, nameP, review, qualification }) {

  return (
    <div className={x.review}>
      <div className={x.contrimg}>
        <img className={x.rimg} src={img} alt={nameP} />
      </div>

      <div className={x.containerreview}>
        
        <div className={x.containerrTitle}>
          <Link to={`/detail/${id}`}> <span>{nameP}</span></Link>
        </div>
        <div className={x.containerrTitle}><span>Tu opinion: </span></div>
        <div className={x.qualification}>
          <Box component="fieldset" mb={3} borderColor="transparent">
            <StyledRating name="read-only" value={qualification} readOnly />
          </Box></div>
        <div className={x.rreview}>{review}</div>
      </div>

    </div>
  )
}
export default UserReviewCard