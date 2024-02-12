import styled from "styled-components";

export default function About_college() {
  return (
    <DIV>
      <div className="main_contaner">
        <div className="content">
          <div className="heading">
            <h1>About K. B. College, Bermo</h1>
          </div>
          <p>
            KRISHNA BALLAV COLLEGE, BERMO was established in the year 1964 in
            the name of Late K. B. Sahay (Ex-Chief Minister of Bihar) to cater
            the needs of the economically and socially backward, marginalized
            and un-noticed mass of Benno region of Bokaro district. It is the
            matchless, unparalleled and exemplary contribution of Late
            Bindeshwary Dubey (Ex-Chief Minister of Bihar), the leader of the
            people. The sole reason behind this outstanding effort of the
            above-mentioned stalwart was to disseminate knowledge and learning
            among the children of coal workers and the downtrodden in general.
          </p>
          <div className="buttons">
            <button>Know More -</button>
          </div>
        </div>
        <div className="image_cont">
          <img
            src="https://kbcollegebermo.ac.in/images/about-img.jpg"
            alt="Banner"
          />
        </div>
      </div>
    </DIV>
  );
}
const DIV = styled.div`
  width: 90%;
  margin: auto;
  .main_contaner {
    display: flex;
    justify-content: space-between;
  }
  .content {
    width: 49%;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    align-items: center;
    margin: 5px 0;
    border-radius: 15px;
  }
  .content .heading {
    padding: 10px;
    background-color: #ff7900;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    color: white;
    align-items: center;
    border-radius: 15px 15px 0 0;
  }
  .content p {
    padding: 15px;
    font-size: 20px;
    margin-top: 20px;
  }
  .image_cont {
    width: 49%;
    border-radius: 15px;
    overflow: hidden;
  }
  .image_cont img {
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }
  .buttons {
    padding: 15px;
  }
  button {
    padding: 10px 20px;
    background-color: #a34658;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
    font-weight: bold;
  }
  @media screen and (min-width: 100px) and (max-width: 450px) {
    .main_contaner {
      display: flex;
      flex-direction: column;
    }
    .content {
      width: 100%;
    }
    .image_cont {
      width: 100%;
    }
    .content p {
      padding: 10px;
      font-size: 0.7rem;
    }
    button {
      padding: 7px 16px;
      cursor: pointer;
      font-size: 12px;
    }
  }
  @media screen and (min-width: 451px) and (max-width: 1050px) {
    .main_contaner {
      display: flex;
      flex-direction: column;
    }
    .content {
      width: 100%;
    }
    .image_cont {
      width: 100%;
    }
    .content p {
      padding: 10px;
      font-size: 0.9rem;
    }
  }
`;
