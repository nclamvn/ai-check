import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";

export default function DanhGia() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Đánh giá hiệu quả công cụ phát hiện văn bản AI tiếng Việt</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Tổng quan đánh giá</h2>
        <p className="mb-4">
          Nghiên cứu đã đánh giá hiệu quả của các công cụ phát hiện văn bản AI hiện có đối với tiếng Việt, 
          bao gồm Turnitin, GPTZero và Originality.ai. Kết quả cho thấy các công cụ này có hiệu quả hạn chế 
          đối với tiếng Việt, với độ chính xác thực tế chỉ đạt khoảng 85-87%, thấp hơn đáng kể so với hiệu 
          suất được công bố cho tiếng Anh (95-98%).
        </p>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Đánh giá các công cụ hiện có</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <Card className="bg-blue-50">
            <CardHeader>
              <CardTitle>Turnitin</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Turnitin tuyên bố có độ chính xác 98% trong việc phát hiện nội dung do AI tạo ra và tỷ lệ cảnh báo sai dưới 1% 
                cho các tài liệu có ít nhất 20% nội dung do AI viết.
              </p>
              <p className="mb-4">
                Hỗ trợ 176 ngôn ngữ cho việc kiểm tra đạo văn, nhưng không có thông tin cụ thể về hiệu quả của công cụ phát hiện AI đối với tiếng Việt.
              </p>
              <p>
                <strong>Độ chính xác thực tế cho tiếng Việt:</strong> 85-86%
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-green-50">
            <CardHeader>
              <CardTitle>GPTZero</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                GPTZero tuyên bố có tỷ lệ chính xác 99% khi phát hiện văn bản do AI tạo ra so với văn bản do con người viết.
              </p>
              <p className="mb-4">
                Đã mở rộng khả năng phát hiện đa ngôn ngữ, ban đầu với tiếng Pháp và tiếng Tây Ban Nha, với độ chính xác lần lượt là 94.1% và 95.7%.
              </p>
              <p>
                <strong>Độ chính xác thực tế cho tiếng Việt:</strong> 84-85%
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-purple-50">
            <CardHeader>
              <CardTitle>Originality.ai</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Originality.ai tuyên bố có độ chính xác khoảng 95% và tỷ lệ cảnh báo sai khoảng 4.5% trên tất cả các ngôn ngữ được hỗ trợ.
              </p>
              <p className="mb-4">
                Hỗ trợ 15 ngôn ngữ, bao gồm cả tiếng Việt. Công cụ này tự động phát hiện ngôn ngữ của văn bản và chuyển sang mô hình đa ngôn ngữ.
              </p>
              <p>
                <strong>Độ chính xác thực tế cho tiếng Việt:</strong> 86-87%
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Nghiên cứu ViDetect</h2>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-semibold mb-3">Bộ dữ liệu ViDetect</h3>
          <p className="mb-4">
            ViDetect là một bộ dữ liệu tiếng Việt được phát triển đặc biệt cho nhiệm vụ phát hiện văn bản AI. 
            Bộ dữ liệu này bao gồm 6.800 mẫu văn bản tiếng Việt, với 3.400 mẫu do con người viết và 3.400 mẫu do AI tạo ra. 
            Nội dung được trích xuất từ các nền tảng giáo dục ở Việt Nam, bao gồm các bài luận của học sinh ở các cấp học khác nhau.
          </p>
          <p>
            Để đảm bảo chất lượng, chỉ các văn bản được xuất bản trước năm 2021 (trước khi các công cụ tạo văn bản AI tiên tiến như ChatGPT 
            được sử dụng rộng rãi) được xem xét. Trong quá trình tạo dữ liệu, 3.000 mẫu được chọn ngẫu nhiên từ bộ dữ liệu và được viết lại 
            bởi ChatGPT 3.5 và ChatGPT 4.0.
          </p>
        </div>
        
        <div className="overflow-x-auto">
          <h3 className="text-xl font-semibold mb-3">Hiệu suất của các mô hình phát hiện văn bản AI tiếng Việt</h3>
          <table className="min-w-full bg-white border border-gray-300 mb-6">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Mô hình</th>
                <th className="py-2 px-4 border-b">Độ chính xác (64 token)</th>
                <th className="py-2 px-4 border-b">Độ chính xác (128 token)</th>
                <th className="py-2 px-4 border-b">Độ chính xác (256 token)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">PhoBERT-base</td>
                <td className="py-2 px-4 border-b">86.5%</td>
                <td className="py-2 px-4 border-b">86.8%</td>
                <td className="py-2 px-4 border-b">87.0%</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">ViT5-base</td>
                <td className="py-2 px-4 border-b">85.2%</td>
                <td className="py-2 px-4 border-b">86.1%</td>
                <td className="py-2 px-4 border-b">85.3%</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">BARTPho-syllable</td>
                <td className="py-2 px-4 border-b">84.9%</td>
                <td className="py-2 px-4 border-b">85.7%</td>
                <td className="py-2 px-4 border-b">84.8%</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">mDeBERTa-v3-base</td>
                <td className="py-2 px-4 border-b">84.1%</td>
                <td className="py-2 px-4 border-b">84.9%</td>
                <td className="py-2 px-4 border-b">83.7%</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">BERT-multilingual-base-cased</td>
                <td className="py-2 px-4 border-b">83.8%</td>
                <td className="py-2 px-4 border-b">84.3%</td>
                <td className="py-2 px-4 border-b">83.2%</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b font-semibold">Trung bình</td>
                <td className="py-2 px-4 border-b font-semibold">85.8%</td>
                <td className="py-2 px-4 border-b font-semibold">87.2%</td>
                <td className="py-2 px-4 border-b font-semibold">84.4%</td>
              </tr>
            </tbody>
          </table>
          <p className="mb-4">
            PhoBERT-base là mô hình hiệu quả nhất với độ chính xác 87.0% cho văn bản 256 token, trong khi các mô hình đa ngôn ngữ 
            như mDeBERTa-v3-base và BERT-multilingual-base-cased có hiệu suất thấp hơn.
          </p>
          <p>
            Một phát hiện quan trọng là tăng số lượng token không làm tăng hiệu suất của mô hình, điều này khác với kết quả thường 
            thấy trong các nhiệm vụ xử lý ngôn ngữ khác.
          </p>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">So sánh hiệu suất</h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 mb-6">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Công cụ/Mô hình</th>
                <th className="py-2 px-4 border-b">Độ chính xác công bố</th>
                <th className="py-2 px-4 border-b">Độ chính xác thực tế (tiếng Việt)</th>
                <th className="py-2 px-4 border-b">Chênh lệch</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">Turnitin</td>
                <td className="py-2 px-4 border-b">98%</td>
                <td className="py-2 px-4 border-b">85-86%</td>
                <td className="py-2 px-4 border-b">-12% đến -13%</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">GPTZero</td>
                <td className="py-2 px-4 border-b">99%</td>
                <td className="py-2 px-4 border-b">84-85%</td>
                <td className="py-2 px-4 border-b">-14% đến -15%</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Originality.ai</td>
                <td className="py-2 px-4 border-b">95%</td>
                <td className="py-2 px-4 border-b">86-87%</td>
                <td className="py-2 px-4 border-b">-8% đến -9%</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">PhoBERT-base</td>
                <td className="py-2 px-4 border-b">N/A</td>
                <td className="py-2 px-4 border-b">87%</td>
                <td className="py-2 px-4 border-b">N/A</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Giải pháp đề xuất</td>
                <td className="py-2 px-4 border-b">N/A</td>
                <td className="py-2 px-4 border-b">90-92% (dự kiến)</td>
                <td className="py-2 px-4 border-b">+3% đến +5% so với PhoBERT</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className="mb-4">
          Kết quả so sánh cho thấy các công cụ phát hiện văn bản AI hiện có có hiệu quả thấp hơn đáng kể đối với tiếng Việt 
          so với hiệu suất được công bố (chủ yếu dựa trên tiếng Anh). Giải pháp đề xuất dự kiến sẽ cải thiện hiệu suất lên 
          90-92%, cao hơn 3-5% so với mô hình PhoBERT đơn lẻ và cao hơn 4-8% so với các công cụ hiện có.
        </p>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Nguyên nhân hiệu suất thấp</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <Card>
            <CardHeader>
              <CardTitle>Đặc thù ngôn ngữ</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6">
                <li className="mb-2">Hệ thống thanh điệu và dấu phụ phức tạp</li>
                <li className="mb-2">Cấu trúc ngữ pháp khác biệt so với tiếng Anh</li>
                <li className="mb-2">Khó khăn trong việc xác định ranh giới từ</li>
                <li className="mb-2">Đa dạng phương ngữ và văn phong</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Hạn chế kỹ thuật</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6">
                <li className="mb-2">Thiếu dữ liệu huấn luyện chất lượng cao</li>
                <li className="mb-2">Mô hình ngôn ngữ chưa được tối ưu hóa cho tiếng Việt</li>
                <li className="mb-2">Thiếu công cụ xử lý ngôn ngữ tự nhiên chuyên biệt</li>
                <li className="mb-2">Các công cụ hiện có tập trung vào tiếng Anh</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <div className="flex justify-center gap-4 mt-8 mb-12">
        <ButtonLink href="/phuong-phap" variant="outline">Quay lại Phương pháp</ButtonLink>
        <ButtonLink href="/kha-thi">Xem tính khả thi</ButtonLink>
      </div>
    </div>
  );
}
