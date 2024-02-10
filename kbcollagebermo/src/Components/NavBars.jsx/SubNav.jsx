import styled from "styled-components";
export default function SubNav() {
  const teacherNames = [
    { name: "Salman Khan" },
    { name: "Robert Downey Jr." },
    { name: "Leonardo DiCaprio" },
    { name: "Meryl Streep" },
    { name: "Tom Hanks" },
    { name: "Angelina Jolie" },
    { name: "Denzel Washington" },
    { name: "Natalie Portman" },
    { name: "Brad Pitt" },
    { name: "Viola Davis" },
    { name: "Tom Cruise" },
    { name: "Jennifer Lawrence" },
    { name: "Johnny Depp" },
    { name: "Charlize Theron" },
    { name: "Morgan Freeman" },
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
    animation: scrollNames 20s linear infinite;
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
