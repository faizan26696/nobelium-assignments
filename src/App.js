// import logo from "./logo.svg";
import "./App.css";
import Personinfo1 from "./Components/Personinfo1";
import Personinfo2 from "./Components/Personinfo2";
import SubBtn from "./Components/SubBtn";

function App() {
  return (
    <div class="Form">
      {/* ---------------------------First Method----------------------- */}
      <h1>Register Here...</h1>
      <input placeholder="mobile..." />
      <br />
      <input placeholder="password..." />
      <br />
      <button>Submit</button>

      {/* ------------------------------second Method----------------- */}

      {/* <h1>Register Here...</h1>
      <Personinfo1 />
      <br />
      <Personinfo2 />
      <br />
      <SubBtn /> */}
    </div>
  );
}

export default App;
