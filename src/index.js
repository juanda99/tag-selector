import React from "react";
import { render } from "react-dom";
import DropdownTreeSelect from "react-dropdown-tree-select";
import "./app.css";
import data from "./data.json";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => <DropdownTreeSelect data={data} className="mdl-demo" />;

render(<App />, document.getElementById("root"));
