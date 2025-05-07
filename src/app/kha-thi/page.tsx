import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";

export default function KhaThi() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Tính khả thi của giải pháp phát hiện văn bản AI tiếng Việt</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Phân tích SWOT</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <Card className="bg-green-50">
            <CardHeader>
              <CardTitle>Điểm mạnh (Strengths)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6">
                <li className="mb-2">
                  <span className="font-medium">Phương pháp chuyên biệt cho tiếng Việt</span>: Sử dụng mô hình PhoBERT được tối ưu hóa cho tiếng Việt, tích hợp phân tích đặc trưng ngôn ngữ học tiếng Việt
                </li>
                <li className="mb-2">
                  <span className="font-medium">Giải pháp toàn diện</span>: Kết hợp công cụ phát hiện, quy trình tích hợp và khung chính sách
                </li>
                <li className="mb-2">
                  <span className="font-medium">Phương pháp tổng hợp (Ensemble)</span>: Kết hợp nhiều mô hình để tăng độ chính xác và giảm tỷ lệ cảnh báo sai
                </li>
                <li className="mb-2">
                  <span className="font-medium">Hệ thống đánh giá đa cấp</span>: Cung cấp thông tin chi tiết hơn so với kết quả nhị phân
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-red-50">
            <CardHeader>
              <CardTitle>Điểm yếu (Weaknesses)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6">
                <li className="mb-2">
                  <span className="font-medium">Phụ thuộc vào dữ liệu huấn luyện</span>: Bộ dữ liệu ViDetect hiện có quy mô còn hạn chế (6.800 mẫu)
                </li>
                <li className="mb-2">
                  <span className="font-medium">Yêu cầu nguồn lực triển khai cao</span>: Cần đầu tư đáng kể về nhân lực, tài chính và cơ sở hạ tầng
                </li>
                <li className="mb-2">
                  <span className="font-medium">Độ chính xác chưa hoàn hảo</span>: Độ chính xác dự kiến 90-92%, vẫn có khả năng sai sót
                </li>
                <li className="mb-2">
                  <span className="font-medium">Thách thức trong việc cập nhật</span>: Cần cập nhật liên tục để theo kịp sự phát triển của các mô hình AI
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-blue-50">
            <CardHeader>
              <CardTitle>Cơ hội (Opportunities)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6">
                <li className="mb-2">
                  <span className="font-medium">Nhu cầu thị trường cao</span>: Sự gia tăng sử dụng AI trong giáo dục tạo nhu cầu lớn cho công cụ phát hiện
                </li>
                <li className="mb-2">
                  <span className="font-medium">Hỗ trợ từ các bên liên quan</span>: Sự quan tâm của các cơ quan quản lý giáo dục
                </li>
                <li className="mb-2">
                  <span className="font-medium">Mở rộng ứng dụng</span>: Khả năng mở rộng sang các lĩnh vực khác ngoài giáo dục
                </li>
                <li className="mb-2">
                  <span className="font-medium">Xu hướng chính sách</span>: Xu hướng tăng cường quy định về sử dụng AI trong giáo dục
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-yellow-50">
            <CardHeader>
              <CardTitle>Thách thức (Threats)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6">
                <li className="mb-2">
                  <span className="font-medium">Sự phát triển nhanh chóng của AI</span>: Các mô hình AI liên tục được cải tiến, khó theo kịp
                </li>
                <li className="mb-2">
                  <span className="font-medium">Cạnh tranh từ các giải pháp khác</span>: Khả năng các công cụ phát hiện quốc tế mở rộng hỗ trợ tiếng Việt
                </li>
                <li className="mb-2">
                  <span className="font-medium">Thách thức về chấp nhận</span>: Khả năng chống đối từ người dùng, lo ngại về quyền riêng tư
                </li>
                <li className="mb-2">
                  <span className="font-medium">Rủi ro pháp lý và đạo đức</span>: Thay đổi trong quy định pháp lý về AI và quyền riêng tư
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Tính khả thi kỹ thuật</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <Card>
            <CardHeader>
              <CardTitle>Mô hình PhoBERT</CardTitle>
              <CardDescription>Tính khả thi: Cao</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                PhoBERT là mô hình ngôn ngữ tiền huấn luyện có sẵn cho tiếng Việt, đã được chứng minh hiệu quả trong nhiều nhiệm vụ xử lý ngôn ngữ tiếng Việt.
              </p>
              <p className="mb-4">
                <strong>Thách thức:</strong>
              </p>
              <ul className="list-disc pl-6">
                <li>Cần dữ liệu huấn luyện chất lượng cao</li>
                <li>Đòi hỏi chuyên môn trong việc fine-tune mô hình</li>
                <li>Cần tối ưu hóa để đạt hiệu suất thời gian thực</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Phương pháp tổng hợp (Ensemble)</CardTitle>
              <CardDescription>Tính khả thi: Trung bình đến cao</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Kỹ thuật ensemble đã được chứng minh hiệu quả trong nhiều bài toán ML, có thể triển khai với các mô hình có sẵn (PhoBERT, ViT5, BARTPho).
              </p>
              <p className="mb-4">
                <strong>Thách thức:</strong>
              </p>
              <ul className="list-disc pl-6">
                <li>Tăng độ phức tạp của hệ thống</li>
                <li>Yêu cầu tài nguyên tính toán cao hơn</li>
                <li>Cần cân bằng giữa độ chính xác và thời gian phản hồi</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Phân tích đặc trưng ngôn ngữ học</CardTitle>
              <CardDescription>Tính khả thi: Trung bình</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Có các công cụ xử lý ngôn ngữ tiếng Việt như underthesea, pyvi. Các đặc trưng ngôn ngữ học tiếng Việt đã được nghiên cứu.
              </p>
              <p className="mb-4">
                <strong>Thách thức:</strong>
              </p>
              <ul className="list-disc pl-6">
                <li>Đòi hỏi chuyên môn sâu về ngôn ngữ học tiếng Việt</li>
                <li>Cần phát triển các thuật toán phân tích đặc thù</li>
                <li>Thiếu các công cụ chuyên biệt cho một số phân tích phức tạp</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Kết luận về tính khả thi kỹ thuật</h3>
          <p>
            Giải pháp đề xuất là <strong>khả thi về mặt kỹ thuật</strong> với các công nghệ hiện có. Các thành phần chính của giải pháp đều có thể phát triển dựa trên các mô hình và công cụ có sẵn. Tuy nhiên, cần lưu ý các thách thức về dữ liệu huấn luyện, tối ưu hóa hiệu suất, và tích hợp với các hệ thống hiện có. Việc phát triển một giải pháp hoàn chỉnh sẽ đòi hỏi đội ngũ kỹ thuật có chuyên môn cao và thời gian phát triển đáng kể.
          </p>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Tính khả thi kinh tế</h2>
        
        <div className="overflow-x-auto mb-6">
          <h3 className="text-xl font-semibold mb-3">Phân tích chi phí</h3>
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Hạng mục</th>
                <th className="py-2 px-4 border-b">Chi phí ước tính (VNĐ)</th>
                <th className="py-2 px-4 border-b">Ghi chú</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">Phát triển mô hình</td>
                <td className="py-2 px-4 border-b">100-150 triệu</td>
                <td className="py-2 px-4 border-b">Bao gồm thu thập dữ liệu, huấn luyện và tối ưu hóa</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Phát triển giao diện và API</td>
                <td className="py-2 px-4 border-b">80-120 triệu</td>
                <td className="py-2 px-4 border-b">Bao gồm thiết kế UI/UX và phát triển backend</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Thử nghiệm và tối ưu hóa</td>
                <td className="py-2 px-4 border-b">50-80 triệu</td>
                <td className="py-2 px-4 border-b">Bao gồm kiểm thử, đánh giá và cải tiến</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b font-semibold">Tổng chi phí phát triển</td>
                <td className="py-2 px-4 border-b font-semibold">230-350 triệu</td>
                <td className="py-2 px-4 border-b"></td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Chi phí triển khai/năm</td>
                <td className="py-2 px-4 border-b">450-650 triệu</td>
                <td className="py-2 px-4 border-b">Bao gồm cơ sở hạ tầng, đào tạo, quản lý</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Chi phí duy trì/năm</td>
                <td className="py-2 px-4 border-b">230-350 triệu</td>
                <td className="py-2 px-4 border-b">Bao gồm cập nhật, hỗ trợ, đào tạo liên tục</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b font-semibold">Tổng chi phí 3 năm đầu</td>
                <td className="py-2 px-4 border-b font-semibold">2.040-3.000 triệu</td>
                <td className="py-2 px-4 border-b"></td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="overflow-x-auto mb-6">
          <h3 className="text-xl font-semibold mb-3">Phân tích ROI (Return on Investment)</h3>
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Năm</th>
                <th className="py-2 px-4 border-b">Chi phí (triệu VNĐ)</th>
                <th className="py-2 px-4 border-b">Lợi ích (triệu VNĐ)</th>
                <th className="py-2 px-4 border-b">ROI</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">Năm 1</td>
                <td className="py-2 px-4 border-b">680-1.000</td>
                <td className="py-2 px-4 border-b">225-375 (50% năm đầu)</td>
                <td className="py-2 px-4 border-b">-67% đến -63%</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Năm 2</td>
                <td className="py-2 px-4 border-b">680-1.000</td>
                <td className="py-2 px-4 border-b">450-750</td>
                <td className="py-2 px-4 border-b">-34% đến -25%</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Năm 3</td>
                <td className="py-2 px-4 border-b">680-1.000</td>
                <td className="py-2 px-4 border-b">450-750</td>
                <td className="py-2 px-4 border-b">-34% đến -25%</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b font-semibold">Tổng 3 năm</td>
                <td className="py-2 px-4 border-b font-semibold">2.040-3.000</td>
                <td className="py-2 px-4 border-b font-semibold">1.125-1.875</td>
                <td className="py-2 px-4 border-b font-semibold">-45% đến -38%</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b font-semibold">Tổng 5 năm</td>
                <td className="py-2 px-4 border-b font-semibold">3.400-5.000</td>
                <td className="py-2 px-4 border-b font-semibold">2.025-3.375</td>
                <td className="py-2 px-4 border-b font-semibold">-40% đến -33%</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Kết luận về tính khả thi kinh tế</h3>
          <p>
            Giải pháp đề xuất có chi phí đầu tư ban đầu cao và ROI âm trong 5 năm đầu. Tuy nhiên, xét về lợi ích dài hạn, đặc biệt là các lợi ích định tính khó lượng hóa như cải thiện chất lượng giáo dục, tăng cường uy tín tổ chức, phát triển năng lực công nghệ, và đóng góp cho nghiên cứu, giải pháp vẫn có <strong>tính khả thi kinh tế trong dài hạn</strong>. Điểm hòa vốn dự kiến sẽ đạt được sau khoảng 6-8 năm triển khai.
          </p>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Tính khả thi vận hành</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <Card>
            <CardHeader>
              <CardTitle>Yêu cầu nhân sự</CardTitle>
              <CardDescription>Tính khả thi: Trung bình đến cao</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6">
                <li className="mb-2">2-3 chuyên gia NLP/ML có kinh nghiệm về tiếng Việt</li>
                <li className="mb-2">2-3 kỹ sư phát triển web/API</li>
                <li className="mb-2">1-2 chuyên gia UI/UX</li>
                <li className="mb-2">2-3 chuyên gia tích hợp hệ thống</li>
                <li className="mb-2">3-5 chuyên gia đào tạo</li>
                <li className="mb-2">2-3 nhân viên hỗ trợ kỹ thuật</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Lộ trình triển khai</CardTitle>
              <CardDescription>Tính khả thi: Cao</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6">
                <li className="mb-2">Giai đoạn 1: Phát triển và thử nghiệm (3 tháng)</li>
                <li className="mb-2">Giai đoạn 2: Triển khai thí điểm (6 tháng)</li>
                <li className="mb-2">Giai đoạn 3: Triển khai rộng rãi (12 tháng)</li>
                <li className="mb-2">Giai đoạn 4: Duy trì và phát triển (liên tục)</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Quản lý thay đổi</CardTitle>
              <CardDescription>Tính khả thi: Trung bình</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                <strong>Thách thức:</strong>
              </p>
              <ul className="list-disc pl-6">
                <li className="mb-2">Đối phó với sự chống đối từ người dùng</li>
                <li className="mb-2">Thay đổi thói quen và quy trình làm việc</li>
                <li className="mb-2">Đảm bảo sự chấp nhận và áp dụng lâu dài</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Bảo trì và hỗ trợ</CardTitle>
              <CardDescription>Tính khả thi: Trung bình đến cao</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                <strong>Thách thức:</strong>
              </p>
              <ul className="list-disc pl-6">
                <li className="mb-2">Đảm bảo cập nhật kịp thời với sự phát triển của AI</li>
                <li className="mb-2">Duy trì hiệu suất khi số lượng người dùng tăng</li>
                <li className="mb-2">Cân bằng giữa ổn định và cải tiến</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-purple-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Kết luận về tính khả thi vận hành</h3>
          <p>
            Giải pháp đề xuất có <strong>tính khả thi vận hành cao</strong> với lộ trình triển khai rõ ràng và kế hoạch duy trì cụ thể. Thách thức chính là tìm kiếm chuyên gia NLP/ML có kinh nghiệm với tiếng Việt và quản lý thay đổi trong các tổ chức. Tuy nhiên, với kế hoạch đào tạo và hỗ trợ phù hợp, những thách thức này có thể được khắc phục.
          </p>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Tính khả thi pháp lý và đạo đức</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <Card>
            <CardHeader>
              <CardTitle>Tuân thủ quy định về dữ liệu</CardTitle>
              <CardDescription>Tính khả thi: Cao</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Việt Nam chưa có quy định nghiêm ngặt về bảo vệ dữ liệu như GDPR. Giải pháp có thể thiết kế để tuân thủ các quy định hiện hành.
              </p>
              <p className="mb-4">
                <strong>Thách thức:</strong>
              </p>
              <ul className="list-disc pl-6">
                <li className="mb-2">Đảm bảo bảo mật thông tin cá nhân của học sinh</li>
                <li className="mb-2">Thích ứng với các quy định mới trong tương lai</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Quyền sở hữu trí tuệ</CardTitle>
              <CardDescription>Tính khả thi: Cao</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Có thể sử dụng các mô hình mã nguồn mở như PhoBERT và xây dựng giải pháp độc quyền dựa trên các công nghệ có sẵn.
              </p>
              <p className="mb-4">
                <strong>Thách thức:</strong>
              </p>
              <ul className="list-disc pl-6">
                <li className="mb-2">Đảm bảo tuân thủ giấy phép của các công nghệ mã nguồn mở</li>
                <li className="mb-2">Bảo vệ quyền sở hữu trí tuệ trong môi trường cạnh tranh</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Công bằng và không phân biệt đối xử</CardTitle>
              <CardDescription>Tính khả thi: Trung bình</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Có thể thiết kế mô hình để giảm thiểu thiên kiến và đánh giá, cải thiện tính công bằng của mô hình.
              </p>
              <p className="mb-4">
                <strong>Thách thức:</strong>
              </p>
              <ul className="list-disc pl-6">
                <li className="mb-2">Đảm bảo mô hình không thiên vị với các nhóm học sinh khác nhau</li>
                <li className="mb-2">Tránh phân biệt đối xử dựa trên phong cách viết hoặc ngôn ngữ</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Quyền riêng tư và giám sát</CardTitle>
              <CardDescription>Tính khả thi: Trung bình</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Có thể xây dựng chính sách bảo mật rõ ràng và giới hạn việc lưu trữ và sử dụng dữ liệu.
              </p>
              <p className="mb-4">
                <strong>Thách thức:</strong>
              </p>
              <ul className="list-disc pl-6">
                <li className="mb-2">Cân bằng giữa giám sát và quyền riêng tư</li>
                <li className="mb-2">Đối phó với lo ngại về "văn hóa giám sát"</li>
                <li className="mb-2">Đảm bảo sự đồng thuận của tất cả các bên liên quan</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-indigo-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Kết luận về tính khả thi pháp lý và đạo đức</h3>
          <p>
            Giải pháp đề xuất có <strong>tính khả thi pháp lý và đạo đức cao</strong>, với điều kiện có các biện pháp phù hợp để đảm bảo tuân thủ quy định, bảo vệ quyền riêng tư, và thúc đẩy công bằng. Cần đặc biệt chú ý đến việc xây dựng chính sách rõ ràng, minh bạch về cách thức hoạt động và hạn chế của công cụ, đồng thời đảm bảo quyết định cuối cùng luôn thuộc về con người.
          </p>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Kết luận tổng thể về tính khả thi</h2>
        
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Khía cạnh</th>
                <th className="py-2 px-4 border-b">Đánh giá</th>
                <th className="py-2 px-4 border-b">Điểm mạnh chính</th>
                <th className="py-2 px-4 border-b">Thách thức chính</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">Kỹ thuật</td>
                <td className="py-2 px-4 border-b">Khả thi</td>
                <td className="py-2 px-4 border-b">Công nghệ có sẵn, mô hình PhoBERT hiệu quả</td>
                <td className="py-2 px-4 border-b">Dữ liệu huấn luyện, tối ưu hóa hiệu suất</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Kinh tế</td>
                <td className="py-2 px-4 border-b">Khả thi dài hạn</td>
                <td className="py-2 px-4 border-b">Lợi ích lâu dài, cải thiện chất lượng giáo dục</td>
                <td className="py-2 px-4 border-b">Chi phí đầu tư cao, ROI âm trong 5 năm đầu</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Vận hành</td>
                <td className="py-2 px-4 border-b">Khả thi</td>
                <td className="py-2 px-4 border-b">Lộ trình triển khai rõ ràng, kế hoạch duy trì cụ thể</td>
                <td className="py-2 px-4 border-b">Nhân lực chuyên môn, quản lý thay đổi</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Pháp lý và đạo đức</td>
                <td className="py-2 px-4 border-b">Khả thi</td>
                <td className="py-2 px-4 border-b">Tuân thủ quy định hiện hành, tác động xã hội tích cực</td>
                <td className="py-2 px-4 border-b">Quyền riêng tư, công bằng, trách nhiệm pháp lý</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="bg-blue-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Đánh giá tổng thể</h3>
          <p className="mb-4">
            Giải pháp toàn diện phát hiện văn bản AI tiếng Việt được đánh giá là <strong>khả thi về mặt kỹ thuật, vận hành, pháp lý và đạo đức, cũng như khả thi về mặt kinh tế trong dài hạn</strong>. Mặc dù có những thách thức đáng kể, đặc biệt là về chi phí đầu tư ban đầu, dữ liệu huấn luyện, và quản lý thay đổi, nhưng những thách thức này có thể được khắc phục với kế hoạch phù hợp.
          </p>
          <p>
            Với sự phát triển không ngừng của công nghệ AI và nhu cầu ngày càng tăng về các công cụ phát hiện văn bản AI trong giáo dục, giải pháp này có tiềm năng đáp ứng một nhu cầu thị trường quan trọng và đóng góp vào việc nâng cao chất lượng giáo dục tại Việt Nam.
          </p>
        </div>
      </section>
      
      <div className="flex justify-center gap-4 mt-8 mb-12">
        <ButtonLink href="/danh-gia" variant="outline">Quay lại Đánh giá</ButtonLink>
        <ButtonLink href="/khuyen-nghi">Xem khuyến nghị</ButtonLink>
      </div>
    </div>
  );
}
