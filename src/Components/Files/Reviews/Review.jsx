import React from 'react'
import "./Review.css"
import man from "./man.png"
import woman from "./woman.png"
export default function Review(props) {
  const {id} =props;
  return (
    <>
    <div className= "review_div" id = {id} >
      <h1 className="align main_heading_review  "> Reviews</h1>
      <div className="review_div2">
        <div className="review_card">
          <img className="review_class_image" src={man} alt="" />
          <div className="align">
            <div className="name">
              Kunal Aggarwal
            </div>
            <div style={{"margin-top" : "12px"}} className="align2">
            <div><i class="fa-solid fa-star"></i></div>
            <div><i class="fa-solid fa-star"></i></div>
            <div><i class="fa-solid fa-star"></i></div>
            <div><i class="fa-solid fa-star"></i></div>
            <div><i class="fa-solid fa-star"></i></div>
            </div>
            <div className="review">
              Every time the experience has been outstanding.I just send them the picture of any cake and they just replicate it in real life.There service is extremely good and price is also very competitive.And when we talk about the taste it is extremely delicious.5/5 from my side .
            </div>
          </div>
        </div>

        <div className="review_card">
          <img className="review_class_image" src={woman} alt="" />
          <div className="align">
            <div className="name">
              Heena Maroria
            </div>
            <div style={{"margin-top" : "12px"}} className="align2">
            <div><i class="fa-solid fa-star"></i></div>
            <div><i class="fa-solid fa-star"></i></div>
            <div><i class="fa-solid fa-star"></i></div>
            <div><i class="fa-solid fa-star"></i></div>
            <div><i class="fa-solid fa-star"></i></div>
            </div>
            <div className="review">
              It was amazing, outstanding & tastiest cake 🎂🎂
              Guests gives me so much appreciation about cake design, look & taste 👍🏻👍🏻👍🏻👍🏻
              Keep it up Hashtag Bakery 👍🏻👍🏻👍🏻
              Thanks for making my Daughter's Birthday Cake so beautiful and 😋 tasty 👍🏻👍🏻👍🏻👍🏻💐💐💐
            </div>
          </div>
        </div>

        <div className="review_card">
          <img className="review_class_image" src={man} alt="" />
          <div className="align">
            <div className="name">
            Saurabh Rawat
            </div>
            <div style={{"margin-top" : "12px"}} className="align2">
            <div><i class="fa-solid fa-star"></i></div>
            <div><i class="fa-solid fa-star"></i></div>
            <div><i class="fa-solid fa-star"></i></div>
            <div><i class="fa-solid fa-star"></i></div>
            <div><i class="fa-solid fa-star"></i></div>
            </div>
            <div className="review">
              I order cake from hashtag bakery each time. The cakes are very tasteful and delicious. I recommend everyone to try their cake and you will be a fan.
              Thank you Hastag Bakery - Noida 🙏
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
