import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";

export default function PhuongPhap() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Phương pháp phát hiện văn bản AI tiếng Việt</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Tổng quan phương pháp</h2>
        <p className="mb-4">
          Phương pháp phát hiện văn bản AI tiếng Việt được đề xuất bao gồm các thành phần chính sau:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
          <Card className="bg-blue-50">
            <CardHeader>
              <CardTitle>Fine-tuning mô hình PhoBERT</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Sử dụng PhoBERT làm nền tảng và fine-tune cho nhiệm vụ phát hiện văn bản AI. PhoBERT được chọn vì là mô hình hiệu quả nhất cho tiếng Việt trong nghiên cứu ViDetect, với độ chính xác 87.0% cho văn bản 256 token.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-green-50">
            <CardHeader>
              <CardTitle>Kết hợp đặc trưng ngôn ngữ học tiếng Việt</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Tích hợp các đặc trưng đặc thù của tiếng Việt vào quá trình phát hiện, bao gồm phân tích thanh điệu và dấu phụ, phân tích cấu trúc từ và câu, phân tích ngữ nghĩa và văn hóa.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-purple-50">
            <CardHeader>
              <CardTitle>Phương pháp tổng hợp (Ensemble)</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Kết hợp nhiều mô hình khác nhau để tăng độ chính xác và giảm tỷ lệ cảnh báo sai, bao gồm PhoBERT fine-tuned, ViT5, BARTPho, mô hình thống kê, và mô hình phân tích ngữ nghĩa.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-yellow-50">
            <CardHeader>
              <CardTitle>Hệ thống đánh giá đa cấp</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Thay vì chỉ đưa ra kết quả nhị phân (AI hoặc con người), hệ thống cung cấp đánh giá đa cấp với 5 mức độ từ "Rất có khả năng do con người viết" đến "Rất có khả năng do AI tạo ra".
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Thách thức đặc thù của tiếng Việt</h2>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-semibold mb-3">Đặc điểm ngôn ngữ học</h3>
          <ul className="list-disc pl-6">
            <li className="mb-3">
              <span className="font-medium">Hệ thống thanh điệu</span>: Tiếng Việt có 6 thanh điệu (ngang, huyền, sắc, hỏi, ngã, nặng) ảnh hưởng đến ý nghĩa của từ. Các mô hình AI có thể gặp khó khăn trong việc sử dụng thanh điệu một cách tự nhiên và nhất quán.
            </li>
            <li className="mb-3">
              <span className="font-medium">Dấu phụ</span>: Tiếng Việt sử dụng nhiều dấu phụ (ă, â, ê, ô, ơ, ư, đ) tạo ra thách thức trong việc xử lý và phân tích.
            </li>
            <li className="mb-3">
              <span className="font-medium">Phân đoạn từ</span>: Tiếng Việt không có khoảng trắng giữa các từ, mà chỉ giữa các âm tiết, gây khó khăn trong việc xác định ranh giới từ.
            </li>
            <li className="mb-3">
              <span className="font-medium">Cấu trúc ngữ pháp</span>: Tiếng Việt có cấu trúc ngữ pháp khác biệt so với tiếng Anh và các ngôn ngữ Ấn-Âu khác, với thứ tự từ, cách sử dụng trợ từ, và cách biểu đạt thời gian đặc thù.
            </li>
            <li className="mb-3">
              <span className="font-medium">Biến thể phương ngữ</span>: Tiếng Việt có nhiều phương ngữ khác nhau (Bắc, Trung, Nam) với sự khác biệt về từ vựng, phát âm và đôi khi cả ngữ pháp.
            </li>
          </ul>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Thách thức kỹ thuật</h3>
          <ul className="list-disc pl-6">
            <li className="mb-3">
              <span className="font-medium">Thiếu dữ liệu huấn luyện</span>: Thiếu các bộ dữ liệu lớn và chất lượng cao cho tiếng Việt, đặc biệt là dữ liệu có nhãn cho nhiệm vụ phát hiện văn bản AI.
            </li>
            <li className="mb-3">
              <span className="font-medium">Mô hình ngôn ngữ chưa tối ưu</span>: Các mô hình ngôn ngữ lớn chưa được tối ưu hóa đầy đủ cho tiếng Việt, dẫn đến hiệu suất thấp hơn so với tiếng Anh.
            </li>
            <li className="mb-3">
              <span className="font-medium">Công cụ xử lý ngôn ngữ hạn chế</span>: Thiếu các công cụ xử lý ngôn ngữ tự nhiên chuyên biệt cho tiếng Việt, như công cụ phân tích cú pháp, nhận dạng thực thể có tên, và phân tích ngữ nghĩa.
            </li>
            <li className="mb-3">
              <span className="font-medium">Đa dạng văn phong</span>: Tiếng Việt có nhiều văn phong khác nhau tùy thuộc vào ngữ cảnh, độ tuổi, vùng miền, và trình độ học vấn, gây khó khăn trong việc xác định mẫu văn phong chuẩn.
            </li>
          </ul>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Quy trình phát hiện</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Tiền xử lý văn bản</h3>
            <ul className="list-disc pl-6">
              <li>Chuẩn hóa văn bản (dấu câu, khoảng trắng)</li>
              <li>Phân đoạn thành câu và đoạn</li>
              <li>Loại bỏ thông tin không liên quan</li>
              <li>Chuẩn hóa dấu thanh điệu và dấu phụ</li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Trích xuất đặc trưng</h3>
            <ul className="list-disc pl-6">
              <li>Đặc trưng ngôn ngữ học (từ vựng, cú pháp)</li>
              <li>Đặc trưng thống kê (độ dài câu, tần suất từ)</li>
              <li>Đặc trưng ngữ nghĩa (mạch lạc, nhất quán)</li>
              <li>Đặc trưng văn phong (tính đa dạng, độ phức tạp)</li>
            </ul>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Phân tích mô hình</h3>
            <ul className="list-disc pl-6">
              <li>Phân tích bằng PhoBERT fine-tuned</li>
              <li>Phân tích bằng ViT5</li>
              <li>Phân tích bằng BARTPho</li>
              <li>Phân tích thống kê</li>
            </ul>
          </div>
          
          <div className="bg-yellow-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Phân tích ngữ nghĩa</h3>
            <ul className="list-disc pl-6">
              <li>Đánh giá tính mạch lạc</li>
              <li>Đánh giá tính nhất quán</li>
              <li>Phân tích độ sâu nội dung</li>
              <li>Phát hiện mâu thuẫn nội dung</li>
            </ul>
          </div>
          
          <div className="bg-red-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Tổng hợp kết quả</h3>
            <ul className="list-disc pl-6">
              <li>Kết hợp kết quả từ các mô hình</li>
              <li>Áp dụng trọng số cho từng mô hình</li>
              <li>Tính điểm tổng hợp</li>
              <li>Xác định ngưỡng phát hiện</li>
            </ul>
          </div>
          
          <div className="bg-indigo-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Đánh giá đa cấp</h3>
            <ul className="list-disc pl-6">
              <li>Cấp độ 1 (0-20%): Rất có khả năng do con người viết</li>
              <li>Cấp độ 2 (21-40%): Có khả năng do con người viết</li>
              <li>Cấp độ 3 (41-60%): Không xác định rõ</li>
              <li>Cấp độ 4 (61-80%): Có khả năng do AI tạo ra</li>
              <li>Cấp độ 5 (81-100%): Rất có khả năng do AI tạo ra</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Hiệu suất dự kiến</h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 mb-6">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Chỉ số</th>
                <th className="py-2 px-4 border-b">Giá trị dự kiến</th>
                <th className="py-2 px-4 border-b">So sánh</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">Độ chính xác (Accuracy)</td>
                <td className="py-2 px-4 border-b">90-92%</td>
                <td className="py-2 px-4 border-b">Tăng 3-5% so với PhoBERT đơn lẻ</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Precision</td>
                <td className="py-2 px-4 border-b">88-90%</td>
                <td className="py-2 px-4 border-b">Tăng 2-4% so với các phương pháp hiện có</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Recall</td>
                <td className="py-2 px-4 border-b">92-94%</td>
                <td className="py-2 px-4 border-b">Tăng 4-6% so với các phương pháp hiện có</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Điểm F1</td>
                <td className="py-2 px-4 border-b">90-92%</td>
                <td className="py-2 px-4 border-b">Tăng 3-5% so với các phương pháp hiện có</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Tỷ lệ cảnh báo sai</td>
                <td className="py-2 px-4 border-b">3-4%</td>
                <td className="py-2 px-4 border-b">Giảm 1-2% so với các phương pháp hiện có</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className="mb-4">
          Hiệu suất dự kiến được đánh giá dựa trên các thử nghiệm với bộ dữ liệu ViDetect, bao gồm 6.800 mẫu văn bản tiếng Việt (3.400 mẫu do con người viết và 3.400 mẫu do AI tạo ra).
        </p>
      </section>
      
      <div className="flex justify-center gap-4 mt-8 mb-12">
        <ButtonLink href="/giai-phap" variant="outline">Quay lại Giải pháp</ButtonLink>
        <ButtonLink href="/danh-gia">Xem đánh giá công cụ</ButtonLink>
      </div>
    </div>
  );
}
