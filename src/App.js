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
      userData: []
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
    this.setState((prevState) => {
      console.log("filter", this.state.userData);
      return {
        userData: prevState.userData.filter((words) => {
          return words.toLowerCase().includes(e.target.value.toLowerCase());
        })
      };
    });
  };

  onKeyDown = (e) => {
    if (e.keyCode === 8) {
      this.setState((prevState) => {
        console.log("back", prevState.userData);
        return {
          userData: dataArray.map((data) => {
            return data;
          })
        };
      });
    }
  };
  // Create a function that will display results when characters are removed

  render() {
    return (
      <>
        <label>Search</label>
        <input
          onChange={this.filter}
          onKeyDown={this.onKeyDown}
          placeholder="Search"
        />
        <MapData userData={this.state.userData} />
      </>
    );
  }
}

export default App;
