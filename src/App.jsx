import React from "react";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Popular from "./components/Popular";
function App() {
  return (
    <div className="mx-auto max-w-[1150px] px-4 ">
      <Navbar />
      <Section />
      <Popular />
    </div>
  );
}
export default App;
