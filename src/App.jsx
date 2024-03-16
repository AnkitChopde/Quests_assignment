import {
  TodoData,
  doneData,
  progressData,
  reviewData,
} from "../src/components/sectionData";
import Section from "./components/Section";
const container = {
  width: window.innerWidth - 50,
  padding: "25px",
  height: window.innerHeight - 50,
  background: "#4299E1",
  display: "flex",
  gap:"10px",
  flex: 1,
  margin: 0,
};

function App() {
  return (
    <>
      <div style={container}>
        <Section title={"To Do"} projectDetail={TodoData} />
        <Section title={"In Progress"} projectDetail={progressData} />
        <Section title={"Review"} projectDetail={reviewData} />
        <Section title={"Done"} projectDetail={doneData} />
      </div>
    </>
  );
}

export default App;
