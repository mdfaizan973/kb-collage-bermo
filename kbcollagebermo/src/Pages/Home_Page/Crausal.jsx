import { useEffect, useState } from "react";
import styled from "styled-components";
export default function Crausal() {
  const images = [
    "https://kbcollegebermo.ac.in/images/slider/9.jpg",
    "https://kbcollegebermo.ac.in/images/slider/10.jpg",
    "https://kbcollegebermo.ac.in/images/slider/11.jpg",
    "https://kbcollegebermo.ac.in/images/slider/12.jpg",
    "https://kbcollegebermo.ac.in/images/slider/13.jpg",
    "https://kbcollegebermo.ac.in/images/slider/14.jpg",
    "https://kbcollegebermo.ac.in/images/slider/15.jpg",
    "https://kbcollegebermo.ac.in/images/slider/16.jpg",
    "https://kbcollegebermo.ac.in/images/slider/17.jpg",
    "https://kbcollegebermo.ac.in/images/slider/18.jpg",
    "https://kbcollegebermo.ac.in/images/slider/19.jpg",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <DIV>
      <Carausal
        className="carausal"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      >
        <div className="content">
          <div>
            <h1>Welcome to K.B. COLLEGE, BERMO</h1>
            <p>
              Welcome to K. B. College, Bermo. Get ready to embrace knowledge,
              experiences, <br /> and memories that will last a lifetime.
            </p>
            <div className="buttons">
              <button>know More</button>
              <button>Contact Us</button>
            </div>
          </div>
        </div>
      </Carausal>
    </DIV>
  );
}

const Carausal = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0.8;
  /* background-image: url("https://kbcollegebermo.ac.in/images/gallery/5d45cb04-c0f4-4386-82e1-278ee04c78b6.JPG"); */
  background-size: cover;
  background-position: center;
`;
const DIV = styled.div`
  height: 70vh;
  .content {
    color: white;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .content h1 {
    font-size: 4rem;
  }
  .content p {
    font-size: 22px;
    margin-top: 5px;
  }

  .buttons button {
    font-size: 14px;
    font-weight: 700;
    padding: 14px 28px;
    border-radius: 5px;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    font-family: "Poppins", sans-serif;
    border: none;
    margin: 20px 5px 5px 0px;
  }
  .buttons button:nth-child(1) {
    background: #fff;
  }
  .buttons button:nth-child(2) {
    background: #8c182e;
    color: #ffffff;
  }
  @media screen and (min-width: 100px) and (max-width: 450px) {
    height: 40vh;
    .content h1 {
      font-size: 2rem;
    }
    .content p {
      font-size: 1rem;
    }
  }
  @media screen and (min-width: 450px) and (max-width: 999px) {
    height: 40vh;
    .content h1 {
      font-size: 2rem;
    }
    .content p {
      font-size: 1rem;
    }
  }
`;
