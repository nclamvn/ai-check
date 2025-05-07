"use client";

import { useState, useEffect } from 'react';

export default function AIRewriter() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth < 640);
      const handleResize = () => setIsMobile(window.innerWidth < 640);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  // Simple simulation of text rewriting
  const simulateRewrite = (text) => {
    let rewritten = text;
    // Replace common words
    rewritten = rewritten.replace(/rất/g, 'khá');
    rewritten = rewritten.replace(/và/g, 'cũng như');
    rewritten = rewritten.replace(/là/g, 'được xem như');
    rewritten = rewritten.replace(/tuy nhiên/g, 'mặc dù vậy');
    rewritten = rewritten.replace(/do đó/g, 'vì vậy');
    
    // Add some variation
    const sentences = rewritten.split('. ');
    if (sentences.length > 1) {
      // Swap sentence order occasionally
      if (Math.random() > 0.7) {
        const temp = sentences[0];
        sentences[0] = sentences[1];
        sentences[1] = temp;
      }
      rewritten = sentences.join('. ');
    }
    
    // Add a concluding phrase sometimes
    if (Math.random() > 0.5) {
       rewritten += " Nhìn chung, có thể thấy rằng vấn đề này khá phức tạp.";
    }

    return rewritten;
  };

  const handleRewrite = (e) => {
    e.preventDefault();
    setLoading(true);
    setOutputText('');

    // Simulate API call delay
    setTimeout(() => {
      const rewrittenText = simulateRewrite(inputText);
      setOutputText(rewrittenText);
      setLoading(false);
    }, 2500); // Increased delay for simulation
  };

  return (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-200">
      <h3 className="text-lg md:text-xl font-semibold mb-4 text-gray-800">Công cụ viết lại văn bản AI (Demo)</h3>
      <p className="mb-4 text-gray-600 text-sm md:text-base">
        Nhập văn bản do AI tạo ra để thử nghiệm tính năng viết lại, giúp văn bản trở nên tự nhiên hơn và giảm khả năng bị phát hiện.
      </p>

      <form onSubmit={handleRewrite}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="inputText" className="block text-sm font-medium text-gray-700 mb-2">
              Văn bản gốc (AI)
            </label>
            <textarea
              id="inputText"
              rows={isMobile ? 5 : 8}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base shadow-inner bg-gray-50"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Dán văn bản do AI tạo ra vào đây..."
              required
            />
          </div>
          <div>
            <label htmlFor="outputText" className="block text-sm font-medium text-gray-700 mb-2">
              Văn bản đã viết lại
            </label>
            <textarea
              id="outputText"
              rows={isMobile ? 5 : 8}
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-sm md:text-base shadow-inner"
              value={outputText}
              readOnly
              placeholder="Kết quả viết lại sẽ xuất hiện ở đây..."
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading || inputText.trim().length === 0}
          className="w-full md:w-auto bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed text-sm md:text-base transition-all duration-300 shadow-sm hover:shadow-md min-h-[44px]"
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Đang viết lại...
            </span>
          ) : 'Viết lại văn bản'}
        </button>
      </form>

      {inputText.trim().length > 0 && inputText.trim().length < 100 && (
        <p className="mt-3 text-xs text-yellow-700">
          Lưu ý: Kết quả có thể tốt hơn với văn bản dài hơn (ít nhất 100 ký tự).
        </p>
      )}
    </div>
  );
}

