import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import AIDetectionForm from "@/components/AIDetectionForm";
import ComparisonTool from "@/components/ComparisonTool";
import ProcessStepsVisualization from "@/components/ProcessStepsVisualization";
import AIRewriter from "@/components/AIRewriter"; // Import the new component

export default function Home() {
  return (
    <div className="container mx-auto px-3 md:px-4 py-6 md:py-8">
      {/* Hero Section */}
      <section className="py-8 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div className="transition-all duration-500 hover:translate-x-1">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-gray-900">
              Giải pháp toàn diện phát hiện và xử lý văn bản AI tiếng Việt
            </h1>
            <p className="text-base md:text-lg mb-6 md:mb-8 text-gray-600">
              Nghiên cứu, phát triển công cụ, quy trình, chính sách và tính năng hỗ trợ để phát hiện và làm việc với văn bản tiếng Việt được tạo bởi AI trong môi trường giáo dục.
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4">
              <Button asChild className="shadow-sm hover:shadow-md transition-all duration-300 min-h-[50px] px-5">
                <Link href="/giai-phap">Xem giải pháp</Link>
              </Button>
              <Button asChild variant="outline" className="shadow-sm hover:shadow-md transition-all duration-300 min-h-[50px] px-5">
                <Link href="/khuyen-nghi">Khuyến nghị</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center mt-6 md:mt-0">
            {/* Simplified Hero Image/Graphic Placeholder */}
            <div className="relative w-full max-w-md h-64 md:h-80 bg-gray-100 border border-gray-200 rounded-lg overflow-hidden transition-all duration-500 hover:shadow-lg">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 p-6 md:p-8">
                {/* Placeholder Icon or Text */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Quick Navigation */}
      <section className="md:hidden mb-6">
        <div className="grid grid-cols-2 gap-3">
          <Link href="/giai-phap" className="bg-gray-100 text-gray-800 p-4 rounded-lg text-center shadow-sm hover:shadow-md transition-all duration-300 font-medium border border-gray-200">
            Giải pháp
          </Link>
          <Link href="/phuong-phap" className="bg-gray-100 text-gray-800 p-4 rounded-lg text-center shadow-sm hover:shadow-md transition-all duration-300 font-medium border border-gray-200">
            Phương pháp
          </Link>
          <Link href="/danh-gia" className="bg-gray-100 text-gray-800 p-4 rounded-lg text-center shadow-sm hover:shadow-md transition-all duration-300 font-medium border border-gray-200">
            Đánh giá
          </Link>
          <Link href="/khuyen-nghi" className="bg-gray-100 text-gray-800 p-4 rounded-lg text-center shadow-sm hover:shadow-md transition-all duration-300 font-medium border border-gray-200">
            Khuyến nghị
          </Link>
        </div>
      </section>

      {/* AI Rewriter Section - Added */}
      <section className="section-container bg-gray-50 border border-gray-200">
        <div className="container mx-auto px-3 md:px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-12 text-gray-900">
            Công cụ viết lại văn bản AI
            <span className="block h-0.5 w-20 bg-blue-600 mx-auto mt-2"></span>
          </h2>
          <AIRewriter />
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="section-container">
        <div className="container mx-auto px-3 md:px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-12 text-gray-900">
            Thử nghiệm công cụ phát hiện
            <span className="block h-0.5 w-20 bg-blue-600 mx-auto mt-2"></span>
          </h2>
          <AIDetectionForm />
        </div>
      </section>

      {/* Features Section */}
      <section className="section-container bg-gray-50 border border-gray-200">
        <div className="container mx-auto px-3 md:px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-12 text-gray-900">
            Tính năng chính
            <span className="block h-0.5 w-20 bg-blue-600 mx-auto mt-2"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {/* Updated Feature Cards */}
            <Card className="feature-card transition-all duration-500 hover:scale-105 border border-gray-200">
              <CardHeader className="pb-2 md:pb-4">
                <CardTitle className="text-lg md:text-xl text-gray-800">Phát hiện chuyên biệt</CardTitle>
                <CardDescription className="text-xs md:text-sm text-gray-500">
                  Tối ưu hóa cho tiếng Việt với PhoBERT
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xs md:text-base text-gray-700">
                  Xử lý các thách thức đặc thù của tiếng Việt như thanh điệu, dấu phụ và cấu trúc ngữ pháp.
                </p>
              </CardContent>
            </Card>

            <Card className="feature-card transition-all duration-500 hover:scale-105 border border-gray-200">
              <CardHeader className="pb-2 md:pb-4">
                <CardTitle className="text-lg md:text-xl text-gray-800">Quy trình 5 bước</CardTitle>
                <CardDescription className="text-xs md:text-sm text-gray-500">
                  Quy trình toàn diện cho giáo viên và quản lý
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xs md:text-base text-gray-700">
                  Hướng dẫn chi tiết từ kiểm tra sơ bộ đến phân loại và xử lý vi phạm đạo văn AI.
                </p>
              </CardContent>
            </Card>

            <Card className="feature-card transition-all duration-500 hover:scale-105 border border-gray-200">
              <CardHeader className="pb-2 md:pb-4">
                <CardTitle className="text-lg md:text-xl text-gray-800">Viết lại văn bản AI</CardTitle>
                <CardDescription className="text-xs md:text-sm text-gray-500">
                  Công cụ hỗ trợ làm văn bản AI tự nhiên hơn
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xs md:text-base text-gray-700">
                  Giúp người dùng điều chỉnh văn bản do AI tạo ra để giảm khả năng bị phát hiện (Lưu ý: Chỉ mô phỏng).
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Visualization Section */}
      <section className="section-container">
        <div className="container mx-auto px-3 md:px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-12 text-gray-900">
            Quy trình phát hiện
            <span className="block h-0.5 w-20 bg-blue-600 mx-auto mt-2"></span>
          </h2>
          <ProcessStepsVisualization />
        </div>
      </section>

      {/* Comparison Tool Section */}
      <section className="section-container bg-gray-50 border border-gray-200">
        <div className="container mx-auto px-3 md:px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-12 text-gray-900">
            So sánh công cụ phát hiện
            <span className="block h-0.5 w-20 bg-blue-600 mx-auto mt-2"></span>
          </h2>
          <ComparisonTool />
        </div>
      </section>

      {/* Research Overview */}
      <section className="py-8 md:py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-gray-900">
          Tổng quan nghiên cứu
          <span className="block h-0.5 w-20 bg-blue-600 mt-2"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-500 hover:translate-y-[-5px] border border-gray-200">
            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-gray-800">Thách thức</h3>
            <p className="text-xs md:text-base mb-3 md:mb-4 text-gray-700">
              Các công cụ phát hiện AI hiện có hiệu quả hạn chế với tiếng Việt (độ chính xác ~85-87%), thấp hơn đáng kể so với tiếng Anh.
            </p>
            <p className="text-xs md:text-base text-gray-700">
              Nguyên nhân do đặc điểm ngôn ngữ phức tạp, thiếu dữ liệu huấn luyện và mô hình chưa tối ưu.
            </p>
          </div>
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-500 hover:translate-y-[-5px] border border-gray-200">
            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-gray-800">Giải pháp</h3>
            <p className="text-xs md:text-base mb-3 md:mb-4 text-gray-700">
              Giải pháp đề xuất gồm 3 lớp: công cụ phát hiện (PhoBERT fine-tuned), quy trình 5 bước cho giáo viên, và khung chính sách.
            </p>
            <p className="text-xs md:text-base text-gray-700">
              Giải pháp khả thi về kỹ thuật, vận hành, pháp lý, đạo đức và kinh tế trong dài hạn.
            </p>
          </div>
        </div>
      </section>

      {/* Mobile Bottom Navigation - Updated for Minimalist Style */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-[-2px_0_10px_rgba(0,0,0,0.1)] md:hidden z-40 border-t border-gray-200">
        <div className="flex justify-around items-center py-2">
          <Link href="/" className="flex flex-col items-center p-2 text-blue-600">
            {/* Home Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="text-xs mt-1">Trang chủ</span>
          </Link>
          <Link href="/giai-phap" className="flex flex-col items-center p-2 text-gray-500 hover:text-blue-600">
            {/* Solution Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <span className="text-xs mt-1">Giải pháp</span>
          </Link>
          <Link href="/phuong-phap" className="flex flex-col items-center p-2 text-gray-500 hover:text-blue-600">
            {/* Method Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
            <span className="text-xs mt-1">Phương pháp</span>
          </Link>
          <Link href="/khuyen-nghi" className="flex flex-col items-center p-2 text-gray-500 hover:text-blue-600">
            {/* Recommendation Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            <span className="text-xs mt-1">Khuyến nghị</span>
          </Link>
        </div>
      </div>

      {/* Call to Action - Updated for Minimalist Style */}
      <section className="py-8 md:py-12 my-8 md:my-12 rounded-lg bg-blue-600 text-white relative shadow-md mb-16 md:mb-12">
        <div className="container mx-auto px-3 md:px-4 text-center relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Khám phá giải pháp toàn diện</h2>
          <p className="text-sm md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
            Tìm hiểu chi tiết về giải pháp phát hiện văn bản AI tiếng Việt và cách áp dụng vào môi trường giáo dục của bạn.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild variant="secondary" className="shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 min-h-[50px] px-5 bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/giai-phap">Xem giải pháp</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
