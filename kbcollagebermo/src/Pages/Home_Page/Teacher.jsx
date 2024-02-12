import styled from "styled-components";
export default function Teacher() {
  const teacher_Details = [{}, {}, {}, {}];
  return (
    <DIV>
      <div className="main_container">
        <div className="heading">
          <h1>Meet Our Team</h1>
          <p className="paragraph">
            Empowering Minds, Inspiring Futures: Introducing Our Stellar College
            Team!
          </p>
        </div>
        <div className="image_container">
          {teacher_Details.map((ele, i) => (
            <div className="card" key={i}>
              <img
                src="https://kbcollegebermo.ac.in/images/faculty/a42b6393-e81c-4971-9b05-c0c81c93b36b.jpg"
                alt="Faculty Image"
              />
              <h2 className="name">
                [Name Here] <br /> <span>Dept. of BCA</span>{" "}
              </h2>
            </div>
          ))}
        </div>
        <div className="more_button">
          <button>View More -</button>
        </div>
      </div>
    </DIV>
  );
}
const DIV = styled.div`
  background-color: #e6e3e377;
  .main_container {
    width: 90%;
    margin: 50px auto;
    text-align: center;
  }
  .heading {
    padding: 20px;
  }
  .heading h1 {
    font-size: 2.3rem;
  }
  .heading .paragraph {
    font-size: 1.2rem;
  }
  .image_container {
    display: flex;
    gap: 15px;
    justify-content: space-around;
    padding: 20px;
  }
  .card {
    width: 300px;
    border: 1px solid #ccc;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }

  .card img {
    width: 100%;
    height: auto;
    display: block;
  }

  .name {
    padding: 10px;
    text-align: center;
    font-size: 18px;
    color: white;
    background-color: #303f92;
  }
  .name span {
    font-size: 14px;
  }
  .more_button {
    padding: 10px;
  }
  .more_button button {
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
`;
