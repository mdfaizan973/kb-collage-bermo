import styled from "styled-components";
export default function Principal() {
  return (
    <DIV>
      <div className="container_main">
        <div className="content">
          <div className="heading">
            <h1>Principal&apos;s Message</h1>
          </div>
          <div className="text_container">
            <p className="paragraph">
              A college is not just a place for imparting education; it is a
              vibrant and diverse community that thrives on the enthusiasm and
              dedication of its members. Together, we create an environment
              where intellectual curiosity, creativity, and critical thinking
              are fostered.
            </p>
            <div className="names">
              <p className="name_pri">Dr. K. P. Sinha</p>
              <p>Principal (K.B. College, Bermo)</p>
            </div>
          </div>
        </div>
        <div className="image">
          <img
            className="image_princ"
            src="https://kbcollegebermo.ac.in/images/principal.jpg"
          />
        </div>
      </div>
    </DIV>
  );
}
const DIV = styled.div`
  .container_main {
    width: 80%;
    height: 50vh;
    margin: 15px auto;
    display: flex;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
  .content,
  .image {
    height: 100%;
    width: 50%;
  }
  .image {
    display: flex;
    justify-content: end;
  }
  .image .image_princ {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 20px;
  }
  .content {
    border-radius: 20px;
    overflow: hidden;
    /* border: 1px solid rgba(99, 99, 99, 0.2); */
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
  .content .heading {
    padding: 10px;
    background-color: #ff7900;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    color: white;
    align-items: center;
  }
  .text_container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 8px;
    height: 70%;
  }

  .paragraph {
    font-size: 20px;
    position: relative;
    margin-top: 3rem;
    /* align-items: center; */
  }

  .names {
    align-items: end;
    margin-top: auto; /* This ensures the names container stays at the bottom */
  }

  .name_pri {
    font-weight: bold;
  }
  @media screen and (min-width: 100px) and (max-width: 450px) {
    .container_main {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 90%;
    }
    .content,
    .image {
      width: 100%;
    }
    .image .image_princ {
      width: 100%;
    }
    .content .heading h1 {
      font-size: 20px;
    }
    .names {
      margin-top: 10px;
    }
    .text_container .paragraph {
      font-size: 16px;
      position: relative;
      margin-top: 1rem;
    }
  }
  @media screen and (min-width: 451px) and (max-width: 1150px) {
    .container_main {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 90%;
    }
    .content,
    .image {
      width: 100%;
    }
    .image .image_princ {
      width: 100%;
    }
    .content .heading h1 {
      font-size: 20px;
    }
    .names {
      margin-top: 10px;
    }
    .text_container .paragraph {
      font-size: 16px;
      position: relative;
      margin-top: 1rem;
    }
  }
`;
