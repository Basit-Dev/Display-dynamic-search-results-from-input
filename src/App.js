import "./styles.css";
import React from "react";
// import MapData from "./MapData";

// What are the inputs
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
    // What values need to change or update
    this.state = {
      userData: dataArray,
      userInputValue: ""
    };
  }
  // componentDidMount() {
  //   const result = dataArray.map((data) => data);
  //   this.setState({ userData: result });
  // }

  // Pass the new userInput userInputValue to state
  userInput = (e) => {
    this.setState({ userInputValue: e.target.value });
  };

  // Get the updated userInputValue from state and filter the results
  // dynamicSearch = () => {
  //   return this.state.userData.filter((names) =>
  //     names.toLowerCase().includes(this.state.userInputValue.toLowerCase())
  //   );
  // };

  render() {
    const { userData, userInputValue } = this.state;
    const filtered = userData.filter((words) => {
      return words.toLowerCase().includes(userInputValue.toLowerCase());
    });
    return (
      <>
        <label>Search</label>
        {/* Get that userInputValue */}
        <input onChange={this.userInput} placeholder="Search" />
        {/* dynamicSearch gets called everytime setState re-renders the DOM*/}
        {filtered.map((data, idx) => {
          return (
            <div key={idx}>
              <h1>{data}</h1>
            </div>
          );
        })}
        {/* <MapData userData={this.dynamicSearch()} /> */}
        <h2>User Input Value: {this.state.userInputValue}</h2>
      </>
    );
  }
}

export default App;
// Whats the problem - Dynamically filter a list of names based on the user input values letter by letter
// What are the inputs - array and userInput value
// What values need to change or update - array, userInput value and update array list in the DOM

// Get the userInput value when there is a change in the input field
// Pass that new userInput value to state

// Get that updated userInput value from state and filter over the array and check if the array includes the userInput value
// Make sure both the array names and userInput values are based on lowercase

// In the render method call the dynamicSearch function to map over the array
// This will then trigger setState everytime the userInput value is updated
// Which will re-render the DOM and display the filtered results ON EACH KEY STROKE
