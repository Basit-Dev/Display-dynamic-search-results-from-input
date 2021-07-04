import "./styles.css";
import React from "react";
import MapData from "./MapData";

const dataArray = [
  "John",
  "Alan",
  "Debra",
  "Andy",
  "Sophia",
  "Simon",
  "Matt",
  "Mark",
  "Simin"
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
      value: ""
    };
  }
  componentDidMount() {
    const result = dataArray.map((data) => {
      return data;
    });
    this.setState(() => {
      return {
        userData: result
      };
    });
  }

  filter = (e) => {
    this.setState({ value: e.target.value });
  };

  dynamicSearch = () => {
    return this.state.userData.filter((words) =>
      words.toLowerCase().includes(this.state.value)
    );
  };

  render() {
    return (
      <>
        <label>Search</label>
        <input onChange={this.filter} placeholder="Search" />
        {this.dynamicSearch().map((data, idx) => {
          return (
            <div key={idx}>
              <h1>{data}</h1>
            </div>
          );
        })}
        {/* <MapData userData={this.dynamicSearch()} /> */}
        <h2>Value: {this.state.value}</h2>
      </>
    );
  }
}

export default App;
