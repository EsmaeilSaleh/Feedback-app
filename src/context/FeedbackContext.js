import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
name: 'Esmaeil',
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

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  // Update feedback item
  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };

  // Delete feedback
  const deleteFeedback = (id, rating) => {
    if (window.confirm(`Are you Sure you want to delete ${rating}?`)) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // Add feedback
  const addFeedback = (newFeedback) => {
    setFeedback([newFeedback, ...feedback]);
  };

  // Set Item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedbackEdit,
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
