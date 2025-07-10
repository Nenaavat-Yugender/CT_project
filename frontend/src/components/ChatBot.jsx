const ChatBot = () => {
  return (
    <div className="fixed bottom-4 right-4 w-80 h-96 bg-gray-800 rounded-lg shadow-xl overflow-hidden z-50">
      <div className="bg-blue-600 text-white p-2 font-semibold text-center">Ask FoodBot</div>
      <iframe
        title="FoodBot"
        src="/webchat.html"
        className="h-[calc(100%-2rem)] w-full"
        frameBorder="0"
      />
    </div>
  );
};

export default ChatBot;
