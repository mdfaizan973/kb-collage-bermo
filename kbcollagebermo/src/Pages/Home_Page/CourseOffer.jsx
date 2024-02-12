import styled from "styled-components";
export default function CourseOffer() {
  const Courses = [
    {
      img: "https://kbcollegebermo.ac.in/images/bca.png",
      name: "BCA",
      full_form: "(Bachelor of Computer Application)",
    },
    {
      img: "https://kbcollegebermo.ac.in/images/bba.png",
      name: "BBA",
      full_form: "(Bachelor of Business Administration)",
    },
    {
      img: "https://kbcollegebermo.ac.in/images/history.png",
      name: "B.A.",
      full_form: "(Bachelor of Arts)",
    },
    {
      img: "https://kbcollegebermo.ac.in/images/bcom.png",
      name: "B.Comm",
      full_form: "(Bachelor of Commerce)",
    },
    {
      img: "https://kbcollegebermo.ac.in/images/science.png",
      name: "B.Sc",
      full_form: "(Bachelor of Science)",
    },
  ];
  return (
    <DIV>
      <div className="heading">
        <h1>Our Courses</h1>
      </div>
      <div className="cards-container">
        {Courses.map((ele, i) => (
          <div className="card" key={i}>
            <div className="image_contianer">
              <img src={ele.img} />
            </div>
            <h2>{ele.name}</h2>
            <p>{ele.full_form}</p>
          </div>
        ))}
      </div>
    </DIV>
  );
}
const DIV = styled.div`
  width: 90%;
  margin: auto;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  border-radius: 15px 15px 0 0;

  .cards-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
    padding: 10px;
    text-align: center;
  }

  .card {
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .card h2 {
    font-size: 22px;
    margin-bottom: 10px;
    color: #fff;
  }

  .card p {
    font-size: 18px;
    color: #fff;
  }
  .image_contianer {
    height: 80px;
    width: 30%;
    margin: auto;
    text-align: center;
  }
  .image_contianer img {
    width: 100%;
  }
  .heading {
    margin: 30px auto;
    padding: 10px 20px;
    background-color: #ff7900;
    border-radius: 15px 15px 0 0;

    color: #fff;
  }
  .card:nth-child(1) {
    background-color: #28a745;
  }
  .card:nth-child(2) {
    background-color: #17a2b8;
  }
  .card:nth-child(3) {
    background-color: #ffc107;
  }
  .card:nth-child(4) {
    background-color: #6c757d;
  }
  .card:nth-child(5) {
    background-color: #1a2844;
  }
`;
