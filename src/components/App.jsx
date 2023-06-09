import {useState} from "react";
import { GlobalStyle } from "./GlobalStyles";
import { Layout } from "./Layout/Layout";
import FeedbackOptions from './FeedbackOptions'
import Statistics from "./Statistics";
import Section from "./Section";
import Notification from "./Notification";

const options = ['good', 'neutral', 'bad'];

const App = () => {
const [good, setGood] = useState(0);
const [bad, setBad] = useState(0);
const [neutral, setNeutral] = useState(0);

const onLeaveFeedback = name =>{

  switch (name) {
      case 'good':
        setGood(prevState=> prevState + 1)
          break;
      case 'bad':
        setBad(prevState=> prevState + 1)
          break;    
          case 'neutral':
            setNeutral(prevState=> prevState + 1)
            break;

      default:
          return;
  }
};

  const countTotalFeedback =()=>{
   return good+neutral+bad;
  };

  const countPositiveFeedbackPercentage =()=>{
   return Math.round(good/countTotalFeedback() * 100)
  };

    return (
        <Layout>
          <Section title="Please leave feedback">
          <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback}/>
          </Section>

          <Section title="Statistics">
            {countTotalFeedback() > 0 ? <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()}/> : <Notification message="There is no feedback"/> }
          </Section>
        <GlobalStyle/>
        </Layout>
    );
  };

export default App; 

