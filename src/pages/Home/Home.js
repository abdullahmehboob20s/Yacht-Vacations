import React from "react";
import "./Home.css";
import ImageCard from "components/ImageCard/ImageCard";
import card_img_1 from "assets/images/card-img-1.png";
import card_img_2 from "assets/images/card-img-2.png";
import card_img_3 from "assets/images/card-img-3.png";
import card_img_4 from "assets/images/card-img-4.png";
import card_img_5 from "assets/images/card-img-5.png";
import card_img_6 from "assets/images/card-img-6.png";
import card_img_7 from "assets/images/card-img-7.png";
import card_img_8 from "assets/images/card-img-8.png";
import card_img_9 from "assets/images/card-img-9.png";
import card_img_10 from "assets/images/card-img-10.png";
import card_img_11 from "assets/images/card-img-11.png";
import card_img_12 from "assets/images/card-img-12.png";
import SailorCard from "components/SailorCard/SailorCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import NextTripCard from "components/NextTripCard/NextTripCard";
import { Link } from "react-router-dom";
import Footer from "layouts/Footer/Footer";
import Navbar from "layouts/Navbar/Navbar";
import Discovery from "assets/images/Discovery.png";
import Search from "assets/images/Search.png";
import sailor_img_0 from "assets/images/sailor-img-0.png";
import sailor_img_1 from "assets/images/sailor-img-1.png";
import sailor_img_2 from "assets/images/sailor-img-2.png";
import sailor_img_3 from "assets/images/sailor-img-3.png";
import sailor_img_4 from "assets/images/sailor-img-4.png";
import next_trip_card_img_1 from "assets/images/next_trip_card_img_1.png";
import next_trip_card_img_2 from "assets/images/next_trip_card_img_2.png";
import next_trip_card_img_3 from "assets/images/next_trip_card_img_3.png";

function Home() {
  const [showCards, setshowCards] = React.useState(12);
  const [hideBtn, sethideBtn] = React.useState(false);
  const imageGalleryData = [
    {
      title: "Santorini",
      image: card_img_1,
    },
    {
      title: "Corfu",
      image: card_img_4,
    },
    {
      title: "Zakynthos",
      image: card_img_7,
    },
    {
      title: "Skiathos",
      image: card_img_10,
    },

    {
      title: "Crete",
      image: card_img_2,
    },
    {
      title: "Naxos",
      image: card_img_5,
    },
    {
      title: "Rhodes",
      image: card_img_8,
    },
    {
      title: "Lefkada",
      image: card_img_11,
    },
    {
      title: "Mykonos",
      image: card_img_3,
    },

    {
      title: "Paros",
      image: card_img_6,
    },

    {
      title: "Milos",
      image: card_img_9,
    },

    {
      title: "Patmos",
      image: card_img_12,
    },
    {
      title: "Naxos",
      image: card_img_5,
    },
    {
      title: "Paros",
      image: card_img_6,
    },
    {
      title: "Zakynthos",
      image: card_img_3,
    },
    {
      title: "Santorini",
      image: card_img_1,
    },
    {
      title: "Mykonos",
      image: card_img_3,
    },
    {
      title: "Naxos",
      image: card_img_5,
    },
    {
      title: "Santorini",
      image: card_img_1,
    },
    {
      title: "Crete",
      image: card_img_2,
    },
    {
      title: "Mykonos",
      image: card_img_3,
    },
  ];
  const sailors = [
    {
      name: "Alexander Kriss",
      disc: "The Experience is amazing! I could get to my booking on time without any mistakes. Gonna book again over and over. EXCELLENT JOB",
      img: sailor_img_0,
    },
    {
      name: "Jenifer Lorans",
      disc: "The Experience is amazing! I could get to my booking on time without any mistakes. Gonna book again over and over. EXCELLENT JOB",
      img: sailor_img_1,
    },
    {
      name: "Julia Rodregez",
      disc: "The Experience is amazing! I could get to my booking on time without any mistakes. Gonna book again over and over. EXCELLENT JOB",
      img: sailor_img_2,
    },
    {
      name: "Adam Jackson",
      disc: "The Experience is amazing! I could get to my booking on time without any mistakes. Gonna book again over and over. EXCELLENT JOB",
      img: sailor_img_3,
    },
    {
      name: "Sara Conor",
      disc: "The Experience is amazing! I could get to my booking on time without any mistakes. Gonna book again over and over. EXCELLENT JOB",
      img: sailor_img_4,
    },
  ];
  const nextTrip = [
    {
      img: next_trip_card_img_1,
      title: "How to pick your best choice with ideal price for your needs",
    },
    {
      img: next_trip_card_img_2,
      title: "Schedule your lovely vacation by choosing precise date",
    },
    {
      img: next_trip_card_img_3,
      title: "Are you on hurry? get a book intraday with multiple options",
    },
  ];

  const loadMore = () => {
    if (showCards >= imageGalleryData.length) {
      sethideBtn(true);
      return;
    }
    setshowCards(showCards + 3);
  };

  return (
    <div className="home">
      <Navbar />
      <div className="hero_section">
        <div className="container-wrapper">
          <div className="hero_section_titles">
            <p className="hero_section_title">
              Book your perfect yacht vacation
            </p>
            <p className="hero_section_subtitle">
              More than 40,000 private yacht rentals and bareboat charters near
              me for your next boating trip.
            </p>
          </div>
        </div>
        {/* explore */}
        <div className="explore">
          <div className="container-wrapper">
            <p className="explore_title">
              Explore Greek Islands By choosing the below Navigation Search Bar
            </p>
          </div>
          <div className="explore_search">
            <div className="explore_search_left">
              <div className="divider">
                <div className="input_wrapper">
                  <img src={Discovery} alt="" />
                  <div className="input">
                    <input type="text" placeholder="Sailing location" />
                    <img src={Search} alt="" />
                  </div>
                </div>
              </div>

              <div className="divider">
                <select className="select" name="Intraday" id="Intraday">
                  <option value="Intraday">Intraday</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>
                <input type="date" />
                <input type="time" />
              </div>
              <div className="divider_wrapper">
                <div className="divider">
                  <select className="select" name="Guest.." id="Guest..">
                    <option value="Guest..">Guest..</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
                <div className="divider">
                  <select
                    className="select"
                    name="Boat Type.."
                    id="Boat Type.."
                  >
                    <option value="Boat Type..">Boat Type..</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="explore_search_right">
              <button className="search_btn">Search</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-wrapper">
        <div className="greek_island">
          <p className="greek_island_title">Greek Islands</p>
          <div className="greek_island_cards">
            {imageGalleryData.slice(0, showCards).map((item, index) => (
              <ImageCard title={item.title} image={item.image} />
            ))}
          </div>
          {!hideBtn ? (
            <button onClick={loadMore} className="greek_island_btn">
              Load More
            </button>
          ) : (
            ""
          )}
        </div>
      </div>

      {/* sailors */}
      <div className="sailors_wrapper">
        <div className="container-wrapper">
          <div className="sailors">
            <p className="sailors_title">
              Fellow sailors share their amazing experiences
            </p>
          </div>
        </div>
        <div className="sailors_cards">
          <Swiper
            slidesPerView={4}
            spaceBetween={10}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
            breakpoints={{
              1500: {
                slidesPerView: 5,
              },
              1370: {
                slidesPerView: 4,
              },
              1000: {
                slidesPerView: 3,
              },
              760: {
                slidesPerView: 2.5,
                spaceBetween: 120,
              },
              580: {
                slidesPerView: 2,
                spaceBetween: 120,
              },
              200: {
                slidesPerView: 1,
                spaceBetween: 70,
              },
            }}
          >
            {sailors.map((item, index) => (
              <SwiperSlide>
                <SailorCard data={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* yacht_owner */}
      <div className="yacht_owner">
        <p className="yacht_owner_title">Are you a yacht owner?</p>
        <p className="yacht_owner_subtitle">
          Estimate the chartering value of your yacht and become a captain
        </p>
        <button className="yacht_owner_button">
          Join and Become a Captain
        </button>
      </div>

      {/* discover */}
      <div className="discover">
        <p className="discover_title">Zakynthos</p>
        <p className="discover_subtitle">Greek Island</p>
        <div className="discover_btn">DISCOVER</div>
      </div>

      {/* next_trip */}
      <div className="next_trip">
        <div className="container-wrapper">
          <p className="next_trip_title">Get inspiration for your next trip</p>
          <div className="next_trip_cards">
            {nextTrip.map((item, index) => (
              <NextTripCard data={item} />
            ))}
          </div>
          <Link className="next_trip_btn">View More Blogs</Link>
        </div>
      </div>

      <div className="container-wrapper">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
