import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";

export default function KhuyenNghi() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Khuyến nghị về phát hiện văn bản AI tiếng Việt</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Khuyến nghị tổng thể</h2>
        <p className="mb-4">
          Dựa trên kết quả nghiên cứu và đánh giá, chúng tôi đề xuất một loạt khuyến nghị cho các bên liên quan 
          trong việc phát hiện và quản lý văn bản AI tiếng Việt trong môi trường giáo dục. Các khuyến nghị này 
          nhằm mục đích tạo ra một cách tiếp cận cân bằng, vừa tận dụng lợi ích của công nghệ AI, vừa giảm thiểu 
          các tác động tiêu cực.
        </p>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Khuyến nghị cho giáo viên</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <Card className="bg-blue-50">
            <CardHeader>
              <CardTitle>Coi AI như trợ giảng, không phải mối đe dọa</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Thay vì coi AI là mối đe dọa, giáo viên nên xem AI như một công cụ trợ giảng có thể hỗ trợ học sinh 
                phát triển kỹ năng tư duy phản biện, nghiên cứu và viết lách.
              </p>
              <p>
                <strong>Hành động cụ thể:</strong>
              </p>
              <ul className="list-disc pl-6">
                <li>Tìm hiểu về các công cụ AI và cách chúng hoạt động</li>
                <li>Thử nghiệm sử dụng AI trong quá trình chuẩn bị bài giảng</li>
                <li>Chia sẻ kinh nghiệm sử dụng AI với đồng nghiệp</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-green-50">
            <CardHeader>
              <CardTitle>Đổi mới phương pháp đánh giá</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Thiết kế các bài tập và đánh giá yêu cầu sự sáng tạo, tư duy phản biện, và áp dụng kiến thức vào 
                tình huống cụ thể, khó có thể hoàn thành chỉ bằng cách sử dụng AI.
              </p>
              <p>
                <strong>Hành động cụ thể:</strong>
              </p>
              <ul className="list-disc pl-6">
                <li>Thiết kế bài tập dựa trên trải nghiệm cá nhân của học sinh</li>
                <li>Yêu cầu học sinh trình bày quá trình suy nghĩ và phát triển ý tưởng</li>
                <li>Tổ chức thảo luận nhóm và đánh giá đồng đẳng</li>
                <li>Kết hợp đánh giá trực tiếp (thuyết trình, phỏng vấn) với đánh giá viết</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-purple-50">
            <CardHeader>
              <CardTitle>Áp dụng quy trình 5 bước</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Áp dụng quy trình 5 bước đã đề xuất để phát hiện và xử lý văn bản AI một cách hiệu quả và công bằng.
              </p>
              <p>
                <strong>Hành động cụ thể:</strong>
              </p>
              <ol className="list-decimal pl-6">
                <li>Kiểm tra sơ bộ bằng công cụ phát hiện</li>
                <li>Đánh giá văn phong và so sánh với bài làm trước đây</li>
                <li>Đối chiếu nguồn và tìm kiếm trên Google</li>
                <li>Phỏng vấn nhanh người nộp bài</li>
                <li>Phân loại mức độ vi phạm và xử lý theo chính sách</li>
              </ol>
            </CardContent>
          </Card>
          
          <Card className="bg-yellow-50">
            <CardHeader>
              <CardTitle>Giáo dục về sử dụng AI có đạo đức</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Dạy học sinh cách sử dụng AI một cách có đạo đức, bao gồm khi nào và cách thức trích dẫn AI 
                một cách phù hợp.
              </p>
              <p>
                <strong>Hành động cụ thể:</strong>
              </p>
              <ul className="list-disc pl-6">
                <li>Tổ chức các buổi thảo luận về đạo đức sử dụng AI</li>
                <li>Cung cấp hướng dẫn cụ thể về cách trích dẫn AI</li>
                <li>Khuyến khích học sinh chia sẻ cách họ sử dụng AI trong học tập</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Khuyến nghị cho quản lý giáo dục</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <Card className="bg-blue-50">
            <CardHeader>
              <CardTitle>Xây dựng chính sách rõ ràng</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Phát triển chính sách rõ ràng về việc sử dụng AI trong học tập, bao gồm khi nào được phép sử dụng, 
                cách trích dẫn, và hậu quả của việc sử dụng không phù hợp.
              </p>
              <p>
                <strong>Hành động cụ thể:</strong>
              </p>
              <ul className="list-disc pl-6">
                <li>Thành lập nhóm công tác về AI trong giáo dục</li>
                <li>Tham khảo ý kiến của giáo viên, học sinh và chuyên gia</li>
                <li>Xây dựng và phổ biến chính sách đến tất cả các bên liên quan</li>
                <li>Định kỳ đánh giá và cập nhật chính sách</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-green-50">
            <CardHeader>
              <CardTitle>Đầu tư vào đào tạo giáo viên</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Cung cấp đào tạo cho giáo viên về AI, cách sử dụng các công cụ phát hiện văn bản AI, và 
                cách thiết kế bài tập phù hợp với thời đại AI.
              </p>
              <p>
                <strong>Hành động cụ thể:</strong>
              </p>
              <ul className="list-disc pl-6">
                <li>Tổ chức các khóa đào tạo về AI trong giáo dục</li>
                <li>Cung cấp tài liệu hướng dẫn và tài nguyên trực tuyến</li>
                <li>Tạo cộng đồng thực hành để chia sẻ kinh nghiệm</li>
                <li>Đưa AI vào chương trình đào tạo giáo viên</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-purple-50">
            <CardHeader>
              <CardTitle>Triển khai giải pháp theo giai đoạn</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Triển khai giải pháp phát hiện văn bản AI tiếng Việt theo giai đoạn, bắt đầu với các trường thí điểm 
                và mở rộng dần dựa trên phản hồi và kết quả.
              </p>
              <p>
                <strong>Hành động cụ thể:</strong>
              </p>
              <ul className="list-disc pl-6">
                <li>Chọn 3-5 trường thí điểm đại diện cho các cấp học khác nhau</li>
                <li>Triển khai giải pháp và thu thập phản hồi</li>
                <li>Điều chỉnh giải pháp dựa trên phản hồi</li>
                <li>Mở rộng triển khai theo lộ trình rõ ràng</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-yellow-50">
            <CardHeader>
              <CardTitle>Hợp tác với các bên liên quan</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Hợp tác với các trường đại học, viện nghiên cứu, và công ty công nghệ để phát triển và cải tiến 
                các công cụ phát hiện văn bản AI tiếng Việt.
              </p>
              <p>
                <strong>Hành động cụ thể:</strong>
              </p>
              <ul className="list-disc pl-6">
                <li>Thiết lập quan hệ đối tác với các trường đại học và viện nghiên cứu</li>
                <li>Tổ chức các cuộc thi và hackathon về phát hiện văn bản AI tiếng Việt</li>
                <li>Chia sẻ dữ liệu và kết quả nghiên cứu</li>
                <li>Tìm kiếm nguồn tài trợ cho nghiên cứu và phát triển</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Khuyến nghị cho học sinh và sinh viên</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <Card className="bg-blue-50">
            <CardHeader>
              <CardTitle>Sử dụng AI như công cụ hỗ trợ học tập</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Học cách sử dụng AI như một công cụ hỗ trợ học tập, không phải thay thế cho việc học và phát triển kỹ năng.
              </p>
              <p>
                <strong>Hành động cụ thể:</strong>
              </p>
              <ul className="list-disc pl-6">
                <li>Sử dụng AI để hiểu khái niệm phức tạp</li>
                <li>Dùng AI để tạo ý tưởng và lập dàn ý</li>
                <li>Sử dụng AI để kiểm tra và cải thiện bài viết</li>
                <li>Không sử dụng AI để tạo ra toàn bộ bài làm</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-green-50">
            <CardHeader>
              <CardTitle>Trích dẫn AI một cách phù hợp</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Học cách trích dẫn AI một cách phù hợp khi sử dụng nó trong bài làm, tương tự như cách trích dẫn các nguồn khác.
              </p>
              <p>
                <strong>Hành động cụ thể:</strong>
              </p>
              <ul className="list-disc pl-6">
                <li>Ghi rõ khi nào sử dụng AI để tạo nội dung</li>
                <li>Cung cấp thông tin về mô hình AI được sử dụng</li>
                <li>Nêu rõ cách thức sử dụng AI (prompt, chỉnh sửa, v.v.)</li>
                <li>Tuân thủ hướng dẫn trích dẫn của trường/giáo viên</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-purple-50">
            <CardHeader>
              <CardTitle>Phát triển kỹ năng không thể thay thế</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Tập trung phát triển các kỹ năng mà AI khó có thể thay thế, như tư duy phản biện, sáng tạo, và giải quyết vấn đề.
              </p>
              <p>
                <strong>Hành động cụ thể:</strong>
              </p>
              <ul className="list-disc pl-6">
                <li>Tham gia các hoạt động thảo luận nhóm</li>
                <li>Thực hành giải quyết vấn đề thực tế</li>
                <li>Phát triển kỹ năng viết dựa trên trải nghiệm cá nhân</li>
                <li>Rèn luyện khả năng phân tích và đánh giá thông tin</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-yellow-50">
            <CardHeader>
              <CardTitle>Hiểu rõ chính sách của trường</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Tìm hiểu và tuân thủ chính sách của trường về việc sử dụng AI trong học tập và làm bài.
              </p>
              <p>
                <strong>Hành động cụ thể:</strong>
              </p>
              <ul className="list-disc pl-6">
                <li>Đọc kỹ chính sách của trường về sử dụng AI</li>
                <li>Hỏi giáo viên khi không chắc chắn về việc sử dụng AI</li>
                <li>Tham gia các buổi thảo luận về đạo đức sử dụng AI</li>
                <li>Chia sẻ hiểu biết với bạn bè và đồng học</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Khuyến nghị cho nhà phát triển công nghệ</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <Card className="bg-blue-50">
            <CardHeader>
              <CardTitle>Tối ưu hóa cho tiếng Việt</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Tập trung vào việc tối ưu hóa các mô hình và công cụ phát hiện văn bản AI cho tiếng Việt, 
                đặc biệt chú ý đến các đặc điểm ngôn ngữ học đặc thù.
              </p>
              <p>
                <strong>Hành động cụ thể:</strong>
              </p>
              <ul className="list-disc pl-6">
                <li>Thu thập dữ liệu huấn luyện chất lượng cao cho tiếng Việt</li>
                <li>Phát triển các kỹ thuật phân tích đặc trưng ngôn ngữ học tiếng Việt</li>
                <li>Tối ưu hóa mô hình PhoBERT cho nhiệm vụ phát hiện văn bản AI</li>
                <li>Thử nghiệm với nhiều loại văn bản tiếng Việt khác nhau</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-green-50">
            <CardHeader>
              <CardTitle>Phát triển công cụ minh bạch</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Phát triển các công cụ phát hiện văn bản AI minh bạch, có thể giải thích được, và cung cấp 
                thông tin chi tiết về cách thức hoạt động và hạn chế.
              </p>
              <p>
                <strong>Hành động cụ thể:</strong>
              </p>
              <ul className="list-disc pl-6">
                <li>Cung cấp giải thích chi tiết cho kết quả phát hiện</li>
                <li>Công bố thông tin về độ chính xác và hạn chế của công cụ</li>
                <li>Phát triển giao diện người dùng thân thiện và dễ hiểu</li>
                <li>Cung cấp tài liệu hướng dẫn đầy đủ</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-purple-50">
            <CardHeader>
              <CardTitle>Hợp tác với giáo dục</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Hợp tác chặt chẽ với các tổ chức giáo dục để hiểu nhu cầu và thách thức của họ, 
                đồng thời cung cấp giải pháp phù hợp.
              </p>
              <p>
                <strong>Hành động cụ thể:</strong>
              </p>
              <ul className="list-disc pl-6">
                <li>Tổ chức các buổi lắng nghe ý kiến từ giáo viên và quản lý giáo dục</li>
                <li>Phát triển các tính năng dựa trên phản hồi từ người dùng</li>
                <li>Cung cấp đào tạo và hỗ trợ kỹ thuật</li>
                <li>Tham gia các hội thảo và diễn đàn về giáo dục</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-yellow-50">
            <CardHeader>
              <CardTitle>Cân nhắc đạo đức</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Cân nhắc các vấn đề đạo đức trong quá trình phát triển công cụ phát hiện văn bản AI, 
                bao gồm quyền riêng tư, công bằng, và trách nhiệm.
              </p>
              <p>
                <strong>Hành động cụ thể:</strong>
              </p>
              <ul className="list-disc pl-6">
                <li>Thành lập hội đồng đạo đức để đánh giá sản phẩm</li>
                <li>Kiểm tra và giảm thiểu thiên kiến trong mô hình</li>
                <li>Bảo vệ quyền riêng tư của người dùng</li>
                <li>Phát triển các biện pháp bảo mật mạnh mẽ</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Lộ trình thực hiện khuyến nghị</h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 mb-6">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Giai đoạn</th>
                <th className="py-2 px-4 border-b">Thời gian</th>
                <th className="py-2 px-4 border-b">Hoạt động chính</th>
                <th className="py-2 px-4 border-b">Bên chịu trách nhiệm</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">Ngắn hạn</td>
                <td className="py-2 px-4 border-b">0-6 tháng</td>
                <td className="py-2 px-4 border-b">
                  <ul className="list-disc pl-6">
                    <li>Xây dựng chính sách sử dụng AI</li>
                    <li>Đào tạo giáo viên về AI</li>
                    <li>Triển khai thí điểm công cụ phát hiện</li>
                  </ul>
                </td>
                <td className="py-2 px-4 border-b">Quản lý giáo dục, Giáo viên</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Trung hạn</td>
                <td className="py-2 px-4 border-b">6-18 tháng</td>
                <td className="py-2 px-4 border-b">
                  <ul className="list-disc pl-6">
                    <li>Mở rộng triển khai công cụ phát hiện</li>
                    <li>Đổi mới phương pháp đánh giá</li>
                    <li>Phát triển tài liệu hướng dẫn</li>
                    <li>Tối ưu hóa mô hình dựa trên phản hồi</li>
                  </ul>
                </td>
                <td className="py-2 px-4 border-b">Quản lý giáo dục, Giáo viên, Nhà phát triển</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Dài hạn</td>
                <td className="py-2 px-4 border-b">18-36 tháng</td>
                <td className="py-2 px-4 border-b">
                  <ul className="list-disc pl-6">
                    <li>Triển khai rộng rãi giải pháp toàn diện</li>
                    <li>Tích hợp AI vào chương trình giảng dạy</li>
                    <li>Phát triển các công cụ thế hệ tiếp theo</li>
                    <li>Đánh giá tác động và điều chỉnh</li>
                  </ul>
                </td>
                <td className="py-2 px-4 border-b">Tất cả các bên liên quan</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Kết luận</h2>
        
        <div className="bg-blue-100 p-6 rounded-lg">
          <p className="mb-4">
            AI đang và sẽ tiếp tục thay đổi cách chúng ta dạy và học. Thay vì chỉ tập trung vào việc phát hiện và ngăn chặn 
            việc sử dụng AI, chúng ta nên coi đây là cơ hội để đổi mới giáo dục, phát triển các kỹ năng mới, và chuẩn bị 
            cho học sinh tương lai trong thời đại AI.
          </p>
          <p className="mb-4">
            Giải pháp toàn diện phát hiện văn bản AI tiếng Việt không chỉ là một công cụ kỹ thuật, mà còn là một phần của 
            hệ sinh thái giáo dục rộng lớn hơn, bao gồm chính sách, quy trình, đào tạo, và thay đổi tư duy.
          </p>
          <p>
            Bằng cách áp dụng các khuyến nghị này, các bên liên quan có thể cùng nhau xây dựng một môi trường giáo dục 
            nơi AI được sử dụng một cách có đạo đức, hiệu quả, và hỗ trợ cho việc học tập và phát triển của học sinh.
          </p>
        </div>
      </section>
      
      <div className="flex justify-center gap-4 mt-8 mb-12">
        <ButtonLink href="/kha-thi" variant="outline">Quay lại Tính khả thi</ButtonLink>
        <ButtonLink href="/" variant="outline">Về trang chủ</ButtonLink>
      </div>
    </div>
  );
}
