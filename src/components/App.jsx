import React, { useState } from 'react';
import Container from './Container';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const title = 'Please leave feedback';
  const message = 'No feedback given';

  const handleIncrement = option => {
    switch (option) {
      case 'Good':
        setGood(counter => counter + 1);
        break;

      case 'Neutral':
        setNeutral(counter => counter + 1);
        break;

      case 'Bad':
        setBad(counter => counter + 1);
        break;

      default:
        return;
    }
  };
  //function total
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  //Function to calc %
  const countPositiveFeedbackPercentage = () => {
    if (countTotalFeedback())
      return Math.round((good / countTotalFeedback()) * 100);
    return 0;
  };

  const countTotalFeedbackNumber = countTotalFeedback();

  return (
    <Container>
      <Section title={title}>
        <FeedbackOptions
          options={['Good', 'Neutral', 'Bad']}
          onLeaveFeedback={handleIncrement}
        />
        {countTotalFeedbackNumber > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message={message} />
        )}
      </Section>
    </Container>
  );
}
