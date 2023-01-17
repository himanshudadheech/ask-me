import Name from "./Name";
import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import "./app.css";

function App() {
  // let f = localStorage.getItem("userName");
  let f = sessionStorage.getItem("userName");

  return (
    <>
      <div className="body">
        {f == null || f === "" ? (
          <Routes>
            <Route path="/" element={<Name />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/Main" element={<Main />} />
          </Routes>
        )}
      </div>
      <div id="foot">
        <p>
          Made By{" "}
          <a href="https://www.linkedin.com/in/himanshudadheech/">
            Himanshu Dadheech
          </a>
          &copy;2022-23
        </p>
      </div>
    </>
  );

  // if (f == null || f === "") {
  //   return <>{<Name />}</>;
  // } else {
  //   return (
  //     <div>
  //       <Routes>
  //         <Route path="/Main" element={<Main />} />
  //       </Routes>
  //     </div>
  //   );
}

export default App;
