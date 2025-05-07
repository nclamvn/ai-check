"use client";

import { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

export default function AIDetectionForm() {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth < 640);
      const handleResize = () => setIsMobile(window.innerWidth < 640);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    setError(null);

    try {
      // Call the new API proxy route
      const response = await fetch('/api/phobert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: text }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `API request failed with status ${response.status}`);
      }

      const data = await response.json();
      setResult(data); // Assuming the API returns { score, category }

    } catch (err) {
      console.error('Error calling detection API:', err);
      setError(err.message || 'Đã xảy ra lỗi khi phân tích văn bản.');
    } finally {
      setLoading(false);
    }
  };

  // Chart data for doughnut chart
  const chartData = result ? {
    labels: [result.score >= 50 ? 'AI viết' : 'Người viết', result.score < 50 ? 'AI viết' : 'Người viết'],
    datasets: [
      {
        data: [result.score, 100 - result.score],
        backgroundColor: [
          result.score >= 50 ? 'rgba(220, 38, 38, 0.7)' : 'rgba(59, 130, 246, 0.7)', // Red for AI, Blue for Human
          result.score < 50 ? 'rgba(220, 38, 38, 0.7)' : 'rgba(59, 130, 246, 0.7)',
        ],
        borderColor: [
          result.score >= 50 ? 'rgba(220, 38, 38, 1)' : 'rgba(59, 130, 246, 1)',
          result.score < 50 ? 'rgba(220, 38, 38, 1)' : 'rgba(59, 130, 246, 1)',
        ],
        borderWidth: 1,
      },
    ],
  } : null;

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          boxWidth: 12,
          padding: 15,
          font: {
            size: isMobile ? 10 : 12
          }
        },
      },
      title: {
        display: true,
        text: 'Phân tích thành phần (Ước tính)',
        color: '#374151', // Gray-700
        font: {
          size: isMobile ? 13 : 14,
          weight: 'medium',
        },
        padding: {
          top: 5,
          bottom: 5
        }
      },
      tooltip: {
        bodyFont: {
          size: isMobile ? 10 : 12
        },
        titleFont: {
          size: isMobile ? 12 : 14
        }
      }
    },
    cutout: '70%',
  };

  return (
    <div className="card-base p-4 md:p-6">
      <h3 className="text-lg md:text-xl font-semibold mb-3 text-gray-800">Thử nghiệm công cụ phát hiện (Demo)</h3>
      <p className="mb-4 text-gray-600 text-sm md:text-base">
        Nhập văn bản tiếng Việt để xem kết quả mô phỏng phát hiện văn bản do AI tạo ra (sử dụng API proxy).
      </p>

      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-4">
          <label htmlFor="text-detect" className="block text-sm font-medium text-gray-700 mb-2">
            Nhập văn bản
          </label>
          <textarea
            id="text-detect"
            rows={isMobile ? 4 : 6}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base shadow-inner-subtle bg-gray-50"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Nhập văn bản tiếng Việt cần phát hiện..."
            required
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading || text.trim().length < 50}
          className="w-full md:w-auto bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed text-sm md:text-base button-base min-h-[44px]"
        >
          {loading ? (
             <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Đang phân tích...
            </span>
          ) : 'Phân tích văn bản'}
        </button>
      </form>

      {text.trim().length > 0 && text.trim().length < 50 && (
        <p className="mt-2 text-xs text-yellow-700">
          Vui lòng nhập ít nhất 50 ký tự để có kết quả mô phỏng tốt hơn.
        </p>
      )}
      
      {error && (
        <p className="mt-3 text-sm text-red-600">
          Lỗi: {error}
        </p>
      )}

      {result && (
        <div className="mt-4 md:mt-6 p-3 md:p-4 border border-gray-200 rounded-lg bg-gray-50 shadow-inner-subtle">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-center">
            <div>
              <h4 className="font-semibold mb-2 text-gray-800">Kết quả phát hiện:</h4>
              <div className="flex items-center mb-2">
                <div className="w-full bg-gray-200 rounded-full h-2.5 shadow-inner-subtle overflow-hidden">
                  <div
                    className={`h-2.5 rounded-full transition-all duration-500 ease-out ${
                      result.score <= 40 ? 'bg-blue-500' : // Blue for likely human
                      result.score <= 60 ? 'bg-yellow-400' : // Yellow for unsure
                      'bg-red-500' // Red for likely AI
                    }`}
                    style={{ width: `${result.score}%` }}
                  ></div>
                </div>
                <span className="ml-3 font-medium text-gray-800 text-sm md:text-base">{result.score}% AI</span>
              </div>
              <p className="font-medium text-sm md:text-base text-gray-700">
                Đánh giá: <span className={`font-semibold ${
                  result.score <= 40 ? 'text-blue-600' :
                  result.score <= 60 ? 'text-yellow-600' :
                  'text-red-600'
                }`}>{result.category}</span>
              </p>
              <p className="mt-2 text-xs text-gray-500">
                Lưu ý: Kết quả được trả về từ API proxy (mô phỏng).
              </p>
            </div>
            <div className="chart-container h-[150px] md:h-[180px]">
              {chartData && <Doughnut data={chartData} options={chartOptions} />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

