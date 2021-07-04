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
  "Mark"
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

  getValue = (e) => {
    this.setState(() => {
      return {
        value: e.target.value
      };
    });
    this.filter(e);
  };
  filter = (e) => {
    this.setState(() => {
      return {
        userData: this.state.userData.filter((words) => {
          return words.toLowerCase().includes(e.target.value);
        })
      };
    });
  };
  render() {
    return (
      <>
        <label>Search</label>
        <input
          onChange={(e) => {
            this.getValue(e);
          }}
          placeholder="Search"
        />
        {/* <MapData userData={this.state.userData} /> */}
        {this.state.userData.map((data, idx) => {
          return (
            <div key={idx}>
              <h1>{data}</h1>
            </div>
          );
        })}
        ;<h2>Value: {this.state.value}</h2>
      </>
    );
  }
}

export default App;
