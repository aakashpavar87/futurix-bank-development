import React from 'react';

// Theme colors (consider using a separate CSS file for styling)
const primaryColor = '#1976D2';
const backgroundColor = '#00FF00';

// Questions and answers with a clear structure and descriptive keys
const questions = [
  {
    id: 1, // Unique identifier for easier reference
    text: 'What is Neo Bank?',
    answer: 'A Neo Bank is a fully digital banking institution that operates exclusively online, offering services such as checking accounts, savings accounts, and payment solutions without physical branches. They often prioritize user-friendly interfaces, innovative features, and competitive rates.',
  },
  {
    id: 2,
    text: 'What types of accounts does the Neo Bank offer?',
    answer: 'There are two types of account: 1) Saving account 2) Current account',
  },
  {
    id: 3,
    text: `What are the fees associated with using the Your Bank's services?`,
    answer: 'We typically offer fee-free basic banking services, including account maintenance and transactions. However, fees may apply for certain advanced features or services such as loans, foreign transactions, or overdrafts.',
  },
  // ... other questions and answers
];

const Chatbot = () => {
  const [selectedQuestionId, setSelectedQuestionId] = React.useState(null);

  const handleOptionClick = (questionId) => {
    setSelectedQuestionId(questionId);
  };

  const getSelectedQuestion = () => {
    // Efficiently find the selected question object using its ID
    return questions.find((question) => question.id === selectedQuestionId);
  };

  return (
    <div className="flex flex-col w-full h-screen bg-gradient-to-br from-blue-100 to-sky-400">
      <div className="w-full md:w-4/5 mx-auto rounded-lg bg-slate-800 shadow-md p-4 flex flex-col">
        <h1 className="text-2xl font-bold mb-4 text-gray-300">Bank Chatbot</h1>
        <div className="flex flex-col">
          <ul className="flex flex-wrap w-full">
            {questions.map((question) => (
              <li
                key={question.id} // Use unique key for each list item
                className="bg-neutral-600 py-1 px-2 rounded-md border border-gray-100 font-medium text-left text-gray-300 hover:bg-gray-100 focus:outline-none mr-2 mb-2 flex items-center"
                onClick={() => handleOptionClick(question.id)}
              >
                {question.text}
              </li>
            ))}
          </ul>
          {selectedQuestionId && (
            <div className="ml-4 mt-4 bg-gray-400 rounded-lg p-1">
              <p className="text-base font-normal bg-gray-900 p-1 rounded">{getSelectedQuestion().answer}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
