import styled from "styled-components";
export default function Crausal() {
  return (
    <DIV>
      <Carausal className="carausal">
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
  background-image: url("https://kbcollegebermo.ac.in/images/gallery/5d45cb04-c0f4-4386-82e1-278ee04c78b6.JPG");
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
    margin: 5px 5px;
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
  }
`;
