import React, { Component } from "react";
import Header from "./components/Header/Header";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Body from "./components/Body/Body";
import "./App.css";
import images from "./images/images.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.clickedImages = [];
  }

  state = {
    score: 0,
    topScore: 0,
    message:"",
    imageList: images
  };

  imageClickHandler = id => {
    if (this.clickedImages.indexOf(id) === -1) {
      this.clickedImages.push(id);

      this.setState(prevState => {
        return {
          message: ""
        };
      });

      this.setState(prevState => {
        return {
          score: prevState.score + 1
        };
      });
    } else {
      this.topScoreChecker();
      console.log("You have clicked this image already");
    }
  };

  topScoreChecker = () => {
    if (this.state.score > this.state.topScore) {
      this.setState(prevState => {
        return {
          topScore: prevState.score
        };
      });

      this.setState(prevState => {
        return {
          message: "That's a New High Score"
        };
      });
    }

    this.setState(prevState => {
      return {
        score: 0
      };
    });
    this.clickedImages = [];
  };

  render() {
    return (
      <div>
        <Header
          score={this.state.score}
          topScore={this.state.topScore}
          message={this.state.message}
        />
        <Jumbotron />
        <Body
          images={this.state.imageList}
          imageClickHandler={this.imageClickHandler}
        />
      </div>
    );
  }
}

export default App;
