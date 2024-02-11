import styled from "styled-components";
export default function SubNav() {
  const teacherNames = [
    { name: "K. P. Sinha" },
    { name: "Laxmi Narayan" },
    { name: "Alisha Vandana Lakra" },
    { name: "Gopal Prajapati" },
    { name: "Sajan Bharti" },
    { name: "R. P. P. Singh" },
    { name: "Nitin Chetan Tigga" },
    { name: "Arun Kumar Roy" },
    { name: "Neela Purnima Tirkey" },
    { name: "Madhura Kerketta" },
    { name: "Prabhakar Kumar" },
    { name: "Manohar Manjhi" },
    { name: "Amit Kumar Ravi" },
    { name: "Vyas Kumar" },
    { name: "Basudeo Prajapati" },
    { name: "D. P. Kushwaha" },
    { name: "Sanjay Kumar Das" },
  ];

  return (
    <div>
      <DIV>
        <div className="superstar_group">
          <div className="name_container">
            {teacherNames.map((ele, i) => (
              <p key={i}>{ele.name}</p>
            ))}
          </div>
        </div>
      </DIV>
    </div>
  );
}
const DIV = styled.div`
  color: white;
  margin-top: 5px;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  padding: 6px;
  background-color: #303f92;

  .superstar_group {
    white-space: nowrap;
    display: flex;
    overflow: hidden;
    width: 90%;
    margin: auto;
  }

  .superstar_group .name_container {
    margin-right: 20px;
    width: 100%;
    display: flex;
    animation: scrollNames 30s linear infinite;
  }
  .superstar_group .name_container p {
    margin-right: 50px;
    font-weight: 700;
  }
  @keyframes scrollNames {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;
