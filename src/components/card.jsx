import React from "react";
import commentIcon from "../assets/comment.png";
import justifyIcon from "../assets/justify.png";

const containerStyle = {
  minWidth: "90%",
  boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px",
  display: "flex",
  flexDirection: "column",
  padding: "10px",
  backgroundColor: "#ffffff",
  borderRadius: "10px",
  margin: "8px 0",
};

const themeStyle = {
  padding: "0.3rem",
  width: "13%",
  borderRadius: "30px",
};

const bottomStyle = {
  display: "flex",
  height: "1.2rem",
  alignItems: "center",
  gap: "5px",
};

const Card = ({ project }) => {
    const randomRed = Math.floor(Math.random() * 256);
    const randomGreen = Math.floor(Math.random() * 256);
    const randomBlue = Math.floor(Math.random() * 256);
    const randomAlpha = Math.random() * (0.9 - 0.3) + 0.3;

    const randomRGBA = `rgba(${randomRed},${randomGreen},${randomBlue},${randomAlpha})`;
   
    const drag = (e,project)=>{
        console.log(e)
      e.dataTransfer.setData("card",project)
    }
  return (
    <div style={containerStyle} draggable="true" onDragStart = {(e)=>drag(e,project)} id={project}>
      <div style={{ ...themeStyle, backgroundColor:randomRGBA }}></div>
      <h3 style={{ margin: "10px 0", color: "rgba(0,0,0,0.7)" }}>
        {project.name}
      </h3>
      <div style={bottomStyle}>
        <img
          src={justifyIcon}
          alt={"moreIcon"}
          width={"12px"}
          height={"12px"}
        />
        {project.comment > 0 && (
          <>
            <img
              src={commentIcon}
              alt={"moreIcon"}
              width={"15px"}
              height={"15px"}
              style={{ marginLeft: "0.5rem" }}
            />
            <h5 style={{ color: "rgba(2,2,2,0.5)" }}>{project.comment}</h5>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
