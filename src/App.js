import React, { Component } from "react";
import "./App.css";
import Button from "./components/Button";
import Question from "./components/Question";
import Points from "./components/Points";
import questions from "./questions.json";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: 0,
      points: 0,
      gameStatus: ""
    };

    this.nextQuestion = this.nextQuestion.bind(this);
    this.restartGame = this.restartGame.bind(this);
  }

  nextQuestion(answer) {
    answer === questions[this.state.current].answer
      ? this.setState({
          current: this.state.current + 1,
          points: this.state.points + 1
        })
      : this.setState({ points: this.state.points - 1 });
  }

  restartGame() {
    this.setState({ gameStatus: "restart" });
  }

  render() {
    return this.state.current !== questions.length ||
      this.state.gameStatus === "restart" ? (
      <div className="App container-fluid">
        <div className="question row">
          <Question
            key={this.state.current}
            value={questions[this.state.current]}
          />
        </div>
        <div className="row button-container">
          <Button answerValue="true" onClick={() => this.nextQuestion(true)} />
          <Button
            answerValue="false"
            onClick={() => this.nextQuestion(false)}
          />
        </div>
        <Points points={this.state.points} />
      </div>
    ) : (
      <div className="App container-fluid">
        <p className="finish">Game finished</p>
        <Points points={this.state.points} />
        <Button answerValue="restart" onClick={() => this.restartGame()} />
      </div>
    );
  }
}

export default App;
