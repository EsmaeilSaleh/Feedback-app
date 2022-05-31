import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This item is from context",
      rating: 10,
    },
    {
      id: 2,
      text: "Hello, I am from  item is from context",
      rating: 8,
    },
    {
      id: 3,
      text: "This item is from context",
      rating: 9,
    },
    {
      id: 4,
      text: "This item is from context",
      rating: 10,
    },
    {
      id: 5,
      text: "This item is from context",
      rating: 7,
    },
  ]);

  const deleteFeedback = (id, rating) => {
    if (window.confirm(`Are you Sure you want to delete ${rating}?`)) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    setFeedback([newFeedback, ...feedback]);
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
