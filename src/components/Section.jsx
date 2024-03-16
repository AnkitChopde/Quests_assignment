import moreIcon from "../assets/more.png";
import plus from "../assets/plus.png";
import Card from "../components/card";

const section = {
  minWidth: "23%",
  height: "90%",
  backgroundColor: "rgba(256,256,256,0.8)",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  padding: "7px",
};

const sectionTop = {
  display: "flex",
  justifyContent: "space-between",
  paddingX: "100px",
  alignItems: "center",
  padding: "0 20px",
};

const Section = ({ projectDetail, title }) => {
  const allowDrop = (e) => {
    e.preventDefault();
  };

const drop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("card")
    console.log(data)
}

  return (
    <>
      <div style={section} onDrop={(e)=>drop(e)} onDragOver={(e) => allowDrop(e)}>
        <div style={sectionTop}>
          <h3 style={{ color: "rgba(3,3,3,0.7)" }}>{title}</h3>
          <img
            src={moreIcon}
            alt={"moreIcon"}
            width={"30px"}
            height={"30px"}
            style={{ opacity: "0.5" }}
          />
        </div>
        {projectDetail.length > 0 ? (
          <>
            <div
              style={{
                minHeight: "80%",
                overflowY: projectDetail.length > 5 ? "scroll" : "auto",
              }}
            >
              {projectDetail.map((todo) => (
                <Card key={todo.id} project={todo} />
              ))}
            </div>
          </>
        ) : (
          <h5>Todo Details is not found.</h5>
        )}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src={plus}
            alt={"moreIcon"}
            width={"12px"}
            height={"12px"}
            style={{ marginLeft: "1rem", color: "rgba(3,3,3,0.5)" }}
          />
          <h3 style={{ color: "rgba(3,3,3,0.5)" }}>Add a card</h3>
        </div>
      </div>
    </>
  );
};

export default Section;
