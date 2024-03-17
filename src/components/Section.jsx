import { useEffect, useState } from "react";
import moreIcon from "../assets/more.png";
import plus from "../assets/plus.png";
import Card from "../components/card";
import { TodoData } from "./sectionData";
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

const modalContainer ={position:"absolute",padding:"1rem",width:"20%",height:"35%",borderRadius:"15px",border:"0.5px solid green",zIndex:1000,backgroundColor:"#ffffff",top:"32%",left:"40%",boxSizing:"border-box"}

const modalStyles = {
  heading:{textAlign:"center",color:"rgba(14,150,147,0.6)"},
  input:{display:"block",margin:"0 auto",padding:"10px 10px",borderRadius:"15px",width:"80%",alignSelf:"center"},
  button:{cursor:"pointer",padding:"10px 40px",color:"#ffffff",margin:"30px auto 0",borderRadius:"15px",border:"none",backgroundColor:"rgba(14,150,147,0.6)",alignSelf:"center"}
}
const Section = ({ projectDetail, title }) => {
  const [projectName,setProjectName] = useState()
  const [modal,setModal]=useState(false);
  const [projectData,setProjectData] = useState(projectDetail)

  const handleAdd = () => {
    if(!projectName){
   return;
    }
      const payload = {
        id:Math.floor(Math.random()*(500-100)+100),
        name: projectName,
        comment: Math.floor(Math.random()*(30-0)+0),
      }
    const dataToAdd = [...projectData,payload];
    setProjectData(dataToAdd)
    setModal(false)
    setProjectName("")
     
  }
  useEffect(()=>{
    
    if(projectData){
     return
    }
  },[projectData])
 
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
       {
        modal && (
          <>
          <div style={modalContainer}>
              <h2 style={modalStyles.heading}>Create {title}</h2>
              <input type="text" placeholder={"Add project"} value={projectName} onChange={(e)=>setProjectName(e.target.value)} style={modalStyles.input}  />
              <div style={{textAlign:"center",display:"flex",justifyContent:"space-around"}}>
              <button style={{...modalStyles.button,backgroundColor:"#ffffff",border:"1px solid grey",color:"rgba(0,0,0,0.6)",padding:"10px 20px"}} onClick={()=>setModal(false)}>Cancel</button>
              <button disabled={!projectName} style={modalStyles.button} onClick={handleAdd}>Add</button>
              </div>
          </div>
          </>
        )
       }
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
        {projectData?.length > 0 ? (
          <>
            <div
              style={{
                minHeight: "80%",
                overflowY: projectDetail.length  > 5 ? "scroll" : "auto",
              }}
            >
              {projectData.map((todo) => (
                <Card key={todo.id} project={todo} />
              ))}
            </div>
          </>
        ) : (
          <h5>Todo Details is not found.</h5>
        )}
        <div style={{ display: "flex",cursor:"pointer", alignItems: "center", gap: "10px" }} onClick={()=>setModal(true)}>
          <img
            src={plus}
            alt={"moreIcon"}
            width={"12px"}
            height={"12px"}
            style={{ marginLeft: "1rem", color: "rgba(3,3,3,0.5)" }}
          />
          <h3 style={{ color: "rgba(3,3,3,0.5)" }}
          
          >Add a card</h3>
        </div>
      </div>
    </>
  );
};

export default Section;
