import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";

export default function GiaiPhap() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Giải pháp toàn diện phát hiện văn bản AI tiếng Việt</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Tổng quan giải pháp</h2>
        <p className="mb-4">
          Giải pháp toàn diện phát hiện văn bản AI tiếng Việt được thiết kế theo mô hình ba lớp:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <Card className="bg-blue-50">
            <CardHeader>
              <CardTitle>Lớp công cụ phát hiện</CardTitle>
              <CardDescription>
                Hệ thống phát hiện văn bản AI tiếng Việt
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Sử dụng mô hình PhoBERT fine-tuned kết hợp với phân tích đặc trưng ngôn ngữ học tiếng Việt và phương pháp tổng hợp (ensemble).</p>
            </CardContent>
          </Card>
          
          <Card className="bg-green-50">
            <CardHeader>
              <CardTitle>Lớp quy trình tích hợp</CardTitle>
              <CardDescription>
                Quy trình tích hợp công cụ phát hiện
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Quy trình 5 bước cho giáo viên và quy trình tích hợp cho quản lý giáo dục và nhà xuất bản.</p>
            </CardContent>
          </Card>
          
          <Card className="bg-purple-50">
            <CardHeader>
              <CardTitle>Lớp chính sách và hướng dẫn</CardTitle>
              <CardDescription>
                Khung chính sách và hướng dẫn áp dụng
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Chính sách sử dụng AI trong giáo dục, xử lý vi phạm và hướng dẫn áp dụng cho các bên liên quan.</p>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Lớp công cụ phát hiện</h2>
        
        <h3 className="text-xl font-semibold mb-3">Kiến trúc hệ thống</h3>
        <div className="bg-gray-100 p-6 rounded-lg mb-6 overflow-x-auto">
          <pre className="text-sm">
{`+------------------------+     +------------------------+     +------------------------+
|                        |     |                        |     |                        |
|  Tiền xử lý văn bản    |---->|  Trích xuất đặc trưng  |---->|  Phân tích mô hình    |
|                        |     |                        |     |                        |
+------------------------+     +------------------------+     +------------------------+
                                                                          |
                                                                          v
+------------------------+     +------------------------+     +------------------------+
|                        |     |                        |     |                        |
|  Đánh giá đa cấp       |<----|  Tổng hợp kết quả      |<----|  Phân tích ngữ nghĩa   |
|                        |     |                        |     |                        |
+------------------------+     +------------------------+     +------------------------+`}
          </pre>
        </div>
        
        <h3 className="text-xl font-semibold mb-3">Thành phần chính</h3>
        <div className="mb-6">
          <h4 className="text-lg font-medium mb-2">Mô-đun phát hiện cốt lõi</h4>
          <ul className="list-disc pl-6 mb-4">
            <li>Mô hình PhoBERT fine-tuned: Mô hình nền tảng được fine-tune cho nhiệm vụ phát hiện văn bản AI tiếng Việt</li>
            <li>Bộ phân tích đặc trưng ngôn ngữ học: Phân tích các đặc trưng ngôn ngữ học đặc thù của tiếng Việt</li>
            <li>Hệ thống tổng hợp (Ensemble): Kết hợp nhiều mô hình để tăng độ chính xác</li>
            <li>Bộ phân tích ngữ cảnh và ngữ nghĩa: Đánh giá tính nhất quán và mạch lạc của văn bản</li>
          </ul>
          
          <h4 className="text-lg font-medium mb-2">Giao diện người dùng</h4>
          <ul className="list-disc pl-6 mb-4">
            <li>Giao diện web: Giao diện thân thiện cho người dùng cuối</li>
            <li>API: RESTful API cho việc tích hợp với các hệ thống khác</li>
            <li>Plugin cho LMS: Plugin tích hợp với các hệ thống quản lý học tập phổ biến (Moodle, Canvas, v.v.)</li>
          </ul>
          
          <h4 className="text-lg font-medium mb-2">Hệ thống báo cáo</h4>
          <ul className="list-disc pl-6">
            <li>Báo cáo chi tiết: Cung cấp phân tích chi tiết về kết quả phát hiện</li>
            <li>Báo cáo tổng hợp: Tổng hợp kết quả phát hiện cho nhiều văn bản</li>
            <li>Trực quan hóa: Biểu đồ và đồ thị trực quan hóa kết quả phát hiện</li>
          </ul>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Lớp quy trình tích hợp</h2>
        
        <div className="bg-green-50 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-semibold mb-3">Quy trình 5 bước cho giáo viên</h3>
          <ol className="list-decimal pl-6">
            <li className="mb-3">
              <span className="font-medium">Kiểm tra sơ bộ</span>: Sử dụng công cụ phát hiện để kiểm tra bài làm của học sinh và xem xét điểm số và báo cáo chi tiết.
            </li>
            <li className="mb-3">
              <span className="font-medium">Đánh giá văn phong</span>: Phân tích văn phong và so sánh với các bài làm trước đây của học sinh, xác định các dấu hiệu bất thường trong cách viết.
            </li>
            <li className="mb-3">
              <span className="font-medium">Đối chiếu nguồn</span>: Tìm kiếm các đoạn văn bản trên Google, so sánh với các bài tập cũ của học sinh, kiểm tra các diễn đàn và nguồn thông tin phổ biến.
            </li>
            <li className="mb-3">
              <span className="font-medium">Phỏng vấn nhanh</span>: Yêu cầu học sinh giải thích lập luận và nguồn dẫn chứng, đặt câu hỏi về quá trình viết bài, yêu cầu học sinh mở rộng hoặc phát triển ý tưởng trong bài.
            </li>
            <li className="mb-3">
              <span className="font-medium">Phân loại và xử lý</span>: Phân loại mức độ vi phạm dựa trên kết quả phát hiện và phỏng vấn, áp dụng biện pháp xử lý phù hợp theo chính sách của trường.
            </li>
          </ol>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Quy trình cho quản lý giáo dục</h3>
            <ul className="list-disc pl-6">
              <li className="mb-2"><span className="font-medium">Xây dựng chính sách</span>: Chính sách sử dụng AI và xử lý vi phạm</li>
              <li className="mb-2"><span className="font-medium">Đào tạo và hỗ trợ</span>: Đào tạo giáo viên và hỗ trợ học sinh</li>
              <li className="mb-2"><span className="font-medium">Giám sát và đánh giá</span>: Giám sát việc thực hiện và đánh giá hiệu quả</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3">Quy trình cho nhà xuất bản</h3>
            <ul className="list-disc pl-6">
              <li className="mb-2"><span className="font-medium">Kiểm tra nội dung</span>: Kiểm tra trước và sau khi xuất bản</li>
              <li className="mb-2"><span className="font-medium">Đảm bảo chất lượng</span>: Quy trình biên tập và tiêu chuẩn chất lượng</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Lớp chính sách và hướng dẫn</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Khung chính sách</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6">
                <li className="mb-2">Chính sách sử dụng AI trong giáo dục</li>
                <li className="mb-2">Phân loại mức độ sử dụng AI được phép</li>
                <li className="mb-2">Quy định về trích dẫn và ghi nhận</li>
                <li className="mb-2">Phân loại vi phạm và biện pháp xử lý</li>
                <li className="mb-2">Quy trình khiếu nại</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Hướng dẫn áp dụng</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6">
                <li className="mb-2">Hướng dẫn cho giáo viên</li>
                <li className="mb-2">Hướng dẫn cho học sinh</li>
                <li className="mb-2">Hướng dẫn cho quản lý giáo dục</li>
                <li className="mb-2">Tài liệu đào tạo và hỗ trợ</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Kế hoạch triển khai</h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 mb-6">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Giai đoạn</th>
                <th className="py-2 px-4 border-b">Thời gian</th>
                <th className="py-2 px-4 border-b">Mục tiêu chính</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">Phát triển và thử nghiệm</td>
                <td className="py-2 px-4 border-b">3 tháng</td>
                <td className="py-2 px-4 border-b">Phát triển mô hình, giao diện, quy trình và thử nghiệm</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Triển khai thí điểm</td>
                <td className="py-2 px-4 border-b">6 tháng</td>
                <td className="py-2 px-4 border-b">Triển khai tại các trường học thí điểm, thu thập phản hồi</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Triển khai rộng rãi</td>
                <td className="py-2 px-4 border-b">12 tháng</td>
                <td className="py-2 px-4 border-b">Mở rộng triển khai, phát triển tính năng mới</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      
      <div className="flex justify-center mt-8 mb-12">
        <ButtonLink href="/phuong-phap">Xem phương pháp phát hiện</ButtonLink>
      </div>
    </div>
  );
}
