import React from "react";


function Landing() {
  return (
    <div className="container">

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
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1120&q=80"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://cdn.mos.cms.futurecdn.net/xyiGWw8VkpBkeEXifog8Jh.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://dlcdnrog.asus.com/rog/media/1640742394134.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://www.redsharknews.com/hubfs/ASUS_14X_Space_Edition2-jpg.jpeg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://lh5.googleusercontent.com/q6AUgZxJQSQzYNAdhzyMS8BltraiBJ1yKg8KZ09wiyi3NFTh5fbsgnRaBiYnVDbmnPyzOkPH2yTtzaQ2tLtKhur-0gxIY6SekLKB9oc12n0x2uAch95HiPo2jwyH6MgKlcTKuNTV"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://lh6.googleusercontent.com/I7OoM5nqFl-O3AeONIFnoOGMxF5PWHRpnFcJ7mCQWotxV4pHD29XkxtleRqt0AIcfvNFpm9J8uGI-M8b87QokcmsEIyVY4jq0TC8koeyaHR0b9o1Hb1JocJrC3s-uNlYvtOd9k7G"
              class="d-block w-100"
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