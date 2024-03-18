import React, { useState } from 'react';

const questions = [
 

{
  id: 1,
  text: 'What is Neo Bank?',
  answer: 'A Neo Bank is a fully digital banking institution that operates exclusively online, offering services such as checking accounts, savings accounts, and payment solutions without physical branches. They often prioritize user-friendly interfaces, innovative features, and competitive rates.',
},
{
  id: 2,
  text: 'What types of accounts does the Neo Bank offer?',
  answer: 'There are two main types of accounts offered by Neo Banks: 1) Saving accounts, and 2) Current accounts.',
},
{
  id: 3,
  text: `What are the fees associated with using Your Bank's services?`,
  answer: 'We typically offer fee-free basic banking services, including account maintenance and transactions. However, fees may apply for certain advanced features or services such as loans, foreign transactions, or overdrafts.',
},
{
  id: 4,
  text: `What are the types of Cards of your bank offers?`,
  answer: 'We typically offer Credit and Debit Cards.',
},
{
  id: 5,
  text: `What are the types of loan your bank offers?`,
  answer: 'We typically offer Personal and Business loans.',
},
{
  id: 6,
  text: `What are the types of Cards?`,
  answer: 'We typically offer Credit and Debit Cards.',
},
{
  id: 1,
  text: 'What is Neo Bank?',
  answer: 'A Neo Bank is a fully digital banking institution that operates exclusively online, offering services such as checking accounts, savings accounts, and payment solutions without physical branches. They often prioritize user-friendly interfaces, innovative features, and competitive rates.',
},
{
  id: 2,
  text: 'What types of accounts does the Neo Bank offer?',
  answer: 'There are two main types of accounts offered by Neo Banks: 1) Saving accounts, and 2) Current accounts.',
},
{
  id: 3,
  text: `What are the fees associated with using Your Bank's services?`,
  answer: 'We typically offer fee-free basic banking services, including account maintenance and transactions. However, fees may apply for certain advanced features or services such as loans, foreign transactions, or overdrafts.',
},
{
  id: 4,
  text: `What are the types of Cards of your bank offers?`,
  answer: 'We typically offer Credit and Debit Cards.',
},
{
  id: 5,
  text: `What are the types of loan your bank offers?`,
  answer: 'We typically offer Personal and Business loans.',
},
{
  id: 6,
  text: `What are the types of Cards?`,
  answer: 'We typically offer Credit and Debit Cards.',
}, {
  id: 1,
  text: 'What is Neo Bank?',
  answer: 'A Neo Bank is a fully digital banking institution that operates exclusively online, offering services such as checking accounts, savings accounts, and payment solutions without physical branches. They often prioritize user-friendly interfaces, innovative features, and competitive rates.',
},
{
  id: 2,
  text: 'What types of accounts does the Neo Bank offer?',
  answer: 'There are two main types of accounts offered by Neo Banks: 1) Saving accounts, and 2) Current accounts.',
},
{
  id: 3,
  text: `What are the fees associated with using Your Bank's services?`,
  answer: 'We typically offer fee-free basic banking services, including account maintenance and transactions. However, fees may apply for certain advanced features or services such as loans, foreign transactions, or overdrafts.',
},
{
  id: 4,
  text: `What are the types of Cards of your bank offers?`,
  answer: 'We typically offer Credit and Debit Cards.',
},
{
  id: 5,
  text: `What are the types of loan your bank offers?`,
  answer: 'We typically offer Personal and Business loans.',
},
{
  id: 6,
  text: `What are the types of Cards?`,
  answer: 'We typically offer Credit and Debit Cards.',
},
{
  id: 1,
  text: 'What is Neo Bank?',
  answer: 'A Neo Bank is a fully digital banking institution that operates exclusively online, offering services such as checking accounts, savings accounts, and payment solutions without physical branches. They often prioritize user-friendly interfaces, innovative features, and competitive rates.',
},
{
  id: 2,
  text: 'What types of accounts does the Neo Bank offer?',
  answer: 'There are two main types of accounts offered by Neo Banks: 1) Saving accounts, and 2) Current accounts.',
},
{
  id: 3,
  text: `What are the fees associated with using Your Bank's services?`,
  answer: 'We typically offer fee-free basic banking services, including account maintenance and transactions. However, fees may apply for certain advanced features or services such as loans, foreign transactions, or overdrafts.',
},
{
  id: 4,
  text: `What are the types of Cards of your bank offers?`,
  answer: 'We typically offer Credit and Debit Cards.',
},
{
  id: 5,
  text: `What are the types of loan your bank offers?`,
  answer: 'We typically offer Personal and Business loans.',
},
{
  id: 6,
  text: `What are the types of Cards?`,
  answer: 'We typically offer Credit and Debit Cards.',
},

];

const Chatbot = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [input, setInput] = useState('');
  const [searchResults, setSearchResults] = useState(questions);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleInputChange = (event) => {
    const searchText = event.target.value.toLowerCase();
    setInput(searchText);
    if (searchText.trim() === '') {
      setSearchResults(questions);
    } else {
      setSearchResults(
        questions.filter((question) =>
          question.text.toLowerCase().includes(searchText)
        )
      );
    }
  };

  const handleQuestionClick = (question) => {
    const userMessage = { text: question.text, isBot: false };
    setChatHistory([...chatHistory, userMessage]);
    setInput('');
    setChatHistory([
      ...chatHistory,
      { question: question.text, answer: question.answer, isBot: true },
    ]);
    setSelectedQuestion(question.id);
  };

  const handleSearch = () => {
    if (input.trim() === '') return;
    const result = questions.find(
      (question) => question.text.toLowerCase() === input.toLowerCase()
    );
    if (result) {
      const userMessage = { text: input, isBot: false };
      const botMessage = { question: result.text, answer: result.answer, isBot: true };
      setChatHistory([...chatHistory, userMessage, botMessage]);
    } else {
      setChatHistory([
        ...chatHistory,
        { text: 'Thanks for your question! I am still under development and learning to answer more complex questions.', isBot: true },
      ]);
    }
    setInput('');
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-indigo-800 to-purple-800 text-base">
      <div className="w-full max-w-xl shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gray-800 py-4 px-6 border-b border-gray-900">
          <h1 className="text-xl font-bold text-white">Bank Chatbot</h1>
        </div>
        <div className="p-4" style={{ maxHeight: '300px', overflowY: 'auto', scrollbarWidth: 'thin', scrollbarColor: '#7b7b7b #1a1a1a' }}>
          {chatHistory.map((message, index) => (
            <div
              key={index}
              className={`mb-2 ${message.isBot ? 'text-left' : 'text-right'}`}
            >
              {message.question && (
                <div className="text-right mb-2 text-gray-100">{message.question}</div>
              )}
              <div className={`p-3 rounded-lg ${message.isBot ? 'bg-gray-800 text-gray-200' : 'bg-blue-500 text-white'}`}>
                {message.answer ? message.answer : message.text}
              </div>
            </div>
          ))}
        </div>
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="Ask me anything..."
            className="w-full bg-slate-800 focus:outline-none border border-gray-100 rounded-lg py-2 px-4 pr-10 text-gray-100 transition-colors duration-300"
          />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" className="text-gray-800 absolute right-2 top-1/2 transform -translate-y-1/2 transition-transform duration-300 hover:text-gray-600 cursor-pointer" width="18" height="18" onClick={handleSearch}>
            <path d="M 10 0.1875 C 4.578125 0.1875 0.1875 4.578125 0.1875 10 C 0.1875 15.421875 4.578125 19.8125 10 19.8125 C 12.289063 19.8125 14.394531 19.003906 16.0625 17.6875 L 16.9375 18.5625 C 16.570313 19.253906 16.699219 20.136719 17.28125 20.71875 L 21.875 25.34375 C 22.589844 26.058594 23.753906 26.058594 24.46875 25.34375 L 25.34375 24.46875 C 26.058594 23.753906 26.058594 22.589844 25.34375 21.875 L 20.71875 17.28125 C 20.132813 16.695313 19.253906 16.59375 18.5625 16.96875 L 17.6875 16.09375 C 19.011719 14.421875 19.8125 12.300781 19.8125 10 C 19.8125 4.578125 15.421875 0.1875 10 0.1875 Z M 10 2 C 14.417969 2 18 5.582031 18 10 C 18 14.417969 14.417969 18 10 18 C 5.582031 18 2 14.417969 2 10 C 2 5.582031 5.582031 2 10 2 Z M 4.9375 7.46875 C 4.421875 8.304688 4.125 9.289063 4.125 10.34375 C 4.125 13.371094 6.566406 15.8125 9.59375 15.8125 C 10.761719 15.8125 11.859375 15.433594 12.75 14.8125 C 12.511719 14.839844 12.246094 14.84375 12 14.84375 C 8.085938 14.84375 4.9375 11.695313 4.9375 7.78125 C 4.9375 7.675781 4.933594 7.574219 4.9375 7.46875 Z"/></svg>
        </div>
        <div className="p-4 overflow-y-auto max-h-80 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-400 rounded-lg">
          <h2 className="text-lg font-semibold text-gray-100 mb-2">Question Bank:</h2>
          <div className="grid grid-cols-2 gap-4">
            {searchResults.map((question) => (
              <div
                key={question.id}
                onClick={() => handleQuestionClick(question)}
                className={`bg-gray-800 text-slate-150 rounded-lg p-2 cursor-pointer hover:bg-gray-700 transition-colors duration-300 ${selectedQuestion === question.id ? 'border-2 border-blue-500' : ''}`}
              >
                {question.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
