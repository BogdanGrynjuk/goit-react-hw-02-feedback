import React, { Component } from "react";
import { Section } from "components/Section/Section";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Statistics } from "components/Statistics/Statistics";
import { Notification } from "components/Notification/Notification";

import { Container } from "./App.styled"

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  leaveGoodFeedback = () => {
    this.setState(prevState => ({
      good: prevState.good + 1
    }))
  }

  leaveNeutralFeedback = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1
    }))
  }

  leaveBadFeedback = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1
    }))
  }

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage = () => {
    return Math.round(this.state.good * 100 / this.countTotalFeedback());
  }

  render() {
    
    const { good, neutral, bad } = this.state;
    let totalFeedback = this.countTotalFeedback();
    let positiveFeedbackPercentage = 0;

    if (this.countPositiveFeedbackPercentage()) {
      positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
    }                

    return (
    <Container>        
      <Section title={"Please leave feedback"}>
        <FeedbackOptions
          onLeaveGoodFeedback={this.leaveGoodFeedback}
          onLeaveNeutralFeedback={this.leaveNeutralFeedback}
          onLeaveBadFeedback={this.leaveBadFeedback}
        />
      </Section>
      <Section title={"Statistics"}>
        {totalFeedback === 0
          ? <Notification message="There is no feedback" />
          : <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              totalFeedback={totalFeedback}
              positiveFeedbackPercentage={positiveFeedbackPercentage}
            />
        }          
      </Section>
    </Container>
  );
  }
  
};
