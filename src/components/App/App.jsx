import { useState } from "react";
import Statistics from "components/Statistics/Statistics";
import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";
import Section from "components/Section/Section";
import Notification from "components/Notification/Notification";

const App = () => {

    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    
      const handleLeaveFeedback = (option) => {
        switch (option) {
          case "good":
            setGood(good + 1);
            break;
          case "neutral":
            setNeutral(neutral + 1);
            break;
          case "bad":
            setBad(bad + 1);
            break;
          default:
            console.log(`Unsupported option: ${option}`);
            break;
        }
      };

    const countTotalFeedback = () => {
      return good + neutral + bad;
    }
      
    const countPositiveFeedbackPercentage = () => {
      const totalFeedback = countTotalFeedback();
      return Math.round((good / totalFeedback) * 100);
    }
  
    const options = Object.keys({ good, neutral, bad })

      return (
        <>
        <Section title='Please leave feedback'>
         <FeedbackOptions 
           options={options}
           onLeaveFeedback={handleLeaveFeedback}
         />
        </Section>
        {countTotalFeedback() > 0 ? (
        <Section title="Statistics">
         <Statistics
           good={good}
           neutral={neutral}
           bad={bad}
           total={countTotalFeedback()}
           positiveFeedback={countPositiveFeedbackPercentage()} 
           />
         </Section>
         ) : ( 
         <Notification message="There is no feedback"/>
        )}
        </>
      );
    }
    
    

 export default App;