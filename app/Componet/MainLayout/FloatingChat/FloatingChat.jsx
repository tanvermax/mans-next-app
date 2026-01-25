"use client";

import { useState, useEffect } from "react";
import { FaComment, FaFacebookMessenger, FaWhatsapp, FaTimes, FaChevronDown } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";

const FloatingChat = () => {
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Component appears with a slight delay for a nicer entrance
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed z-50 bottom-6 right-6 flex flex-col items-end space-y-3">
      {/* Chat options with smooth animation */}
      <div className={`flex flex-col space-y-3 transition-all duration-500 ease-in-out ${open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5 pointer-events-none'}`}>
        <div className="flex flex-col items-end">
          <div className="bg-white rounded-lg shadow-lg p-2 mb-2 text-sm text-gray-700 font-medium">
            How can we help you?
          </div>
          <button
            className="bg-green-500 p-4 rounded-full text-white shadow-lg flex items-center justify-center transform transition-all hover:scale-110 hover:shadow-xl"
            onClick={() => window.open("https://wa.me/+8801787108216", "_blank")}
            aria-label="Chat on WhatsApp"
          >
            <FaWhatsapp size={20} />
            <span className="ml-2 text-sm font-medium">WhatsApp</span>
          </button>
        </div>
        
        <div className="flex flex-col items-end">
          <div className="bg-white rounded-lg shadow-lg p-2 mb-2 text-sm text-gray-700 font-medium">
            Message us on Facebook
          </div>
          <button
            className="bg-blue-500 p-4 rounded-full text-white shadow-lg flex items-center justify-center transform transition-all hover:scale-110 hover:shadow-xl"
            onClick={() => window.open("https://m.me/your-facebook-id", "_blank")}
            aria-label="Chat on Messenger"
          >
            <FaFacebookMessenger size={20} />
            <span className="ml-2 text-sm font-medium">Messenger</span>
          </button>
        </div>
        
        <div className="flex flex-col items-end">
          <div className="bg-white rounded-lg shadow-lg p-2 mb-2 text-sm text-gray-700 font-medium">
            Need assistance?
          </div>
          <button
            className="bg-purple-600 p-4 rounded-full text-white shadow-lg flex items-center justify-center transform transition-all hover:scale-110 hover:shadow-xl"
            onClick={() => window.open("tel:+1234567890", "_blank")}
            aria-label="Contact support"
          >
            <RiCustomerService2Fill size={20} />
            <span className="ml-2 text-sm font-medium">Support</span>
          </button>
        </div>
      </div>

      {/* Main chat button with rotation effect */}
      <button
        className={`relative bg-gradient-to-r from-[#25AAE1] to-[#3a7bd5] p-4 rounded-full text-white shadow-2xl flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:shadow-xl ${open ? 'rounded-2xl' : 'rounded-full'}`}
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close chat options" : "Open chat options"}
      >
        {open ? (
          <FaTimes size={20} className="transition-transform duration-300" />
        ) : (
          <div className="flex items-center">
            <FaComment size={20} />
            <span className="ml-2 text-sm font-medium">Chat with us</span>
          </div>
        )}
        
        {/* Notification indicator */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
        </span>
      </button>
    </div>
  );
};

export default FloatingChat;


// "use client";

// import { useState, useEffect, useRef } from "react";
// import { FaComment, FaFacebookMessenger, FaWhatsapp, FaTimes, FaPaperPlane, FaUser, FaRobot } from "react-icons/fa";

// const FloatingChat = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isMinimized, setIsMinimized] = useState(false);
//   const [messages, setMessages] = useState([
//     { id: 1, text: "Hello! How can we help you today?", sender: "bot", timestamp: new Date() }
//   ]);
//   const [inputText, setInputText] = useState("");
//   const messagesEndRef = useRef(null);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   const handleSendMessage = (e) => {
//     e.preventDefault();
//     if (inputText.trim() === "") return;

//     // Add user message
//     const newUserMessage = {
//       id: messages.length + 1,
//       text: inputText,
//       sender: "user",
//       timestamp: new Date()
//     };
    
//     setMessages([...messages, newUserMessage]);
//     setInputText("");

//     // Simulate bot response after a delay
//     setTimeout(() => {
//       const botResponses = [
//         "Thanks for your message! Our team will get back to you soon.",
//         "I'm here to help! Could you provide more details?",
//         "We appreciate your inquiry. Someone will contact you shortly.",
//         "That's a great question! Let me connect you with a specialist."
//       ];
      
//       const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      
//       const newBotMessage = {
//         id: messages.length + 2,
//         text: randomResponse,
//         sender: "bot",
//         timestamp: new Date()
//       };
      
//       setMessages(prev => [...prev, newBotMessage]);
//     }, 1000);
//   };

//   const handleChatOption = (platform) => {
//     if (platform === "whatsapp") {
//       window.open("https://wa.me/+8801787108216", "_blank");
//     } else if (platform === "messenger") {
//       window.open("https://m.me/your-facebook-id", "_blank");
//     }
//   };

//   const formatTime = (date) => {
//     return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//   };

//   return (
//     <div className="fixed z-50 bottom-6 right-6 flex flex-col items-end">
//       {/* Chat options that appear when closed */}
//       {!isOpen && (
//         <div className="flex flex-col items-center space-y-3 mb-3">
//           <button
//             className="bg-green-500 p-3 rounded-full text-white shadow-lg flex items-center justify-center transform transition-all hover:scale-110 hover:shadow-xl"
//             onClick={() => handleChatOption("whatsapp")}
//             aria-label="Chat on WhatsApp"
//           >
//             <FaWhatsapp size={20} />
//           </button>
//           <button
//             className="bg-blue-500 p-3 rounded-full text-white shadow-lg flex items-center justify-center transform transition-all hover:scale-110 hover:shadow-xl"
//             onClick={() => handleChatOption("messenger")}
//             aria-label="Chat on Messenger"
//           >
//             <FaFacebookMessenger size={20} />
//           </button>
//         </div>
//       )}

//       {/* Main chat container */}
//       {isOpen && (
//         <div className={`bg-white rounded-2xl shadow-2xl w-80 h-96 mb-3 overflow-hidden transition-all duration-300 ${isMinimized ? 'h-16' : 'h-96'}`}>
//           {/* Chat header */}
//           <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-white flex justify-between items-center">
//             <div className="flex items-center">
//               <div className="bg-white p-1 rounded-full mr-2">
//                 <FaUser className="text-blue-500 text-sm" />
//               </div>
//               <div>
//                 <h3 className="font-semibold">Customer Support</h3>
//                 <p className="text-xs opacity-80">We're here to help</p>
//               </div>
//             </div>
//             <div className="flex space-x-2">
//               <button 
//                 onClick={() => setIsMinimized(!isMinimized)}
//                 className="text-white hover:text-gray-200 transition-colors"
//               >
//                 {isMinimized ? '+' : '-'}
//               </button>
//               <button 
//                 onClick={() => setIsOpen(false)}
//                 className="text-white hover:text-gray-200 transition-colors"
//               >
//                 <FaTimes />
//               </button>
//             </div>
//           </div>

//           {!isMinimized && (
//             <>
//               {/* Chat messages */}
//               <div className="h-64 overflow-y-auto p-4 bg-gray-50">
//                 {messages.map((message) => (
//                   <div
//                     key={message.id}
//                     className={`flex mb-4 ${message.sender === "user" ? "justify-end" : "justify-start"}`}
//                   >
//                     <div className={`flex max-w-xs ${message.sender === "user" ? "flex-row-reverse" : ""}`}>
//                       <div className={`rounded-full p-2 flex items-center justify-center ${message.sender === "user" ? "bg-blue-100 ml-2" : "bg-gray-200 mr-2"}`}>
//                         {message.sender === "user" ? (
//                           <FaUser className="text-blue-500" />
//                         ) : (
//                           <FaRobot className="text-purple-500" />
//                         )}
//                       </div>
//                       <div>
//                         <div
//                           className={`rounded-2xl px-4 py-2 ${message.sender === "user"
//                             ? "bg-blue-500 text-white rounded-tr-none"
//                             : "bg-gray-200 text-gray-800 rounded-tl-none"
//                           }`}
//                         >
//                           {message.text}
//                         </div>
//                         <span className={`text-xs text-gray-500 block mt-1 ${message.sender === "user" ? "text-right" : "text-left"}`}>
//                           {formatTime(message.timestamp)}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//                 <div ref={messagesEndRef} />
//               </div>

//               {/* Chat input */}
//               <form onSubmit={handleSendMessage} className="p-3 border-t border-gray-200 flex">
//                 <input
//                   type="text"
//                   value={inputText}
//                   onChange={(e) => setInputText(e.target.value)}
//                   placeholder="Type your message..."
//                   className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//                 <button
//                   type="submit"
//                   className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-[#25A6E2] transition-colors flex items-center justify-center"
//                 >
//                   <FaPaperPlane />
//                 </button>
//               </form>
//             </>
//           )}
//         </div>
//       )}

//       {/* Main chat button */}
//       <button
//         onClick={() => {
//           setIsOpen(!isOpen);
//           setIsMinimized(false);
//         }}
//         className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-full shadow-2xl flex items-center justify-center transform transition-all hover:scale-110 hover:shadow-xl relative"
//         aria-label={isOpen ? "Close chat" : "Open chat"}
//       >
//         {isOpen ? <FaTimes size={20} /> : <FaComment size={20} />}
        
//         {/* Notification indicator */}
//         {!isOpen && (
//           <span className="absolute -top-1 -right-1 flex h-4 w-4">
//             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
//             <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
//           </span>
//         )}
//       </button>
//     </div>
//   );
// };

// export default FloatingChat;