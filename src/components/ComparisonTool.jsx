"use client";

import { useState, useEffect } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export default function ComparisonTool() {
  const [selectedTool, setSelectedTool] = useState('all');
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
  
  const toolData = {
    turnitin: {
      name: 'Turnitin',
      accuracy: {
        claimed: '98%',
        actual: '85-86%',
        difference: '-12% đến -13%'
      },
      features: [
        'Hỗ trợ 176 ngôn ngữ cho kiểm tra đạo văn',
        'Tỷ lệ cảnh báo sai dưới 1% (cho tiếng Anh)',
        'Tích hợp với nhiều LMS',
        'Báo cáo chi tiết'
      ],
      limitations: [
        'Hiệu quả thấp với tiếng Việt',
        'Không có thông tin cụ thể về hiệu quả đối với tiếng Việt',
        'Chi phí cao',
        'Yêu cầu đăng ký tổ chức'
      ]
    },
    gptzero: {
      name: 'GPTZero',
      accuracy: {
        claimed: '99%',
        actual: '84-85%',
        difference: '-14% đến -15%'
      },
      features: [
        'Giao diện đơn giản, dễ sử dụng',
        'Có phiên bản miễn phí',
        'Đã mở rộng hỗ trợ một số ngôn ngữ',
        'Phân tích perplexity và burstiness'
      ],
      limitations: [
        'Hiệu quả thấp với tiếng Việt',
        'Giới hạn số lượng kiểm tra trong phiên bản miễn phí',
        'Thiếu các tính năng nâng cao',
        'Không tích hợp sẵn với LMS'
      ]
    },
    originality: {
      name: 'Originality.ai',
      accuracy: {
        claimed: '95%',
        actual: '86-87%',
        difference: '-8% đến -9%'
      },
      features: [
        'Hỗ trợ 15 ngôn ngữ, bao gồm tiếng Việt',
        'Tự động phát hiện ngôn ngữ',
        'API cho phép tích hợp',
        'Kết hợp kiểm tra đạo văn và phát hiện AI'
      ],
      limitations: [
        'Hiệu quả thấp với tiếng Việt so với tiếng Anh',
        'Chi phí theo số lượng kiểm tra',
        'Tỷ lệ cảnh báo sai cao hơn (~4.5%)',
        'Thiếu tính năng phân tích chi tiết cho tiếng Việt'
      ]
    },
    proposed: {
      name: 'Giải pháp đề xuất',
      accuracy: {
        claimed: 'N/A',
        actual: '90-92% (dự kiến)',
        difference: '+3% đến +5% so với PhoBERT'
      },
      features: [
        'Tối ưu hóa đặc biệt cho tiếng Việt',
        'Sử dụng mô hình PhoBERT fine-tuned',
        'Phân tích đặc trưng ngôn ngữ học tiếng Việt',
        'Phương pháp tổng hợp (ensemble)',
        'Hệ thống đánh giá đa cấp',
        'Quy trình tích hợp 5 bước',
        'Khung chính sách và hướng dẫn áp dụng'
      ],
      limitations: [
        'Đang trong giai đoạn phát triển',
        'Yêu cầu đầu tư ban đầu cao',
        'Cần dữ liệu huấn luyện chất lượng cao',
        'Cần cập nhật liên tục để theo kịp sự phát triển của AI'
      ]
    }
  };

  // Extract data for charts
  const toolNames = Object.keys(toolData).map(key => toolData[key].name);
  const claimedAccuracy = Object.keys(toolData).map(key => 
    parseFloat(toolData[key].accuracy.claimed.replace('%', '')) || 0
  );
  const actualAccuracy = Object.keys(toolData).map(key => {
    const range = toolData[key].accuracy.actual.replace('% (dự kiến)', '').replace('%', '').split('-');
    return range.length > 1 ? (parseFloat(range[0]) + parseFloat(range[1])) / 2 : parseFloat(range[0]);
  });

  // Chart data
  const barChartData = {
    labels: toolNames,
    datasets: [
      {
        label: 'Độ chính xác công bố',
        data: claimedAccuracy,
        backgroundColor: 'rgba(53, 162, 235, 0.8)',
        borderColor: 'rgba(53, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Độ chính xác thực tế (tiếng Việt)',
        data: actualAccuracy,
        backgroundColor: 'rgba(75, 192, 192, 0.8)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false, // Allow chart to adjust height
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
        text: 'So sánh độ chính xác của các công cụ',
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
          text: 'Độ chính xác (%)',
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
          },
          maxRotation: 45,
          minRotation: 45
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
    },
  };
  
  const renderToolCard = (toolKey) => {
    const tool = toolData[toolKey];
    
    return (
      <div key={toolKey} className="bg-white p-3 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 mb-4 md:mb-6">
        <h3 className="text-base md:text-xl font-semibold mb-3 md:mb-4">{tool.name}</h3>
        
        <div className="mb-3 md:mb-4 overflow-x-auto -mx-3 px-3 md:mx-0 md:px-0">
          <h4 className="font-medium mb-2 text-sm md:text-base">Độ chính xác:</h4>
          <table className="min-w-full border border-gray-300 text-xs md:text-sm shadow-sm">
            <thead>
              <tr className="bg-primary text-white">
                <th className="py-2 px-2 md:px-3 border-b text-left">Công bố</th>
                <th className="py-2 px-2 md:px-3 border-b text-left">Thực tế (tiếng Việt)</th>
                <th className="py-2 px-2 md:px-3 border-b text-left">Chênh lệch</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-2 md:px-3 border-b">{tool.accuracy.claimed}</td>
                <td className="py-2 px-2 md:px-3 border-b">{tool.accuracy.actual}</td>
                <td className="py-2 px-2 md:px-3 border-b">{tool.accuracy.difference}</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mb-3 md:mb-4">
          <h4 className="font-medium mb-2 text-sm md:text-base">Tính năng:</h4>
          <ul className="list-disc pl-5 text-xs md:text-base">
            {tool.features.map((feature, index) => (
              <li key={index} className="mb-1">{feature}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-medium mb-2 text-sm md:text-base">Hạn chế:</h4>
          <ul className="list-disc pl-5 text-xs md:text-base">
            {tool.limitations.map((limitation, index) => (
              <li key={index} className="mb-1">{limitation}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  return (
    <div className="bg-white p-3 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
      <h3 className="text-base md:text-xl font-semibold mb-3 md:mb-4">So sánh các công cụ phát hiện văn bản AI</h3>
      
      <div className="chart-container mb-4 md:mb-8 shadow-sm p-3 md:p-4 rounded-lg" style={{ height: isMobile ? '300px' : '400px' }}>
        <Bar data={barChartData} options={barChartOptions} />
      </div>
      
      <div className="mb-4 md:mb-6">
        <label htmlFor="tool-select" className="block text-sm font-medium text-gray-700 mb-2">
          Chọn công cụ để xem chi tiết:
        </label>
        <select
          id="tool-select"
          value={selectedTool}
          onChange={(e) => setSelectedTool(e.target.value)}
          className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow-inner-subtle text-base"
        >
          <option value="all">Tất cả các công cụ</option>
          <option value="turnitin">Turnitin</option>
          <option value="gptzero">GPTZero</option>
          <option value="originality">Originality.ai</option>
          <option value="proposed">Giải pháp đề xuất</option>
        </select>
      </div>
      
      {selectedTool === 'all' ? (
        Object.keys(toolData).map(toolKey => renderToolCard(toolKey))
      ) : (
        renderToolCard(selectedTool)
      )}
    </div>
  );
}
