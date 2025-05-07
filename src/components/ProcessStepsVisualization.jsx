"use client";

import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function ProcessStepsVisualization() {
  const [activeStep, setActiveStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Check if window is available (client-side)
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth < 640);
      
      const handleResize = () => {
        setIsMobile(window.innerWidth < 640);
      };
      
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);
  
  const steps = [
    {
      title: "Bước 1: Kiểm tra sơ bộ",
      description: "Sử dụng công cụ phát hiện để kiểm tra bài làm của học sinh và xem xét điểm số và báo cáo chi tiết.",
      details: [
        "Tải bài làm lên công cụ phát hiện văn bản AI",
        "Xem xét điểm số tổng thể (thang điểm 0-100%)",
        "Phân tích báo cáo chi tiết về các đoạn văn có khả năng do AI tạo ra",
        "Nếu điểm số >70%, chuyển sang bước 5; nếu 15-70%, tiếp tục quy trình"
      ]
    },
    {
      title: "Bước 2: Đánh giá văn phong",
      description: "Phân tích văn phong và so sánh với các bài làm trước đây của học sinh, xác định các dấu hiệu bất thường trong cách viết.",
      details: [
        "So sánh với bài làm trước đây của học sinh",
        "Tìm kiếm sự thay đổi đột ngột trong văn phong, từ vựng, cấu trúc câu",
        "Xác định các dấu hiệu của văn bản AI: quá trôi chảy, thiếu lỗi nhỏ, ít ví dụ cá nhân",
        "Đánh giá độ sâu và tính nhất quán của nội dung"
      ]
    },
    {
      title: "Bước 3: Đối chiếu nguồn",
      description: "Tìm kiếm các đoạn văn bản trên Google, so sánh với các bài tập cũ của học sinh, kiểm tra các diễn đàn và nguồn thông tin phổ biến.",
      details: [
        "Tìm kiếm các đoạn văn bản đáng ngờ trên Google",
        "Kiểm tra các nguồn thông tin phổ biến và diễn đàn học thuật",
        "So sánh với các bài tập cũ của học sinh và bạn học",
        "Sử dụng công cụ kiểm tra đạo văn truyền thống kết hợp"
      ]
    },
    {
      title: "Bước 4: Phỏng vấn nhanh",
      description: "Yêu cầu học sinh giải thích lập luận và nguồn dẫn chứng, đặt câu hỏi về quá trình viết bài, yêu cầu học sinh mở rộng hoặc phát triển ý tưởng trong bài.",
      details: [
        "Yêu cầu học sinh giải thích lập luận và nguồn dẫn chứng",
        "Đặt câu hỏi về quá trình viết bài và nghiên cứu",
        "Yêu cầu học sinh mở rộng hoặc phát triển ý tưởng trong bài",
        "Đánh giá sự hiểu biết của học sinh về nội dung bài viết"
      ]
    },
    {
      title: "Bước 5: Phân loại và xử lý",
      description: "Phân loại mức độ vi phạm dựa trên kết quả phát hiện và phỏng vấn, áp dụng biện pháp xử lý phù hợp theo chính sách của trường.",
      details: [
        "Phân loại mức độ vi phạm: nhẹ, trung bình, nghiêm trọng",
        "Áp dụng biện pháp xử lý theo chính sách của trường",
        "Cung cấp phản hồi và hướng dẫn cho học sinh",
        "Ghi lại kết quả và theo dõi trong tương lai"
      ]
    }
  ];

  // Dữ liệu cho biểu đồ hiệu quả của quy trình
  const effectivenessData = {
    labels: ['Bước 1', 'Bước 2', 'Bước 3', 'Bước 4', 'Bước 5'],
    datasets: [
      {
        label: 'Tỷ lệ phát hiện chính xác',
        data: [65, 75, 82, 90, 95],
        borderColor: 'rgba(53, 162, 235, 1)',
        backgroundColor: 'rgba(53, 162, 235, 0.2)',
        tension: 0.3,
      },
      {
        label: 'Tỷ lệ cảnh báo sai',
        data: [15, 12, 8, 5, 2],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        tension: 0.3,
      }
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          boxWidth: 12,
          padding: 10,
          font: {
            size: isMobile ? 10 : 12
          }
        },
      },
      title: {
        display: true,
        text: 'Hiệu quả của quy trình 5 bước',
        color: '#000000',
        font: {
          size: isMobile ? 14 : 16,
          weight: 'bold',
        },
        padding: {
          top: 10,
          bottom: 10
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
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        title: {
          display: true,
          text: 'Tỷ lệ (%)',
          color: '#000000',
          font: {
            size: isMobile ? 10 : 12
          }
        },
        ticks: {
          color: '#000000',
          font: {
            size: isMobile ? 10 : 12
          },
          stepSize: isMobile ? 20 : 10
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
      x: {
        ticks: {
          color: '#000000',
          font: {
            size: isMobile ? 10 : 12
          }
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
    },
  };
  
  return (
    <div className="bg-white p-3 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
      <h3 className="text-base md:text-xl font-semibold mb-3 md:mb-4">Quy trình 5 bước phát hiện văn bản AI</h3>
      
      <div className="chart-container mb-4 md:mb-8 shadow-subtle p-3 md:p-4 rounded-lg" style={{ height: isMobile ? '250px' : '400px' }}>
        <Line data={effectivenessData} options={chartOptions} />
      </div>
      
      {/* Mobile step selector */}
      <div className="block md:hidden mb-4">
        <label htmlFor="step-select" className="block text-sm font-medium text-gray-700 mb-2">
          Chọn bước:
        </label>
        <select
          id="step-select"
          value={activeStep}
          onChange={(e) => setActiveStep(parseInt(e.target.value))}
          className="w-full px-3 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-base shadow-inner-subtle min-h-[50px]"
        >
          {steps.map((step, index) => (
            <option key={index} value={index}>{step.title}</option>
          ))}
        </select>
      </div>
      
      {/* Desktop step visualization */}
      <div className="hidden md:block mb-6">
        <div className="flex items-center justify-between mb-4 relative">
          {/* Background line */}
          <div className="absolute top-5 left-0 w-full h-0.5 bg-gray-200"></div>
          
          {steps.map((step, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`relative flex flex-col items-center ${
                index <= activeStep ? 'text-primary' : 'text-gray-400'
              } transition-all duration-300 hover:scale-105`}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 z-10 ${
                index <= activeStep ? 'border-primary bg-primary/10 shadow-md' : 'border-gray-300'
              } transition-all duration-300`}>
                {index + 1}
              </div>
              <div className="text-xs mt-2 text-center w-20">{step.title.split(":")[1]}</div>
              
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className={`absolute top-5 left-10 w-full h-0.5 ${
                  index < activeStep ? 'bg-primary' : 'bg-gray-300'
                } transition-all duration-500`}></div>
              )}
            </button>
          ))}
        </div>
      </div>
      
      <div className="bg-gray-50 p-3 md:p-4 rounded-md mb-4 shadow-subtle hover:shadow-md transition-all duration-300">
        <h4 className="font-semibold text-base md:text-lg mb-2">{steps[activeStep].title}</h4>
        <p className="mb-3 md:mb-4 text-xs md:text-base">{steps[activeStep].description}</p>
        
        <h5 className="font-medium mb-2 text-sm md:text-base">Chi tiết thực hiện:</h5>
        <ul className="list-disc pl-5 text-xs md:text-base">
          {steps[activeStep].details.map((detail, index) => (
            <li key={index} className="mb-1 transition-all duration-300 hover:translate-x-1">{detail}</li>
          ))}
        </ul>
      </div>
      
      <div className="flex justify-between">
        <button
          onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
          disabled={activeStep === 0}
          className="px-4 py-3 border border-gray-300 rounded-md disabled:opacity-50 text-sm md:text-base min-w-[100px] min-h-[50px] hover:bg-gray-100 transition-all duration-300 shadow-sm hover:shadow-md disabled:shadow-none"
          aria-label="Bước trước"
        >
          Bước trước
        </button>
        
        <button
          onClick={() => setActiveStep(prev => Math.min(steps.length - 1, prev + 1))}
          disabled={activeStep === steps.length - 1}
          className="px-4 py-3 bg-primary text-white rounded-md disabled:opacity-50 text-sm md:text-base min-w-[100px] min-h-[50px] hover:bg-primary/90 transition-all duration-300 shadow-sm hover:shadow-md disabled:shadow-none"
          aria-label="Bước tiếp theo"
        >
          Bước tiếp theo
        </button>
      </div>
    </div>
  );
}
