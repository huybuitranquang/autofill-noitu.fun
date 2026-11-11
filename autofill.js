"auto";
auto.waitFor();

var CURATED_VTV = [
  "nam cực|vùng đất lạnh giá băng tuyết điểm cực nam trái đất",
  "bắc cực|vùng băng tuyết lạnh giá điểm cực bắc trái đất",
  "nam cao|nhà văn hiện thực tác giả chí phèo lão hạc",
  "lừa gạt|dùng lời nói hành vi đánh lừa người khác",
  "lẽo đẽo|đi theo sát phía sau không rời",
  "lùng bắt|truy tìm ráo riết để bắt giữ",
  "sao lưu|tạo bản sao dữ liệu dự phòng máy tính",
  "lưu thông|di chuyển qua lại thuận lợi tiền tệ hàng hóa",
  "lưu trữ|cất giữ bảo quản tài liệu dữ liệu lâu dài",
  "lưu hành|được phép dùng rộng rãi chính thức",
  "lưu niệm|giữ lại làm kỷ niệm đáng nhớ",
  "lưu luyến|bịn rịn quyến luyến không nỡ rời xa",
  "lưu giữ|giữ gìn bảo tồn không để mất",
  "hạnh phúc|trạng thái vui vẻ mãn nguyện sung sướng",
  "hạnh kiểm|phẩm chất đạo đức tư cách học sinh",
  "hạnh nhân|hạt quả cây hạnh dùng làm thực phẩm",
  "đức hạnh|đạo đức phẩm hạnh tốt đẹp con người",
  "bất hạnh|không may mắn gặp điều đau khổ",
  "vinh hạnh|tự hào may mắn vinh dự đón nhận",
  "hân hạnh|vui mừng lấy làm vinh dự gặp gỡ",
  "phúc hậu|hiền từ giàu lòng thương người",
  "phúc đức|điều tốt lành do ăn ở hiền lành",
  "phúc lợi|quyền lợi vật chất tinh thần tập thể",
  "tâm huyết|tấm lòng tha thiết hết mình công việc",
  "tâm đắc|rất lấy làm ưng ý thấm thía",
  "tâm sự|nỗi lòng thầm kín chia sẻ cùng nhau",
  "tâm lý|trạng thái tinh thần ý nghĩ tình cảm",
  "tâm hồn|thế giới nội tâm tình cảm con người",
  "tâm linh|thiêng liêng tín ngưỡng tôn giáo",
  "thiện tâm|lòng tốt luôn hướng về điều thiện",
  "lương tâm|ý thức đạo đức tự phán xét đúng sai",
  "tận tâm|hết lòng hết sức vì công việc",
  "quyết tâm|ý chí kiên định hướng tới mục tiêu",
  "đồng tâm|cùng chung một lòng một ý chí",
  "yên tâm|không còn lo lắng băn khoăn",
  "quan tâm|chú ý chăm sóc thường xuyên",
  "trung tâm|vị trí ở giữa nơi tập trung chính",
  "nhân ái|yêu thương con người giàu lòng trắc ẩn",
  "nhân hậu|hiền lành giàu lòng thương người",
  "nhân từ|khoan dung độ lượng thương người",
  "nhân đạo|tôn trọng bảo vệ con người",
  "nhân cách|phẩm chất đạo đức giá trị một người",
  "nhân phẩm|giá trị tinh thần làm nên con người",
  "nhân tài|người có tài năng xuất sắc",
  "nhân dân|đông đảo người dân đất nước",
  "nhân loại|toàn thể loài người thế giới",
  "nhân viên|người làm việc trong cơ quan tổ chức",
  "nhân chứng|người chứng kiến sự việc xảy ra",
  "nhân vật|đối tượng được miêu tả trong tác phẩm",
  "công nhân|người lao động ngành công nghiệp nhà máy",
  "nông dân|người làm nghề nông ruộng đồng",
  "bệnh nhân|người đang điều trị bệnh viện",
  "vĩ nhân|người có công lao tài năng vĩ đại",
  "ân nhân|người có ơn giúp đỡ lớn",
  "học tập|rèn luyện thu nhận kiến thức kỹ năng",
  "học hành|học và thực hành kiến thức",
  "học hỏi|tìm tòi hỏi han để biết thêm",
  "học sinh|người đang theo học trường phổ thông",
  "học giả|nhà nghiên cứu có tri thức uyên bác",
  "học bổng|khoản tiền thưởng khuyến khích học tập",
  "đại học|bậc học cao sau trung học phổ thông",
  "tiểu học|bậc học đầu tiên hệ thống giáo dục",
  "trung học|bậc học giữa tiểu học và đại học",
  "tự học|tự mình rèn luyện tìm hiểu kiến thức",
  "du học|đi học tập đào tạo ở nước ngoài",
  "khoa học|hệ thống tri thức quy luật tự nhiên xã hội",
  "văn học|nghệ thuật ngôn từ phản ánh cuộc sống",
  "toán học|khoa học nghiên cứu số lượng hình học",
  "trí tuệ|khả năng nhận thức suy xét sáng tạo",
  "trí thức|người lao động trí óc có chuyên môn",
  "trí nhớ|khả năng ghi nhớ lưu giữ thông tin",
  "thông minh|nhạy bén lanh lợi hiểu nhanh",
  "sáng tạo|tạo ra giá trị mới vật chất tinh thần",
  "tài năng|năng lực xuất sắc trong một lĩnh vực",
  "thiên tài|người có tài năng bẩm sinh kiệt xuất",
  "trạng nguyên|danh hiệu đỗ đầu khoa thi đình phong kiến",
  "bảng nhãn|danh hiệu đỗ thứ hai kỳ thi đình",
  "thám hoa|danh hiệu đỗ thứ ba kỳ thi đình",
  "quốc gia|đất nước có chủ quyền lãnh thổ riêng",
  "quốc tế|quan hệ giữa các nước thế giới",
  "quốc kỳ|lá cờ tượng trưng cho một đất nước",
  "quốc ca|bài hát chính thức của một quốc gia",
  "quốc hội|cơ quan quyền lực nhà nước cao nhất",
  "quốc phòng|giữ gìn bảo vệ đất nước biên cương",
  "tổ quốc|đất nước nơi ông cha xây dựng truyền lại",
  "gia đình|cha mẹ con cái gắn bó hôn nhân huyết thống",
  "gia phả|sổ ghi chép các thế hệ dòng họ",
  "bình yên|yên ổn không có biến động nguy hiểm",
  "bình an|yên lành khỏe mạnh không gặp trắc trở",
  "bình tĩnh|giữ được sự điềm tĩnh trước biến cố",
  "bình đẳng|ngang hàng nhau về quyền lợi nghĩa vụ",
  "bình minh|lúc mặt trời mới mọc buổi sáng",
  "hoàng hôn|lúc mặt trời lặn vào buổi chiều tà",
  "hòa bình|trạng thái không có chiến tranh êm ấm",
  "công bằng|đúng đắn không thiên vị bên nào",
  "an toàn|không có nguy hiểm rủi ro",
  "an ninh|sự ổn định trật tự xã hội",
  "dũng cảm|có dũng khí dám đối mặt nguy hiểm",
  "kiên cường|vững vàng không khuất phục gian khó",
  "kiên trì|bền bỉ theo đuổi đến cùng",
  "kiên nhẫn|nhẫn nại không nóng vội",
  "đoàn kết|kết thành khối thống nhất chung sức",
  "kết đoàn|gắn kết lại thành một khối vững chắc",
  "kết quả|thành tựu đạt được sau quá trình",
  "cam kết|hứa hẹn thực hiện chắc chắn",
  "thương yêu|tình cảm gắn bó chăm sóc tha thiết",
  "yêu thương|dành tình cảm nồng ấm cho người vật",
  "thương mại|hoạt động mua bán trao đổi hàng hóa",
  "quê hương|nơi chôn nhau cắt rốn sinh ra lớn lên",
  "hiếu thảo|kính trọng chăm sóc phụng dưỡng cha mẹ",
  "trung thực|ngay thẳng thật thà không gian dối",
  "uy tín|sự tin cậy kính trọng của mọi người",
  "tự tin|tin tưởng vào khả năng bản thân",
  "tự hào|hãnh diện về điều tốt đẹp",
  "tự lập|tự lo liệu công việc không ỷ lại",
  "tự do|không bị ràng buộc giam cầm",
  "lao động|làm việc tạo ra của cải vật chất",
  "chăm chỉ|cần cù siêng năng làm việc",
  "cần cù|chăm chỉ chịu khó một cách bền bỉ",
  "siêng năng|thường xuyên làm việc không lười biếng",
  "nỗ lực|cố gắng hết sức mình vượt khó",
  "thành công|đạt được kết quả mục đích như dự định",
  "công nghệ|phương pháp kỹ thuật sản xuất hiện đại",
  "cống hiến|tự nguyện đóng góp sức lực tài năng",
  "thiên nhiên|giới tự nhiên cây cối sông núi",
  "môi trường|không gian sống của con người sinh vật",
  "khí hậu|thời tiết đặc trưng của một vùng",
  "bảo vệ|giữ gìn chống lại sự tổn hại",
  "bảo tồn|giữ gìn nguyên vẹn di sản tự nhiên",
  "phát triển|biến đổi theo hướng tiến bộ lớn mạnh",
  "văn minh|trình độ phát triển cao vật chất tinh thần",
  "văn hóa|giá trị vật chất tinh thần xã hội",
  "lịch sử|quá trình phát triển qua các thời kỳ",
  "truyền thống|thói quen đạo lý tốt đẹp lưu truyền",
  "tương lai|thời gian sắp tới phía trước",
  "hiện đại|thuộc về thời đại ngày nay tiên tiến",
  "xán lạn|rực rỡ tươi sáng đầy triển vọng",
  "sáp nhập|nhập hai hay nhiều đơn vị làm một",
  "chẩn đoán|xác định bệnh dựa trên triệu chứng",
  "xoay xở|tìm mọi cách giải quyết khó khăn",
  "trau chuốt|sửa sang gọt giũa tỉ mỉ cho đẹp",
  "dành dụm|tích góp tiết kiệm từng chút một",
  "giành giật|tranh lấy về phần mình",
  "bàng hoàng|sững sờ choáng váng trước tin bất ngờ",
  "súc tích|ngắn gọn mà hàm chứa nhiều ý sâu sắc",
  "xuất sắc|đạt mức giỏi vượt trội hẳn lên",
  "bổ sung|thêm vào cho đầy đủ hơn",
  "chính xác|đúng đắn hoàn toàn không sai lệch",
  "lãng mạn|giàu chất thơ bay bổng tình cảm",
  "khắt khe|đòi hỏi nghiêm ngặt quá mức",
  "buồn tênh|buồn nhẹ nhàng mà thấm thía trống trải",
  "lung linh|ánh sáng phản chiếu lấp lánh huyền ảo",
  "rực rỡ|sáng chói tươi đẹp nổi bật",
  "long lanh|trong suốt ánh lên vẻ tinh khiết",
  "mênh mông|rộng lớn như không có bến bờ",
  "bao la|rộng lớn vô cùng tận",
  "nhỏ nhắn|nhỏ và trông xinh xắn cân đối",
  "mạnh mẽ|có sức mạnh và sự quyết đoán",
  "vững vàng|chắc chắn không dễ bị lay chuyển",
  "vững chãi|chắc chắn kiên cố trước sóng gió",
  "dịu dàng|êm ái nhẹ nhàng gây thiện cảm",
  "trong sáng|thuần khiết không vẩn đục",
  "nghề nghiệp|công việc chuyên môn gắn bó sinh sống",
  "gồ ghề|lồi lõm mấp mô không bằng phẳng",
  "kỷ niệm|dấu ấn đáng nhớ lưu giữ trong ký ức",
  "sạch sẽ|không có bụi bẩn gọn gàng tinh tươm",
  "chững chạc|đàng hoàng chín chắn trong cử chỉ"
];

var DICT_PACK_1 = "nam cực|bắc cực|nam cao|lẽo đẽo|lùng bắt|sao lưu|lưu thông|lưu trữ|lưu hành|lưu niệm|lưu luyến|lưu giữ|hạnh phúc|hạnh kiểm|hạnh nhân|đức hạnh|bất hạnh|vinh hạnh|hân hạnh|phúc hậu|phúc đức|phúc lợi|tâm huyết|tâm đắc|tâm sự|tâm lý|tâm hồn|tâm linh|thiện tâm|lương tâm|tận tâm|quyết tâm|đồng tâm|yên tâm|quan tâm|trung tâm|nhân ái|nhân hậu|nhân từ|nhân đạo|nhân cách|nhân phẩm|nhân tài|nhân dân|nhân loại|nhân viên|nhân chứng|nhân vật|công nhân|nông dân|bệnh nhân|vĩ nhân|ân nhân|học tập|học hành|học hỏi|học sinh|học giả|học bổng|đại học|tiểu học|trung học|tự học|du học|khoa học|văn học|toán học|trí tuệ|trí thức|trí nhớ|thông minh|sáng tạo|tài năng|thiên tài|trạng nguyên|bảng nhãn|thám hoa|quốc gia|quốc tế|quốc kỳ|quốc ca|quốc hội|quốc phòng|tổ quốc|gia đình|gia phả|bình yên|bình an|bình tĩnh|bình đẳng|bình minh|hoàng hôn|hòa bình|công bằng|an toàn|an ninh|dũng cảm|kiên cường|kiên trì|kiên nhẫn|đoàn kết|kết đoàn|kết quả|cam kết|thương yêu|yêu thương|thương mại|quê hương|hiếu thảo|trung thực|uy tín|tự tin|tự hào|tự lập|tự do|lao động|chăm chỉ|cần cù|siêng năng|nỗ lực|thành công|công nghệ|cống hiến|thiên nhiên|môi trường|khí hậu|bảo vệ|bảo tồn|phát triển|văn minh|văn hóa|lịch sử|truyền thống|tương lai|hiện đại|xán lạn|sáp nhập|chẩn đoán|xoay xở|trau chuốt|dành dụm|giành giật|bàng hoàng|súc tích|xuất sắc|bổ sung|chính xác|lãng mạn|khắt khe|buồn tênh|lung linh|rực rỡ|long lanh|mênh mông|bao la|nhỏ nhắn|mạnh mẽ|vững vàng|vững chãi|dịu dàng|trong sáng|nghề nghiệp|gồ ghề|kỷ niệm|sạch sẽ|chững chạc|tếu táo|tỉnh táo|táo bạo|táo tợn|tần tảo|tất tả|tơi tả|tơi bời|tủm tỉm|tủn mủn|tùn mùn|tưng bừng|tưng tửng|tửng tưng|tấp nập|tấp tểnh|tập tễnh|tập tành|tập tọng|tần ngần|tẩn mẩn|tẩn ngẩn|tất bật|tất tật|tầm ngầm|tầm phào|tềnh toàng|tênh hênh|thấp thoáng|thấp thỏm|thập thò|thẫn thờ|thẩn thơ|thơ thẩn|thờ thẫn|thổn thức|thồn thột|thông thống|nhấp nhô|nhấp nháy|nhấp nhỏm|nhập nhằng|nhập nhoạng|nhập nhèm|nhẫn nại|nhẫn nhịn|nhẫn nhục|nhẩn nha|nhởn nhơ|nhộn nhịp|nhốn nháo|nhốn nhăng|ngập ngừng|ngấp nghé|ngất ngưởng|ngất ngây|ngật ngưỡng|ngơ ngác|ngơ ngẩn|ngỡ ngàng|ngờ nghệch|ngớ ngẩn|ngượng ngùng|ngượng nghịu|ngoằn ngoèo|nguệch ngoạc|khập khiễng|khấp khởi|khắc khoải|khẳng khiu|khăng khăng|khăng khít|khệ nệ|khệnh khạng|khờ khạo|khúm núm|khúc khích|khuỳnh khoàng|chập chững|chập chờn|chấp chới|chật vật|chần chừ|chậm chạp|chăm chút|chắc chắn|chặt chẽ|chênh vênh|chênh lệch|chệch choạc|chùng chình|bâng khuâng|bập bùng|bấp bênh|bận bịu|băn khoăn|bẳn gắt|bần thần|bần cùng|bối rối|bồn chồn|bồi hồi|bỡ ngỡ|bơ vơ|bơ phờ|bờm xờm|dập dìu|dập dềnh|dập dờn|dè dặt|dễ dàng|dõng dạc|dồn dập|dư dả|dữ dội|dữ dằn|duyên dáng|dềnh dàng|dở dang|dặt dẹo|đăm đăm|đăm chiêu|đằm thắm|đắn đo|đằng đẵng|đẫm lệ|đậm đà|đầy đặn|đầy ắp|đĩnh đạc|điềm đạm|điềm tĩnh|đàng hoàng|đồ sộ|đông đúc|gập ghềnh|gọn gàng|gắt gỏng|gắt gao|gượng gạo|gần gũi|gấp gáp|gật gù|ghê gớm|giản dị|giận dữ|giỏi giang|giòn giã|giục giã|hấp tấp|hấp dẫn|hậm hực|hẫng hụt|hăng hái|hẳn hoi|hắt hiu|héo hon|héo hắt|hiền hòa|hiền hậu|hiền lành|hoang mang|hoảng hốt|hớn hở|hồi hộp|hờ hững|lấp lánh|lấp lửng|lấp ló|lập lòe|lập cập|lật đật|lầm lì|lầm lũi|lẩm bẩm|lẩn thẩn|lặng lẽ|lạnh lùng|lạnh lẽo|lỏng lẻo|lóng ngóng|lúng túng|lững thững|lững lờ|mấp mô|mập mờ|mập mạp|mặn mà|mát mẻ|may mắn|mềm mại|mệt mỏi|mênh mang|miên man|mỉm cười|mộc mạc|mơ màng|mơ mộng|mờ mịt|muộn màng|náo nức|náo nhiệt|năn nỉ|nặng nề|nặng nhọc|ngăn nắp|ngắn ngủi|ngọt ngào|nhẹ nhàng|nhỏ nhẹ|nhanh nhẹn|nhịp nhàng|nhút nhát|nồng nàn|nức nở|óng ánh|óng ả|ồn ào|ổn định|phấp phỏng|phấp phới|phập phồng|phấn khởi|phờ phạc|phơi phới|quanh quẩn|quấn quýt|quạnh quẽ|quây quần|rạng rỡ|rạo rực|rầm rộ|rập rình|rộn ràng|rụt rè|sẵn sàng|sắc sảo|sặc sỡ|sầm uất|sâu sắc|sốt sắng|sững sờ|suôn sẻ|tha thiết|thật thà|thênh thang|thì thầm|thong thả|thơm tho|thướt tha|tỉ mỉ|tĩnh lặng|tươi tắn|ung dung|uyển chuyển|vắng vẻ|vất vả|vội vàng|vội vã|vồ vập";
var DICT_PACK_2 = "vồn vã|vụng về|vuông vắn|xa xôi|xa xăm|xao xuyến|xinh xắn|xinh đẹp|xôn xao|xối xả|xúm xít|yên ả|yên bình|yên tĩnh|yểu điệu|hoa hồng|hoa sen|hoa mai|hoa đào|hoa cúc|hoa lan|hoa quả|hoa hậu|hoa mắt|hoa tay|hoa văn|hoa lệ|hoa mỹ|hoa tiêu|hoa viên|phấn hoa|nước hoa|pháo hoa|thăng hoa|tinh hoa|tài hoa|ấm áp|ấm cúng|ấm êm|ấm no|ẩn dật|ẩn chứa|ẩn hiện|ẩn nấp|ẩn náu|ấn tượng|ấp ủ|ấu thơ|ác độc|ác cảm|ác liệt|ác mộng|ái mộ|ái ngại|am hiểu|ám ảnh|an bài|an cư|an dưỡng|an ủi|an lành|an nhàn|an phận|anh dũng|anh em|anh hùng|anh minh|anh tài|ánh nắng|ánh sáng|ánh trăng|ảo ảnh|ảo giác|ảo tưởng|áp dụng|áp đặt|áp lực|ăn học|ăn mặc|ăn năn|ăn nói|ăn ở|ăn uống|âm hưởng|âm mưu|âm nhạc|âm thầm|âm thanh|bạc bẽo|bách khoa|bài bản|bài học|bài toán|bài văn|bàn bạc|bánh dày|bảo an|bất an|bất tiện|bệnh tật|biển khơi|biểu tượng|bồi thường|bồng bềnh|bưu điện|cải cách|cảm thông|cảnh quan|cáo chung|cắn rứt|cấu kết|chạng vạng|chặn đứng|chất lỏng|chế ngự|chỉ tiêu|chiến thắng|chính thống|chơi thân|chung thủy|chúc thọ|chuyển tiếp|con số|công ích|công ty|cội nguồn|cơ trưởng|cử nhân|cười đùa|dạn dĩ|dạy dỗ|dễ thương|diễn đàn|dời đổi|dưỡng chất|đa đoan|đại lục|đàn anh|đánh dấu|đạo luật|đăng ký|đậm nét|đầu tiên|đề bạt|êm thấm|kế cận|kết nối|khen thưởng|khoan nhượng|khổng lồ|khuyên can|kịch tính|kiều diễm|kinh điển|kính trọng|kỷ nguyên|lạ mặt|lãnh đạm|lăm le|lấn át|lênh láng|liên kết|linh tinh|lòng thương|lơ lửng|lớp học|luận giải|lường gạt|lưu loát|mã hóa|man dại|mát dịu|mặc cả|mất giá|mây mưa|miễn dịch|mô phạm|mở mang|mục tiêu|mưu trí|nan y|năng lực|nền tảng|nghiêng mình|nghỉ ngơi|ngờ vực|nguồn cội|nguyên tắc|ngữ cảnh|ngưỡng cửa|nhà máy|nhạc trưởng|nhẵn nhụi|nhập viện|nhỏ tuổi|nhung lụa|oai phong|ốm yếu|ở ẩn|phái đoàn|phản động|pháp quyền|phẳng phiu|phân phát|phấn son|phiên tòa|phía tây|phong trào|phóng đại|phơi nắng|phụ lục|phục kích|phương trình|quá mức|quan điểm|quang vinh|quân cảnh|quân phiệt|quẫn trí|quê kệch|quốc sắc|quy kết|quý hóa|quyền quý|rà soát|rảnh tay|răn dạy|réo rắt|rong ruổi|rốt cuộc|rúc rích|ruột non|rượu cần|sai sót|sang sông|sánh vai|sát thủ|săn lùng|sắp tới|sâu độc|si mê|sinh động|sinh tố|sóng gió|sơ sinh|sơn cước|suy luận|súng ống|sửa soạn|ta thán|tác oai|tài nguyên|tái xuất|tạm giam|tàn cuộc|tán đồng|tạo hóa|tay chơi|tặng phẩm|tân gia|tận tụy|tấc đất|tệ nạn|thái độ|tham chiếu|thanh bình|thanh thản|thành nhân|thánh hiền|tháp canh|thắng lợi|thâm sâu|thấm mệt|thân thuộc|thần tiên|thất kinh|thấu cảm|thê lương|thế tục|thể xác|thiên ân|thiên niên|thiện ác|thiệt hại|thính giác|thị vệ|thoái vị|thô sơ|thôn tính|thông tấn|thờ tự|thời khắc|thợ cả|thu lượm|thù lao|thủ tiêu|thua kém|thuận lòng|thuế khóa|thư phòng|thừa kế|thực học|thương cảng|thương vụ|thượng cấp|thượng viện|tinh nhạy|tình huống|tỉnh lẻ|tịnh độ|toàn bài|toàn trường|tối mịt|tôn quý|tổng đốc|tốt giống|tới lui|tương khắc|tướng số|tu thân|tuân chỉ|tuổi già|tùy thân|tuyết trắng|tự ái|tự mãn|tự tôn|tư nhân|từ ngữ|tử số|uổng công|uy nghiêm|ứng dụng|ước vọng|vào đời|vang bóng|văn công|văn võ|vận động|vật cản|vẫy gọi|về sau|vỉa hè|võ bị|vòm trời|vô bổ|vô kể|vô song|vỗ ngực|vơi đầy|vụ án|vun đắp|vượt cấp|vương triều|vừa ý|xa quê|xác đáng|xăm xoi|xấu xí|xe tang|xét xử|xì xào|xơ cứng|xô đẩy|xung kích|xuống tay|xuất hành|xuất xứ|xứng tên|xử tử|yên nghỉ|yêu người|y nguyên|ỷ lại|lắc lẻo|lễ mễ|lồ lộ|lửng thửng|biên thùy|chìm ngập|cốt nhục|dư địa|đặn dò|khiết tịnh|lâu la|lợt lạt|man di|một thời|nghiệp chướng|nhà vệ|những ai|phà hơi|phát tiết|phiêu diêu|phú hào|quàng xiên|quốc quân|rang muối|còi cọc|sài gòn|siêu trường|suy dinh|tài phán|tang bồng|tâm điểm|tập hậu|thảm thực|thành tín|thăng đường|thần vị|theo đòi|thiên sản|thổ hào|thông thiên|thù trong|thứ nữ|thượng du|tình phụ|tổng phổ|tưởng rằng|từ huấn|vạnh vọ|vỏ trứng|vông nem|xằm xặp|xút ăn";

var SYLLABLE_CLUES = {
  "cực": "lạnh giá băng tuyết điểm bắc nam trái đất giới hạn tối đa",
  "bắc": "phương hướng lạnh băng tuyết cực",
  "nam": "phương hướng cực đất nước",
  "đông": "mặt trời mọc mùa lạnh",
  "tây": "mặt trời lặn phương hướng",
  "hàn": "lạnh giá rét buốt gắn",
  "nhiệt": "nóng ấm lửa độ đới",
  "hải": "biển đảo nước mặn tàu thuyền",
  "sơn": "núi đồi rừng cao",
  "thủy": "nước sông biển chất lỏng",
  "hỏa": "lửa cháy nóng tàu",
  "phong": "gió bão cảnh tục",
  "vân": "mây trời đường nét",
  "vũ": "mưa gió múa bầu trời không gian",
  "địa": "đất đai mặt đất trái đất vùng",
  "thiên": "trời bầu trời tự nhiên vũ trụ",
  "nhật": "mặt trời ngày ban ngày",
  "nguyệt": "mặt trăng đêm trăng",
  "tinh": "ngôi sao bầu trời sáng чисто",
  "nhân": "người con người lòng thương",
  "tâm": "lòng trái tim suy nghĩ tình cảm",
  "trí": "óc não suy nghĩ hiểu biết khôn",
  "đức": "phẩm chất tốt đẹp đạo lý",
  "tài": "giỏi năng lực tiền của",
  "học": "trường lớp kiến thức đọc sách thầy trò",
  "văn": "chữ viết sách thơ nghệ thuật đẹp",
  "võ": "chiến đấu sức mạnh拳 quân sự",
  "quốc": "đất nước nhà nước dân tộc",
  "gia": "nhà đình dòng họ",
  "dân": "người dân quần chúng",
  "bình": "yên ổn ngang bằng êm ả",
  "an": "yên lành không nguy hiểm",
  "hòa": "êm ấm không chiến tranh hợp lại",
  "phúc": "may mắn vui sướng tốt lành",
  "lộc": "may mắn tiền tài chồi non",
  "thọ": "sống lâu tuổi già",
  "dũng": "gan dạ mạnh mẽ không sợ",
  "kiên": "vững vàng bền bỉ không bỏ cuộc",
  "cường": "mạnh mẽ khỏe lớn",
  "đoàn": "nhóm tập thể hợp lại",
  "kết": "nối lại gắn bó thành quả",
  "thương": "yêu quý đau xót buôn bán",
  "ái": "yêu thương tình cảm",
  "hiếu": "cha mẹ kính trọng ham thích",
  "trung": "thật thà ngay thẳng ở giữa",
  "tín": "tin tưởng giữ lời hứa",
  "nghĩa": "lẽ phải tình cảm gắn bó",
  "lễ": "nghi thức kính trọng phép tắc",
  "lao": "làm việc vất vả sức lực",
  "động": "di chuyển hoạt động không đứng yên",
  "tĩnh": "đứng yên lặng lẽ không ồn",
  "thành": "xong đạt được bức tường đô thị",
  "công": "việc làm sức lực chung không tư",
  "phát": "mở ra lớn lên đưa ra",
  "triển": "mở rộng tiến lên",
  "bảo": "giữ gìn che chở quý giá",
  "vệ": "giữ gìn che chở bảo vệ",
  "lưu": "giữ lại chảy đi truyền lại",
  "thông": "suốt qua lại hiểu biết",
  "trữ": "cất giữ tích góp",
  "sao": "chép lại ngôi sao trên trời",
  "lùng": "tìm kiếm ráo riết khắp nơi",
  "bắt": "giữ lấy nắm lấy không cho thoát",
  "lẽo": "đi theo sau bám theo",
  "đẽo": "gọt gỗ đi theo sát"
};

var WRONG_WORDS_MAP = {
  "lung băt": "lùng bắt", "lùng bặc": "lùng bắt", "lung bắt": "lùng bắt", "dùng bắt": "lùng bắt", "lùng băt": "lùng bắt",
  "sán lạn": "xán lạn", "xáng lạng": "xán lạn", "sáng lạng": "xán lạn",
  "sát nhập": "sáp nhập", "xáp nhập": "sáp nhập", "xát nhập": "sáp nhập",
  "chuẩn đoán": "chẩn đoán", "trẩn đoán": "chẩn đoán", "chuẩn đoáng": "chẩn đoán",
  "xoay sở": "xoay xở", "soay sở": "xoay xở", "soay xở": "xoay xở",
  "chau chuốt": "trau chuốt", "trau truốt": "trau chuốt", "chau truốt": "trau chuốt",
  "giành dụm": "dành dụm", "rành dụm": "dành dụm", "dành giụm": "dành dụm",
  "bàn hoàng": "bàng hoàng", "bàng hoàn": "bàng hoàng", "bàn hoàn": "bàng hoàng",
  "suất sắc": "xuất sắc", "xuất xắc": "xuất sắc", "suất xắc": "xuất sắc",
  "bổ xung": "bổ sung", "bỗ sung": "bổ sung", "bỗ xung": "bổ sung",
  "lãng mạng": "lãng mạn", "lảng mạn": "lãng mạn", "lảng mạng": "lãng mạn",
  "khắc khe": "khắt khe", "khắt ke": "khắt khe", "khắc ke": "khắt khe",
  "buồn thênh": "buồn tênh", "buồn tên": "buồn tênh",
  "chính sác": "chính xác", "trính xác": "chính xác", "trính sác": "chính xác",
  "ghồ ghề": "gồ ghề", "gồ gề": "gồ ghề", "ghồ gề": "gồ ghề",
  "ngề nghiệp": "nghề nghiệp", "nghề ngiệp": "nghề nghiệp", "ngề ngiệp": "nghề nghiệp",
  "xạch sẽ": "sạch sẽ", "sạch xẽ": "sạch sẽ", "sạch sẻ": "sạch sẽ",
  "vững chải": "vững chãi", "vửng chãi": "vững chãi", "vững trải": "vững chãi",
  "xúc tích": "súc tích", "súcích": "súc tích", "xúc tít": "súc tích",
  "cỷ niệm": "kỷ niệm", "qỷ niệm": "kỷ niệm", "kỉ ngiệm": "kỷ niệm",
  "dành giật": "giành giật", "rành giật": "giành giật", "giành dật": "giành giật",
  "chửng chạc": "chững chạc", "trững trạc": "chững chạc", "chững trạc": "chững chạc"
};

var UI_IGNORE_MAP = {
  "vua tiếng việt": 1, "đấu rank": 1, "rời phòng": 1, "vá từ": 1, "ghép chữ": 1,
  "cảnh sát chính tả": 1, "cảnh sát": 1, "chính tả": 1, "nối từ": 1,
  "chọn từ đúng chính tả": 1, "chọn từ sai chính tả": 1, "chọn từ": 1, "đúng": 1, "sai": 1,
  "nhập từ đầy đủ...": 1, "nhập từ đầy đủ": 1, "gõ từ ghép được...": 1, "gõ từ ghép được": 1,
  "điểm": 1, "câu hỏi": 1, "trả lời": 1, "đáp án": 1, "thời gian": 1, "bỏ qua": 1,
  "tiếp tục": 1, "tiếng việt": 1, "noitu.fun": 1, "nối từ online": 1, "chơi ngay": 1
};

var STOPWORDS_MAP = {
  "danh": 1, "động": 1, "tính": 1, "từ": 1, "của": 1, "trong": 1, "ngoài": 1,
  "trên": 1, "dưới": 1, "người": 1, "con": 1, "cái": 1, "việc": 1, "làm": 1,
  "cho": 1, "với": 1, "những": 1, "các": 1, "một": 1, "hai": 1, "này": 1,
  "kia": 1, "được": 1, "không": 1, "rất": 1, "quá": 1, "lắm": 1, "nhiều": 1,
  "cùng": 1, "nhau": 1, "theo": 1, "bởi": 1, "hoặc": 1, "như": 1, "khi": 1
};

function boDau(str) {
  if (!str) return "";
  var s = String(str);
  try {
    s = String(java.text.Normalizer.normalize(s, java.text.Normalizer.Form.NFD));
  } catch (e) {
    if (s.normalize) s = s.normalize("NFD");
  }
  return s.replace(/[\u0300-\u036f]/g, "")
          .replace(/đ/g, "d")
          .replace(/Đ/g, "D");
}

function sapXepKyTu(str) {
  return String(str || "")
    .toLowerCase()
    .replace(/[^a-zA-ZàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđĐ]/g, "")
    .split("")
    .sort()
    .join("");
}

function khungAmChinhTa(word2Syl) {
  var s = boDau(String(word2Syl || "").toLowerCase().trim());
  var parts = s.split(/\s+/);
  var norm = [];
  for (var i = 0; i < parts.length; i++) {
    var p = parts[i];
    p = p.replace(/^(ngh|ng)/, "ng")
         .replace(/^(gh|g)/, "g")
         .replace(/^(ch|tr)/, "c")
         .replace(/^(gi|r|v|d|l)/, "d")
         .replace(/^(qu|k|c)/, "k")
         .replace(/^(x|s)/, "s")
         .replace(/y/g, "i")
         .replace(/(ng|nh)$/g, "n")
         .replace(/(ch|c|p)$/g, "t");
    norm.push(p);
  }
  return norm.join(" ");
}

var DICT = [];
var WORD_MAP = {};
var CORE_WORD_MAP = {};
var SINGLE_SYL_MAP = {};
var SYL_FREQ_MAP = {};
var FIRST_SYL_MAP = {};
var FIRST_SYL_NOTONE_MAP = {};
var SECOND_SYL_MAP = {};
var ANAGRAM_TONE_MAP = {};
var ANAGRAM_NOTONE_MAP = {};
var LEN_BUCKET = {};

function addWordToIndex(w, meaningStr, isCore) {
  var clean = String(w || "").trim().toLowerCase().replace(/\s+/g, " ");
  if (!clean) return;
  if (WORD_MAP[clean]) {
    if (meaningStr && !WORD_MAP[clean].meaning) {
      WORD_MAP[clean].meaning = String(meaningStr).toLowerCase();
    }
    if (isCore) CORE_WORD_MAP[clean] = 1;
    return;
  }
  var syls = clean.split(" ");
  if (syls.length !== 2) return;

  SYL_FREQ_MAP[syls[0]] = (SYL_FREQ_MAP[syls[0]] || 0) + (isCore ? 5 : 1);
  SYL_FREQ_MAP[syls[1]] = (SYL_FREQ_MAP[syls[1]] || 0) + (isCore ? 5 : 1);
  if (isCore) {
    CORE_WORD_MAP[clean] = 1;
    SINGLE_SYL_MAP[syls[0]] = 1;
    SINGLE_SYL_MAP[syls[1]] = 1;
  }

  var p1NoTone = boDau(syls[0]);
  var p2NoTone = boDau(syls[1]);
  var noTone = p1NoTone + " " + p2NoTone;
  var compact = syls[0] + syls[1];
  var compactNoTone = p1NoTone + p2NoTone;
  var sTone = sapXepKyTu(clean);
  var sNoTone = sapXepKyTu(noTone);

  var entry = {
    word: clean,
    meaning: String(meaningStr || "").toLowerCase(),
    p1: syls[0],
    p2: syls[1],
    p1NoTone: p1NoTone,
    p2NoTone: p2NoTone,
    noTone: noTone,
    compact: compact,
    compactNoTone: compactNoTone,
    sortedTone: sTone,
    sortedNoTone: sNoTone,
    len1: syls[0].length,
    len2: syls[1].length,
    totalLen: compact.length,
    isCore: isCore ? 1 : 0
  };

  DICT.push(entry);
  WORD_MAP[clean] = entry;

  if (!FIRST_SYL_MAP[syls[0]]) FIRST_SYL_MAP[syls[0]] = [];
  FIRST_SYL_MAP[syls[0]].push(entry);

  if (!FIRST_SYL_NOTONE_MAP[p1NoTone]) FIRST_SYL_NOTONE_MAP[p1NoTone] = [];
  FIRST_SYL_NOTONE_MAP[p1NoTone].push(entry);

  if (!SECOND_SYL_MAP[syls[1]]) SECOND_SYL_MAP[syls[1]] = [];
  SECOND_SYL_MAP[syls[1]].push(entry);

  if (!ANAGRAM_TONE_MAP[sTone]) ANAGRAM_TONE_MAP[sTone] = [];
  ANAGRAM_TONE_MAP[sTone].push(entry);

  if (!ANAGRAM_NOTONE_MAP[sNoTone]) ANAGRAM_NOTONE_MAP[sNoTone] = [];
  ANAGRAM_NOTONE_MAP[sNoTone].push(entry);

  var lenKey = entry.len1 + ":" + entry.len2;
  if (!LEN_BUCKET[lenKey]) LEN_BUCKET[lenKey] = [];
  LEN_BUCKET[lenKey].push(entry);
  var totalKey = "T:" + entry.totalLen;
  if (!LEN_BUCKET[totalKey]) LEN_BUCKET[totalKey] = [];
  LEN_BUCKET[totalKey].push(entry);
}

for (var i = 0; i < CURATED_VTV.length; i++) {
  var row = CURATED_VTV[i].split("|");
  addWordToIndex(row[0], row[1] || "", true);
}

var ALL_PACKS = [DICT_PACK_1, DICT_PACK_2];
for (var pIdx = 0; pIdx < ALL_PACKS.length; pIdx++) {
  var wList = ALL_PACKS[pIdx].split("|");
  for (var wIdx = 0; wIdx < wList.length; wIdx++) {
    addWordToIndex(wList[wIdx], "", true);
  }
}

var dictBusy = false;
function capNhatSoTu() {
  if (typeof floatWin === "undefined" || !floatWin || !floatWin.txtCount) return;
  ui.run(function() {
    try { floatWin.txtCount.setText(DICT.length + " từ"); } catch (e) {}
  });
}
threads.start(function() {
  try {
    var cachePath = "/sdcard/Download/vtv_74k_2tu.txt";
    if (files.exists(cachePath)) {
      var lines = files.read(cachePath).split(/\r?\n/);
      for (var i = 0; i < lines.length; i++) addWordToIndex(lines[i], "", false);
    } else {
      var urls = [
        "https://raw.githubusercontent.com/duyet/vietnamese-wordlist/master/Viet74K.txt",
        "https://raw.githubusercontent.com/undertheseanlp/underthesea/main/underthesea/corpus/data/Viet74K.txt"
      ];
      for (var u = 0; u < urls.length; u++) {
        try {
          var r = null;
          try { r = http.get(urls[u], { timeout: 20000 }); } catch (eHttp) { r = http.get(urls[u]); }
          if (r && r.statusCode === 200) {
            var rawLines = r.body.string().split(/\r?\n/);
            var saved = [];
            for (var k = 0; k < rawLines.length; k++) {
              var w = rawLines[k].trim().toLowerCase();
              if (w.split(/\s+/).length === 2 && w.indexOf("-") === -1) {
                addWordToIndex(w, "", false);
                saved.push(w);
              }
            }
            try { files.write(cachePath, saved.join("\n")); } catch (eSave) {}
            break;
          }
        } catch (e2) {}
      }
    }
  } catch (e) {
    lastError = "Từ điển: " + e;
  } finally {
    dictBusy = false;
    capNhatSoTu();
  }
});

var floatWin = floaty.window(
  <frame bg="#eb0f172a" cornerRadius="14" padding="8">
    <vertical>
      <horizontal gravity="center_vertical">
        <text id="dragHandle" text="autofill noitu.fun" textColor="#34d399" textSize="11sp" textStyle="bold" />
        <text id="btnModeToggle" text=" [Tự điền: BẬT] " textColor="#38bdf8" textSize="10sp" textStyle="bold" marginLeft="4" />
        <text id="btnAutoSendToggle" text=" [Tự gửi: TẮT] " textColor="#fbbf24" textSize="10sp" textStyle="bold" marginLeft="4" />
        <text id="btnCloseWin" text=" ✕ " textColor="#f87171" textSize="12sp" textStyle="bold" marginLeft="6" />
      </horizontal>
      <horizontal marginTop="1">
        <text id="btnOcrToggle" text="OCR: AUTO" textColor="#c4b5fd" textSize="10sp" textStyle="bold" />
        <text id="txtCount" text="…" textColor="#94a3b8" textSize="10sp" marginLeft="8" />
      </horizontal>

      <text id="txtDetected" text="Đang quét màn hình noitu.fun..." textColor="#94a3b8" textSize="10sp" marginTop="2" maxLines="1" ellipsize="end" />
      <text id="txtStatus" text="Đang nạp từ điển lõi. Chạm từ bên dưới để điền/bấm." textColor="#fde047" textSize="10sp" marginTop="1" maxLines="1" ellipsize="end" />

      <horizontal marginTop="3">
        <text id="btnCand0" text="—" bg="#059669" textColor="#ffffff" textSize="11sp" textStyle="bold" padding="7 4" marginRight="4" />
        <text id="btnCand1" text="" bg="#1e293b" textColor="#e2e8f0" textSize="11sp" textStyle="bold" padding="7 4" marginRight="4" />
        <text id="btnCand2" text="" bg="#1e293b" textColor="#e2e8f0" textSize="11sp" textStyle="bold" padding="7 4" />
      </horizontal>
      <horizontal w="*" gravity="right" marginTop="2">
        <text id="txtVersion" text="1.0.0" textColor="#64748b" textSize="9sp" />
      </horizontal>
    </vertical>
  </frame>
);

floatWin.setPosition(20, 45);

var autoFillEnabled = true;
var autoSendEnabled = false;
var ocrMode = "auto";
var screenCaptureOn = false;
var screenCaptureTried = false;
var lastOcrAt = 0;
var ocrBusy = false;
var ocrPending = null;
var lastError = "";
var lastFilledSignature = "";
var currentCandidates = [];
var currentMode = "";
var currentPromptKey = "";
var currentOptionCoords = {};
var isWorkerBusy = false;
var usedChainWords = {};
var triedForPrompt = {};
var noiTuState = { prompt: "", filled: "", at: 0 };
var pauseUntil = 0;
var lastEditCenter = { x: 0, y: 0, top: 0, bottom: 0, h: 0 };

floatWin.txtCount.setText(DICT.length + " từ");

var dX = 0, dY = 0, wX = 0, wY = 0;
floatWin.dragHandle.setOnTouchListener(function(view, event) {
  switch (event.getAction()) {
    case event.ACTION_DOWN:
      dX = event.getRawX(); dY = event.getRawY();
      wX = floatWin.getX(); wY = floatWin.getY();
      return true;
    case event.ACTION_MOVE:
      floatWin.setPosition(wX + (event.getRawX() - dX), wY + (event.getRawY() - dY));
      return true;
  }
  return true;
});

floatWin.btnModeToggle.click(function() {
  autoFillEnabled = !autoFillEnabled;
  ui.run(function() {
    floatWin.btnModeToggle.setText(autoFillEnabled ? " [Tự điền: BẬT] " : " [Tự điền: TẮT] ");
  });
});

floatWin.btnAutoSendToggle.click(function() {
  autoSendEnabled = !autoSendEnabled;
  ui.run(function() {
    floatWin.btnAutoSendToggle.setText(autoSendEnabled ? " [Tự gửi: BẬT] " : " [Tự gửi: TẮT] ");
  });
});

floatWin.btnCloseWin.click(function() {
  floatWin.close();
  exit();
});

floatWin.btnOcrToggle.click(function() {
  if (ocrMode === "auto") ocrMode = "on";
  else if (ocrMode === "on") ocrMode = "off";
  else ocrMode = "auto";
  ui.run(function() {
    floatWin.btnOcrToggle.setText(ocrMode === "auto" ? "OCR: AUTO" : (ocrMode === "on" ? "OCR: BẬT" : "OCR: TẮT"));
  });
});

function timOEditTextGame() {
  var edits = className("android.widget.EditText").visibleToUser(true).find();
  if (edits && edits.length > 0) {

    var validEdits = [];
    for (var i = 0; i < edits.length; i++) {
      var b = edits[i].bounds();
      if (b.top > 180 && b.width() > 100) validEdits.push(edits[i]);
    }
    for (var j = 0; j < validEdits.length; j++) {
      if (validEdits[j].focused()) return validEdits[j];
    }
    if (validEdits.length > 0) return validEdits[validEdits.length - 1];
    return edits[edits.length - 1];
  }
  var ph = textContains("Nhập từ đầy đủ").visibleToUser(true).findOne(60) ||
           textContains("Gõ từ ghép được").visibleToUser(true).findOne(60) ||
           descContains("Nhập từ đầy đủ").visibleToUser(true).findOne(60) ||
           descContains("Gõ từ ghép được").visibleToUser(true).findOne(60);
  return ph;
}

function ghiNhoNoiTu(cleanWord) {
  var pk = currentPromptKey || "";
  if (!triedForPrompt[pk]) triedForPrompt[pk] = {};
  triedForPrompt[pk][cleanWord] = 1;
  usedChainWords[cleanWord] = 1;
  noiTuState = { prompt: pk, filled: cleanWord, at: Date.now() };
}

function coTheSetText(node, text) {
  try {
    if (node && node.setText) return !!node.setText(text);
  } catch (e) {}
  return false;
}

function danVaoO(node, text, snap) {
  setClip(text);
  if (coTheSetText(node, text)) return true;
  var x = snap.x, y = snap.y;
  try {
    if (node && node.bounds) {
      var b = node.bounds();
      if (b && b.centerX() > 0) { x = b.centerX(); y = b.centerY(); }
    }
  } catch (e1) {}
  if (x > 0 && y > 0) {
    click(x, y);
    sleep(120);
  }
  var focused = null;
  try { focused = className("android.widget.EditText").focused(true).findOne(280); } catch (e2) {}
  if (coTheSetText(focused, text)) return true;
  var target = focused || node;
  try {
    if (target && target.performAction) {
      var PASTE = 16908322;
      try { PASTE = android.view.accessibility.AccessibilityNodeInfo.ACTION_PASTE; } catch (e3) {}
      if (target.performAction(PASTE)) return true;
    }
  } catch (e4) {}
  return false;
}

function thucThiDienHoacChamV5(wordStr, sigKey) {
  if (!wordStr || wordStr === "—" || isWorkerBusy) return;
  if (sigKey && sigKey === lastFilledSignature) return;
  isWorkerBusy = true;
  if (sigKey) lastFilledSignature = sigKey;

  var cleanWord = String(wordStr).trim();
  var modeNow = currentMode;
  var pt = currentOptionCoords[cleanWord];
  var snap = {
    x: lastEditCenter.x,
    y: lastEditCenter.y,
    bottom: lastEditCenter.bottom,
    h: lastEditCenter.h
  };
  if (modeNow === "NOI_TU") ghiNhoNoiTu(cleanWord);

  threads.start(function() {
    try {
      setClip(cleanWord);

      if (modeNow === "CHINH_TA") {
        var clicked = false;
        if (pt && pt.node) {
          try {
            var cur = pt.node;
            for (var up = 0; up < 4 && cur; up++) {
              if (cur.clickable()) { clicked = cur.click(); if (clicked) break; }
              cur = cur.parent();
            }
          } catch (e1) {}
        }
        if (!clicked && pt && pt.cx > 0 && pt.cy > 0) click(pt.cx, pt.cy);
        ui.run(function() {
          floatWin.txtStatus.setText("✅ Đã chạm chọn: " + cleanWord.toUpperCase());
        });
        return;
      }

      var editNode = null;
      try { editNode = timOEditTextGame(); } catch (eFind) {}
      var ok = danVaoO(editNode, cleanWord, snap);

      if (autoSendEnabled) {
        sleep(90);
        var sw = device.width || 1080;
        var sy = snap.y;
        try {
          if (editNode && editNode.bounds) {
            var eb = editNode.bounds();
            sy = eb.centerY();
            snap.bottom = eb.bottom;
            snap.h = eb.height();
          }
        } catch (eB) {}
        if (modeNow === "VA_TU" && snap.bottom > 0) {
          click(Math.round(sw / 2), snap.bottom + Math.round((snap.h || 80) * 0.95));
        } else if (sy > 0) {
          click(Math.round(sw * 0.85), sy);
        }
      }

      ui.run(function() {
        floatWin.txtStatus.setText(ok ? ("✅ Đã điền: " + cleanWord.toUpperCase()) : ("⚠️ Không điền được: " + cleanWord));
      });
    } catch (err) {
      lastError = String(err);
    } finally {
      isWorkerBusy = false;
    }
  });
}

floatWin.btnCand0.click(function() { if (currentCandidates[0]) thucThiDienHoacChamV5(currentCandidates[0], ""); });
floatWin.btnCand1.click(function() { if (currentCandidates[1]) thucThiDienHoacChamV5(currentCandidates[1], ""); });
floatWin.btnCand2.click(function() { if (currentCandidates[2]) thucThiDienHoacChamV5(currentCandidates[2], ""); });

function chamDiemGoiYVaTu(entry, hintSentence) {
  if (!hintSentence) return 0;
  var lowerH = hintSentence.toLowerCase();
  var score = 0;

  var hWords = lowerH.replace(/[^a-zA-ZàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđĐ\s]/g, " ").split(/\s+/);
  for (var i = 0; i < hWords.length; i++) {
    if (hWords[i] === entry.p1 || hWords[i] === entry.p2) score += 85;
  }

  if (entry.meaning) {
    var mWords = entry.meaning.split(/\s+/);
    for (var j = 0; j < mWords.length; j++) {
      var mw = mWords[j];
      if (mw.length >= 2 && !STOPWORDS_MAP[mw] && lowerH.indexOf(mw) !== -1) {
        score += 45;
      }
    }
  }

  var clues1 = SYLLABLE_CLUES[entry.p1] || "";
  var clues2 = SYLLABLE_CLUES[entry.p2] || "";
  var allClues = (clues1 + " " + clues2).trim();
  if (allClues) {
    var cWords = allClues.split(/\s+/);
    for (var k = 0; k < cWords.length; k++) {
      if (cWords[k].length >= 2 && lowerH.indexOf(cWords[k]) !== -1) {
        score += 35;
      }
    }
  }

  return score;
}

function chamDiemChinhTaV5(rawWord) {
  var w = String(rawWord || "").trim().toLowerCase().replace(/\s+/g, " ");
  var syls = w.split(" ");
  if (syls.length !== 2) return -999;

  var score = 0;
  if (WRONG_WORDS_MAP[w]) score -= 400;
  if (CORE_WORD_MAP[w]) score += 300;
  else if (WORD_MAP[w]) score += 200;

  for (var i = 0; i < 2; i++) {
    var syl = syls[i];
    var nt = boDau(syl);

    if (SINGLE_SYL_MAP[syl]) score += 25;
    else score -= 60;

    if (/(p|t|c|ch)$/.test(nt)) {
      var hasSacNang = /[áắấéếíóốớúứýạặậẹệịọộợụựỵ]/.test(syl);
      var hasWrongTone = /[àằầèềìòồờùừỳảẳẩẻểỉỏổởủửỷãẵẫẽễĩõỗỡũữỹ]/.test(syl);
      if (!hasSacNang || hasWrongTone) score -= 500;
    }

    if (/^c[iyeêìíịỉĩỳýỵỷỹèéẹẻẽềếệểễ]/.test(syl)) score -= 300;
    if (/^k(?!h)[aăâoôơuưàáạảãằắặẳẵầấậẩẫòóọỏõồốộổỗờớợởỡùúụủũừứựửữ]/.test(syl)) score -= 300;
    if (/^q(?!u)/.test(nt)) score -= 300;
    if (/^gh[aăâoôơuưyàáạảãằắặẳẵầấậẩẫòóọỏõồốộổỗờớợởỡùúụủũừứựửữ]/.test(syl)) score -= 300;
    if (/^g(?![hi])[eêièéẹẻẽềếệểễìíịỉĩ]/.test(syl)) score -= 300;
    if (/^ngh[aăâoôơuưyàáạảãằắặẳẵầấậẩẫòóọỏõồốộổỗờớợởỡùúụủũừứựửữ]/.test(syl)) score -= 300;
    if (/^ng(?!h)[eêièéẹẻẽềếệểễìíịỉĩ]/.test(syl)) score -= 300;
  }

  return score;
}

function khopMauVaTu(entry, pat1, pat2) {
  if (pat2) {
    if (entry.len1 !== pat1.length || entry.len2 !== pat2.length) return false;
    for (var i = 0; i < pat1.length; i++) {
      var c1 = pat1[i];
      if (c1 !== "_" && c1 !== "?" && boDau(c1) !== entry.p1NoTone[i]) return false;
    }
    for (var j = 0; j < pat2.length; j++) {
      var c2 = pat2[j];
      if (c2 !== "_" && c2 !== "?" && boDau(c2) !== entry.p2NoTone[j]) return false;
    }
    return true;
  } else {
    if (entry.totalLen !== pat1.length) return false;
    for (var k = 0; k < pat1.length; k++) {
      var ch = pat1[k];
      if (ch !== "_" && ch !== "?" && boDau(ch) !== entry.compactNoTone[k]) return false;
    }
    return true;
  }
}

function laManNghi(items) {
  var blob = "";
  for (var i = 0; i < items.length; i++) {
    blob += " " + String(items[i].text || "").toLowerCase();
  }
  if (/câu\s*\d+\s*\/\s*\d+/.test(blob)) return true;
  if (blob.indexOf("điền đủ những chữ") !== -1) return true;
  if (blob.indexOf("ghép các mảnh") !== -1) return true;
  if (blob.indexOf("thành một từ có nghĩa") !== -1) return true;
  if (blob.indexOf("thành một từ có") !== -1 && blob.indexOf("nghĩa") !== -1) return true;
  return false;
}

function laHangBanPhim(chars) {
  var s = boDau(String(chars || "")).toLowerCase();
  return s.indexOf("qwert") !== -1 || s.indexOf("asdfg") !== -1 || s.indexOf("zxcv") !== -1 || s.indexOf("12345") !== -1;
}

function phanTichManHinhV5(items, singleTiles, editBoxInfo) {
  var sh = device.height || 2400;
  if (laManNghi(items)) {
    pauseUntil = Date.now() + 1400;
    return {
      sig: "NGHI",
      detected: "⏸ Nghỉ giữa câu",
      status: "⏸ Không điền lúc chuyển câu",
      cands: [],
      shouldAutoFill: false,
      pause: true
    };
  }
  var editTop = editBoxInfo ? editBoxInfo.top : Math.round(sh * 0.62);
  var editBottom = editBoxInfo ? editBoxInfo.bottom : Math.round(sh * 0.85);
  var editVal = editBoxInfo ? editBoxInfo.val : "";
  var editHint = editBoxInfo ? editBoxInfo.hint : "";

  var hasChinhTaBadge = false;
  var hasGhepChuBadge = false;
  var hasVaTuBadge = false;
  var hasNoiTuBadge = false;

  if (editHint.indexOf("gõ từ ghép được") !== -1 || editVal.indexOf("gõ từ ghép được") !== -1) {
    hasGhepChuBadge = true;
  }
  if (editHint.indexOf("nhập từ đầy đủ") !== -1 || editVal.indexOf("nhập từ đầy đủ") !== -1) {
    hasVaTuBadge = true;
  }

  for (var i = 0; i < items.length; i++) {
    var raw = items[i].text.trim();
    var low = raw.toLowerCase();

    if (raw.length <= 28) {
      if (low.indexOf("cảnh sát chính tả") !== -1 || low.indexOf("chọn từ đúng") !== -1 || low.indexOf("chọn từ sai") !== -1 || low === "chính tả") {
        hasChinhTaBadge = true;
      } else if (low.indexOf("ghép chữ") !== -1 || low.indexOf("gõ từ ghép được") !== -1) {
        hasGhepChuBadge = true;
      } else if (low.indexOf("vá từ") !== -1 || low.indexOf("nhập từ đầy đủ") !== -1) {
        hasVaTuBadge = true;
      } else if (low === "nối từ" || low === "🔗 nối từ") {
        hasNoiTuBadge = true;
      }
    }
  }

  var twoSylCandidates = [];
  var seenOpt = {};
  for (var m = 0; m < items.length; m++) {
    var it = items[m];
    if (it.cy < 160) continue;

    var subLines = it.text.split(/\r?\n/);
    for (var sl = 0; sl < subLines.length; sl++) {
      var cl = subLines[sl].trim().toLowerCase().replace(/\s+/g, " ");
      if (UI_IGNORE_MAP[cl]) continue;
      var wParts = cl.split(" ");
      if (wParts.length === 2 && cl.length >= 4 && cl.length <= 18) {
        if (/^[a-zA-ZàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđĐ\s]+$/.test(cl)) {
          if (!seenOpt[cl]) {
            seenOpt[cl] = 1;
            twoSylCandidates.push({
              word: cl,
              skel: khungAmChinhTa(cl),
              score: chamDiemChinhTaV5(cl),
              cx: it.cx,
              cy: it.cy,
              node: it.node
            });
          }
        }
      }
    }
  }

  var skelCounts = {};
  var maxSkelCount = 0;
  for (var sc = 0; sc < twoSylCandidates.length; sc++) {
    var sk = twoSylCandidates[sc].skel;
    skelCounts[sk] = (skelCounts[sk] || 0) + 1;
    if (skelCounts[sk] > maxSkelCount) maxSkelCount = skelCounts[sk];
  }

  if ((hasChinhTaBadge && twoSylCandidates.length >= 2) || (maxSkelCount >= 3 && !hasGhepChuBadge && !hasVaTuBadge)) {
    currentMode = "CHINH_TA";
    currentOptionCoords = {};
    for (var oc = 0; oc < twoSylCandidates.length; oc++) {
      currentOptionCoords[twoSylCandidates[oc].word] = twoSylCandidates[oc];
    }

    var timTuSai = false;
    for (var sIdx = 0; sIdx < items.length; sIdx++) {
      var st = items[sIdx].text.toLowerCase().trim();
      if (st === "sai" || st.indexOf("chọn từ sai") !== -1) timTuSai = true;
    }

    twoSylCandidates.sort(function(a, b) {
      return timTuSai ? (a.score - b.score) : (b.score - a.score);
    });

    var winWord = twoSylCandidates[0].word;
    var sigCT = "CHINH_TA|" + twoSylCandidates.map(function(o) { return o.word; }).sort().join("|");
    return {
      sig: sigCT,
      detected: "🚨 Cảnh sát chính tả (" + twoSylCandidates.length + " từ): " + twoSylCandidates.slice(0, 4).map(function(o) { return o.word; }).join(", "),
      status: "✅ CHỌN ĐÁP ÁN: " + winWord.toUpperCase(),
      cands: twoSylCandidates.slice(0, 3).map(function(o) { return o.word; }),
      shouldAutoFill: true
    };
  }

  var tilesAboveInput = [];
  for (var t = 0; t < singleTiles.length; t++) {
    var tile = singleTiles[t];
    if (tile.cy > 100 && tile.cy < editTop - 10 && tile.ch !== "_" && tile.ch !== "?") {
      tilesAboveInput.push(tile);
    }
  }

  var rowTol = Math.max(56, Math.round(sh * 0.03));
  var bestTileRow = [];
  for (var r1 = 0; r1 < tilesAboveInput.length; r1++) {
    var baseCy = tilesAboveInput[r1].cy;
    var rowGroup = [];
    for (var r2 = 0; r2 < tilesAboveInput.length; r2++) {
      if (Math.abs(tilesAboveInput[r2].cy - baseCy) <= rowTol) rowGroup.push(tilesAboveInput[r2]);
    }
    var joined = rowGroup.map(function(x) { return x.ch; }).join("");
    if (laHangBanPhim(joined)) continue;
    if (rowGroup.length >= 4 && rowGroup.length <= 12 && rowGroup.length >= bestTileRow.length) {
      bestTileRow = rowGroup;
    }
  }

  if (bestTileRow.length < 4 && hasGhepChuBadge) {
    var letterReG = /^[a-zA-ZàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđĐ]$/;
    for (var gm = 0; gm < items.length; gm++) {
      var itG = items[gm];
      if (itG.cy > 120 && itG.cy < editTop - 10 && !UI_IGNORE_MAP[itG.text.toLowerCase().trim()] && !laChuBangNoi(itG.text)) {
        var rawG = itG.text.trim();
        var spParts = rawG.split(/[\s\/]+/);
        var charsG = [];
        if (spParts.length >= 4 && spParts.length <= 12 && spParts.every(function(p) { return p.length === 1; })) {
          charsG = spParts;
        } else {
          var compactG = rawG.replace(/\s+/g, "");
          if (compactG.length >= 4 && compactG.length <= 12 && compactG.split("").every(function(p) { return letterReG.test(p); })) {
            charsG = compactG.split("");
          }
        }
        if (charsG.length >= 4 && !laHangBanPhim(charsG.join(""))) {
          for (var gp = 0; gp < charsG.length; gp++) {
            bestTileRow.push({ ch: charsG[gp], cx: gp * 50, cy: itG.cy });
          }
          break;
        }
      }
    }
  }

  if (hasGhepChuBadge || (bestTileRow.length >= 4 && !hasVaTuBadge)) {
    if (bestTileRow.length >= 4) {
      currentMode = "GHEP_CHU";
      bestTileRow.sort(function(a, b) { return a.cx - b.cx; });
      var rawChars = bestTileRow.map(function(x) { return x.ch; }).join("");
      var sTone = sapXepKyTu(rawChars);
      var sNoTone = sapXepKyTu(boDau(rawChars));

      var matches = (ANAGRAM_TONE_MAP[sTone] || []).slice();
      if (matches.length === 0) {
        matches = (ANAGRAM_NOTONE_MAP[sNoTone] || []).slice();
      }

      var ghepHint = "";
      for (var gh = 0; gh < items.length; gh++) {
        if (items[gh].cy > 120 && items[gh].cy < editTop - 10 && items[gh].text.length >= 15 && !UI_IGNORE_MAP[items[gh].text.toLowerCase()] && !laChuBangNoi(items[gh].text)) {
          ghepHint = items[gh].text;
        }
      }

      if (matches.length > 0) {

        matches.sort(function(a, b) {
          var scoreA = (a.isCore ? 50 : 0) + (ghepHint ? chamDiemGoiYVaTu(a, ghepHint) : 0);
          var scoreB = (b.isCore ? 50 : 0) + (ghepHint ? chamDiemGoiYVaTu(b, ghepHint) : 0);
          return scoreB - scoreA;
        });
        var isSolved = (matches.length === 1) || (ghepHint.length > 0) || (matches[0].isCore === 1);
        return {
          sig: "GHEP_CHU|" + sTone + "|" + ghepHint,
          detected: "🧩 Ghép chữ: " + bestTileRow.map(function(x) { return x.ch; }).join(" / "),
          status: "✅ Ghép thành công: " + matches[0].word.toUpperCase(),
          cands: matches.slice(0, 3).map(function(x) { return x.word; }),
          shouldAutoFill: isSolved
        };
      } else {
        return {
          sig: "GHEP_CHU_WAIT|" + sTone,
          detected: "🧩 Ghép chữ: " + bestTileRow.map(function(x) { return x.ch; }).join(" / "),
          status: "⏳ Chưa tìm thấy từ khớp trong từ điển",
          cands: [],
          shouldAutoFill: false
        };
      }
    } else if (hasGhepChuBadge) {
      currentMode = "GHEP_CHU";
      return {
        sig: "GHEP_CHU_WAIT|tiles",
        detected: "🧩 Ghép chữ: chưa đọc đủ ô chữ",
        status: "⏳ Đang đọc các ô chữ...",
        cands: [],
        shouldAutoFill: false
      };
    }
  }

  var pat1 = "", pat2 = "";
  var displayPattern = "";

  for (var v = 0; v < items.length; v++) {
    var itV = items[v];
    if (itV.cy > editTop) continue;
    var lineV = itV.text.trim().replace(/[—–−＿▢□☐]/g, "_");
    if (lineV.indexOf("_") !== -1 && lineV.length >= 3 && lineV.length <= 30) {
      displayPattern = lineV;
      if (/\s{2,}/.test(lineV)) {
        var twoGroups = lineV.split(/\s{2,}/);
        if (twoGroups.length === 2) {
          pat1 = twoGroups[0].replace(/\s+/g, "").toLowerCase();
          pat2 = twoGroups[1].replace(/\s+/g, "").toLowerCase();
        }
      }
      if (!pat1) {
        var tokensV = lineV.split(/\s+/);
        if (tokensV.length === 2 && (tokensV[0].length > 1 || tokensV[1].length > 1)) {
          pat1 = tokensV[0].toLowerCase();
          pat2 = tokensV[1].toLowerCase();
        } else {
          pat1 = lineV.replace(/\s+/g, "").toLowerCase();
          pat2 = "";
        }
      }
      break;
    }
  }

  if (!pat1 && singleTiles.length >= 4) {
    var vaTiles = [];
    for (var vt = 0; vt < singleTiles.length; vt++) {
      if (singleTiles[vt].cy > 100 && singleTiles[vt].cy < editTop - 10) {
        vaTiles.push(singleTiles[vt]);
      }
    }
    var hasUnderscore = false;
    for (var uIdx = 0; uIdx < vaTiles.length; uIdx++) {
      if (vaTiles[uIdx].ch === "_" || vaTiles[uIdx].ch === "?") hasUnderscore = true;
    }
    if (hasUnderscore && vaTiles.length >= 4 && vaTiles.length <= 13) {
      vaTiles.sort(function(a, b) { return a.cx - b.cx; });
      var maxGap = 0, splitIdx = -1;
      for (var g = 1; g < vaTiles.length; g++) {
        var gap = vaTiles[g].cx - vaTiles[g - 1].cx;
        if (gap > maxGap) { maxGap = gap; splitIdx = g; }
      }
      var avgGap = (vaTiles[vaTiles.length - 1].cx - vaTiles[0].cx) / (vaTiles.length - 1);
      if (splitIdx > 0 && maxGap > avgGap * 1.32) {
        pat1 = vaTiles.slice(0, splitIdx).map(function(x) { return x.ch; }).join("").toLowerCase();
        pat2 = vaTiles.slice(splitIdx).map(function(x) { return x.ch; }).join("").toLowerCase();
        displayPattern = pat1 + "   " + pat2;
      } else {
        pat1 = vaTiles.map(function(x) { return x.ch; }).join("").toLowerCase();
        displayPattern = pat1;
      }
    }
  }

  if (pat1 || hasVaTuBadge) {
    currentMode = "VA_TU";
    if (pat1) {
      var hintLines = [];
      for (var vh = 0; vh < items.length; vh++) {
        var itH = items[vh];
        if (itH.cy > 120 && itH.cy < editTop - 5) {
          var txtH = itH.text.trim();
          var normH = txtH.replace(/[—–−＿▢□☐]/g, "_");
          var lowH = txtH.toLowerCase();
          if (laChuBangNoi(txtH)) continue;
          if (normH !== displayPattern && normH.indexOf("_") === -1 && txtH.length >= 12 && !UI_IGNORE_MAP[lowH]) {
            hintLines.push({ cy: itH.cy, text: txtH });
          }
        }
      }
      hintLines.sort(function(a, b) { return a.cy - b.cy; });
      var vaHint = hintLines.map(function(h) { return h.text; }).join(" ");

      var pool = pat2
        ? (LEN_BUCKET[pat1.length + ":" + pat2.length] || [])
        : (LEN_BUCKET["T:" + pat1.length] || []);
      var cands = [];
      for (var dIdx = 0; dIdx < pool.length; dIdx++) {
        var ent = pool[dIdx];
        if (ent && khopMauVaTu(ent, pat1, pat2)) cands.push(ent);
      }

      if (cands.length > 0) {
        cands.sort(function(a, b) {
          var sA = (vaHint ? chamDiemGoiYVaTu(a, vaHint) : 0) + (a.isCore ? 10 : 0);
          var sB = (vaHint ? chamDiemGoiYVaTu(b, vaHint) : 0) + (b.isCore ? 10 : 0);
          return sB - sA;
        });
        var solvedNow = (cands.length === 1) || (vaHint.length > 0);
        return {
          sig: "VA_TU|" + pat1 + "|" + pat2 + "|" + vaHint,
          detected: "🎟️ Vá từ: " + displayPattern + (vaHint ? (" (+Gợi ý: " + vaHint.slice(0, 26) + "...)") : ""),
          status: solvedNow
            ? ("⚡ Chốt đáp án: " + cands[0].word.toUpperCase())
            : ("⏳ Có " + cands.length + " từ (" + cands.slice(0, 2).map(function(x) { return x.word; }).join(", ") + "...) -> Chờ gợi ý giây 13!"),
          cands: cands.slice(0, 3).map(function(x) { return x.word; }),
          shouldAutoFill: solvedNow
        };
      }
      return {
        sig: "VA_TU_WAIT|" + pat1 + "|" + pat2,
        detected: "🎟️ Vá từ: " + (displayPattern || "đang đọc mẫu"),
        status: "⏳ Chưa có từ khớp mẫu trong từ điển",
        cands: [],
        shouldAutoFill: false
      };
    }
    return {
      sig: "VA_TU_WAIT|badge",
      detected: "🎟️ Vá từ: đang đọc ô chữ",
      status: "⏳ Đang đọc mẫu vá từ...",
      cands: [],
      shouldAutoFill: false
    };
  }

  if (hasNoiTuBadge) {
    currentMode = "NOI_TU";
    var promptWord = "";

    for (var n = 0; n < items.length; n++) {
      var itN = items[n];
      if (itN.cy > 140 && itN.cy < editTop - 10) {
        var wClean = itN.text.trim().toLowerCase().replace(/\s+/g, " ");
        if (!UI_IGNORE_MAP[wClean] && wClean.split(" ").length === 2 && wClean.length <= 18) {
          if (/^[a-zA-ZàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđĐ\s]+$/.test(wClean)) {
            promptWord = wClean;
            break;
          }
        }
      }
    }

    var seedSyl = "";
    if (promptWord) {
      var pParts = promptWord.split(" ");
      seedSyl = pParts[pParts.length - 1];
    } else if (editVal && editVal.trim().split(/\s+/).length === 1 && !UI_IGNORE_MAP[editVal.trim().toLowerCase()]) {
      seedSyl = editVal.trim().toLowerCase();
    }

    if (seedSyl) {
      var pool = (FIRST_SYL_MAP[seedSyl] || []).slice();
      if (pool.length === 0) {
        pool = (FIRST_SYL_NOTONE_MAP[boDau(seedSyl)] || []).slice();
      }

      pool.sort(function(a, b) {
        var sA = (a.isCore ? 5000 : 0) + (SYL_FREQ_MAP[a.p2] || 0);
        var sB = (b.isCore ? 5000 : 0) + (SYL_FREQ_MAP[b.p2] || 0);
        return sB - sA;
      });

      var promptKey = promptWord || seedSyl;
      currentPromptKey = promptKey;
      var tried = triedForPrompt[promptKey] || {};
      var filtered = [];
      for (var p = 0; p < pool.length; p++) {
        var candW = pool[p].word;
        if (candW !== promptWord && !tried[candW]) filtered.push(candW);
      }
      if (filtered.length === 0 && pool.length > 0) {
        triedForPrompt[promptKey] = {};
        for (var p2 = 0; p2 < pool.length; p2++) {
          if (pool[p2].word !== promptWord) filtered.push(pool[p2].word);
        }
      }

      if (filtered.length > 0) {
        var nowMs = Date.now();
        var choice = filtered[0];
        var inCooldown = noiTuState.prompt === promptKey && noiTuState.filled && (nowMs - noiTuState.at) < 1700;
        if (inCooldown) {
          choice = noiTuState.filled;
          var rest = [];
          for (var ri = 0; ri < filtered.length && rest.length < 2; ri++) {
            if (filtered[ri] !== choice) rest.push(filtered[ri]);
          }
          return {
            sig: "NOI_TU|" + promptKey + "|" + choice,
            detected: "🔗 Nối từ: " + (promptWord || seedSyl) + " → nối âm " + seedSyl,
            status: "⏳ Chờ game nhận \"" + choice + "\"...",
            cands: [choice].concat(rest),
            shouldAutoFill: false
          };
        }
        return {
          sig: "NOI_TU|" + promptKey + "|" + choice,
          detected: "🔗 Nối từ: " + (promptWord || seedSyl) + " → nối âm " + seedSyl,
          status: "✅ Tự điền chuẩn: " + choice.toUpperCase(),
          cands: filtered.slice(0, 3),
          shouldAutoFill: true
        };
      }
    }
    if (hasNoiTuBadge) {
      return {
        sig: "NOI_TU_WAIT",
        detected: "🔗 Nối từ: chưa thấy từ gốc",
        status: "⏳ Đang chờ từ trên thẻ...",
        cands: [],
        shouldAutoFill: false
      };
    }
  }

  return null;
}

function laChuBangNoi(clean) {
  if (!clean) return true;
  if (clean.indexOf("autofill noitu.fun") !== -1 || clean.indexOf("1.0.0") !== -1) return true;
  if (clean.indexOf("Đang quét màn hình") !== -1) return true;
  if (clean.indexOf("[Tự điền:") !== -1 || clean.indexOf("[Tự gửi:") !== -1) return true;
  if (clean.indexOf("OCR:") === 0) return true;
  if (/^\d+ từ$/.test(clean)) return true;
  if (clean.indexOf("✅") !== -1 || clean.indexOf("⚠️") !== -1 || clean.indexOf("👁") !== -1) return true;
  if (clean.indexOf("🚨") !== -1 || clean.indexOf("🧩") !== -1 || clean.indexOf("⏳") !== -1 || clean.indexOf("⚡") !== -1) return true;
  if (clean.indexOf("🎟️") !== -1 || clean.indexOf("🔗") !== -1) return true;
  if (clean.indexOf("Đang nạp") !== -1 || clean.indexOf("Chạm từ bên dưới") !== -1) return true;
  if (clean.indexOf("Đã điền") !== -1 || clean.indexOf("Đã chạm") !== -1 || clean.indexOf("Không điền") !== -1) return true;
  if (clean.indexOf("⏸") !== -1 || clean.indexOf("Nghỉ giữa câu") !== -1 || clean.indexOf("Không điền lúc chuyển") !== -1) return true;
  if (/^[123]\.\s+/.test(clean)) return true;
  if (clean === "✿" || clean === "!") return true;
  return false;
}

function napNodeVao(n, items, singleTiles, editHolder) {
  var cls = String(n.className() || "");
  var b = n.bounds();
  var raw = n.text() || n.desc();
  var clean = raw ? String(raw).trim() : "";

  if (cls.indexOf("EditText") !== -1 && b.top > 180 && b.width() > 100) {
    var hTxt = "";
    try { if (n.hint) hTxt = String(n.hint() || ""); } catch (eH) {}
    editHolder.info = {
      top: b.top,
      bottom: b.bottom,
      cy: b.centerY(),
      val: clean,
      hint: hTxt.toLowerCase()
    };
    lastEditCenter = { x: b.centerX(), y: b.centerY(), top: b.top, bottom: b.bottom, h: b.height() };
    return;
  }
  if (!clean || laChuBangNoi(clean)) return;

  var lowClean = clean.toLowerCase();
  if (!editHolder.info && (lowClean.indexOf("nhập từ") !== -1 || lowClean.indexOf("gõ từ ghép") !== -1)) {
    editHolder.info = { top: b.top, bottom: b.bottom, cy: b.centerY(), val: "", hint: lowClean };
    lastEditCenter = { x: b.centerX(), y: b.centerY(), top: b.top, bottom: b.bottom, h: b.height() };
  }

  clean = clean.replace(/[—–−＿]/g, "_");
  if (clean.length === 1 && /[a-zA-ZàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđĐ_?]/.test(clean)) {
    if (!editHolder.tileSeen) editHolder.tileSeen = {};
    var tileKey = clean + "@" + Math.round(b.centerX() / 10) + "@" + Math.round(b.centerY() / 10);
    if (editHolder.tileSeen[tileKey]) return;
    editHolder.tileSeen[tileKey] = 1;
    singleTiles.push({ ch: clean, cx: b.centerX(), cy: b.centerY(), left: b.left, top: b.top, h: b.height() });
  } else {
    items.push({ text: clean, cx: b.centerX(), cy: b.centerY(), node: n });
  }
}

function docAccessibility() {
  var items = [];
  var singleTiles = [];
  var editHolder = { info: null };
  function quet(clsName) {
    var list = null;
    try { list = className(clsName).visibleToUser(true).find(); } catch (e) { return; }
    if (!list) return;
    for (var i = 0; i < list.length; i++) {
      try { napNodeVao(list[i], items, singleTiles, editHolder); } catch (e2) {}
    }
  }
  quet("android.widget.TextView");
  quet("android.widget.Button");
  quet("android.widget.EditText");
  try {
    var letters = textMatches(/^[a-zA-ZàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđĐ]$/).visibleToUser(true).find();
    if (letters) {
      for (var li = 0; li < letters.length; li++) {
        try { napNodeVao(letters[li], items, singleTiles, editHolder); } catch (eL) {}
      }
    }
  } catch (eLetters) {}
  return { items: items, singleTiles: singleTiles, editBoxInfo: editHolder.info };
}

function batChupManHinh() {
  if (screenCaptureOn || screenCaptureTried) return screenCaptureOn;
  screenCaptureTried = true;
  var tries = [
    function() { return requestScreenCapture(false); },
    function() { return images.requestScreenCapture(false); },
    function() { return $images.requestScreenCapture({ orientation: 1 }); }
  ];
  for (var i = 0; i < tries.length; i++) {
    try {
      if (tries[i]()) { screenCaptureOn = true; break; }
    } catch (eCap) {}
  }
  if (!screenCaptureOn) lastError = "Chưa có quyền chụp màn hình";
  return screenCaptureOn;
}

function chupManHinh() {
  try { if (typeof captureScreen === "function") { var a = captureScreen(); if (a) return a; } } catch (e1) {}
  try { if (typeof images !== "undefined" && images.captureScreen) { var b = images.captureScreen(); if (b) return b; } } catch (e2) {}
  try { if (typeof $images !== "undefined" && $images.captureScreen) return $images.captureScreen(); } catch (e3) {}
  return null;
}

function chuanHoaOcr(s) {
  return String(s || "").replace(/[—–−＿▢□☐◯○●•·]/g, "_").replace(/\s+/g, " ").trim();
}

function boundsCenter(b) {
  if (!b) return null;
  try {
    if (typeof b.centerX === "function") {
      return { cx: b.centerX(), cy: b.centerY(), top: b.top, bottom: b.bottom, left: b.left, w: b.width(), h: b.height() };
    }
  } catch (e) {}
  if (typeof b.left === "number" && typeof b.right === "number") {
    return {
      cx: (b.left + b.right) / 2,
      cy: (b.top + b.bottom) / 2,
      top: b.top,
      bottom: b.bottom,
      left: b.left,
      w: b.right - b.left,
      h: b.bottom - b.top
    };
  }
  if (b.bounds) return boundsCenter(b.bounds);
  return null;
}

function pushOcrObj(obj, into) {
  if (obj === null || obj === undefined) return;
  var kids = obj.children;
  if ((!kids || !kids.length) && obj.getTextBlocks) {
    try { kids = obj.getTextBlocks(); } catch (eB) {}
  }
  if (kids && typeof kids.size === "function" && typeof kids.length !== "number") {
    var tmp = [];
    for (var js = 0; js < kids.size(); js++) tmp.push(kids.get(js));
    kids = tmp;
  }
  if (kids && kids.length) {
    for (var i = 0; i < kids.length; i++) pushOcrObj(kids[i], into);
    return;
  }
  var text = obj.text || obj.words || obj.label || "";
  if (!text && obj.getText) { try { text = obj.getText(); } catch (eT) {} }
  text = chuanHoaOcr(text);
  if (!text) return;
  if (typeof obj.confidence === "number" && obj.confidence < 0.2) return;
  var bb = boundsCenter(obj.bounds || obj.rect || obj.frame);
  if (!bb && typeof obj.left === "number") bb = boundsCenter(obj);
  if (!bb) return;
  into.push({ text: text, cx: bb.cx, cy: bb.cy, top: bb.top, bottom: bb.bottom, w: bb.w, h: bb.h });
}

function blocksToItems(blocks) {
  var items = [];
  var singleTiles = [];
  var editBoxInfo = null;
  var letterRe = /^[a-zA-ZàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđĐ_?]$/;
  for (var i = 0; i < blocks.length; i++) {
    var bl = blocks[i];
    var clean = bl.text;
    if (!clean || laChuBangNoi(clean)) continue;
    var low = clean.toLowerCase();
    if (!editBoxInfo && (low.indexOf("nhập từ") !== -1 || low.indexOf("gõ từ ghép") !== -1)) {
      editBoxInfo = {
        top: bl.top || (bl.cy - 40),
        bottom: bl.bottom || (bl.cy + 40),
        cy: bl.cy,
        val: "",
        hint: low
      };
      lastEditCenter = {
        x: bl.cx, y: bl.cy,
        top: editBoxInfo.top, bottom: editBoxInfo.bottom,
        h: editBoxInfo.bottom - editBoxInfo.top
      };
    }
    if (clean.length === 1 && letterRe.test(clean)) {
      singleTiles.push({ ch: clean, cx: bl.cx, cy: bl.cy, left: bl.cx, top: bl.cy, h: bl.h || 40 });
    } else {
      items.push({ text: clean, cx: bl.cx, cy: bl.cy, node: null });
    }
  }
  return { items: items, singleTiles: singleTiles, editBoxInfo: editBoxInfo };
}

function docOCR() {
  if (!batChupManHinh()) return null;
  var img = null;
  try {
    img = chupManHinh();
    if (!img) return null;
    var raw = null;
    if (typeof gmlkit !== "undefined" && gmlkit && gmlkit.ocr) {
      try { raw = gmlkit.ocr(img, "latin"); } catch (e1) {
        try { raw = gmlkit.ocr(img); } catch (e2) {}
      }
    }
    if (!raw && typeof paddle !== "undefined" && paddle && paddle.ocr) {
      try { raw = paddle.ocr(img); } catch (e3) {}
    }
    if (!raw && typeof $ocr !== "undefined" && $ocr) {
      try { if ($ocr.detect) raw = $ocr.detect(img); } catch (e4) {}
      if (!raw) { try { if ($ocr.recognize) raw = $ocr.recognize(img); } catch (e5) {} }
      if (!raw) { try { if ($ocr.recognizeText) raw = { text: $ocr.recognizeText(img) }; } catch (e6) {} }
    }
    if (typeof raw === "string") raw = { text: raw };
    if (!raw) {
      lastError = "Máy không có gmlkit/paddle OCR";
      return null;
    }
    var blocks = [];
    if (typeof raw.length === "number") {
      for (var i = 0; i < raw.length; i++) pushOcrObj(raw[i], blocks);
    } else {
      pushOcrObj(raw, blocks);
      if (blocks.length === 0 && raw.text) {
        var lines = String(raw.text).split(/\n/);
        var sh = device.height || 2400;
        var sw = device.width || 1080;
        for (var li = 0; li < lines.length; li++) {
          var lt = chuanHoaOcr(lines[li]);
          if (!lt) continue;
          blocks.push({
            text: lt,
            cx: sw / 2,
            cy: Math.round(sh * (0.18 + 0.55 * li / Math.max(lines.length, 1))),
            top: 0, bottom: 0, w: sw, h: 40
          });
        }
      }
    }
    return blocksToItems(blocks);
  } catch (e) {
    lastError = "OCR: " + ((e && e.message) || e);
    return null;
  } finally {
    try { if (img && img.recycle) img.recycle(); } catch (eR) {}
  }
}

function xinOCRNen() {
  if (ocrBusy || ocrMode === "off") return;
  if (Date.now() - lastOcrAt < 900) return;
  ocrBusy = true;
  lastOcrAt = Date.now();
  threads.start(function() {
    try {
      var parsed = docOCR();
      if (parsed) ocrPending = parsed;
    } catch (e) {
      lastError = "OCR: " + e;
    } finally {
      ocrBusy = false;
    }
  });
}

function ketQuaManh(res) {
  return !!(res && res.shouldAutoFill && res.cands && res.cands.length);
}

function apDungKetQua(res) {
  if (!res) return;
  if (Date.now() < pauseUntil) res.shouldAutoFill = false;
  currentCandidates = res.cands || [];
  ui.run(function() {
    floatWin.txtDetected.setText(res.detected);
    floatWin.txtStatus.setText(res.status);
    floatWin.btnCand0.setText(currentCandidates[0] ? ("1. " + currentCandidates[0].toUpperCase()) : "—");
    floatWin.btnCand1.setText(currentCandidates[1] ? ("2. " + currentCandidates[1].toUpperCase()) : "");
    floatWin.btnCand2.setText(currentCandidates[2] ? ("3. " + currentCandidates[2].toUpperCase()) : "");
  });
  if (autoFillEnabled && res.shouldAutoFill && currentCandidates[0] && res.sig !== lastFilledSignature) {
    thucThiDienHoacChamV5(currentCandidates[0], res.sig);
  }
}

setInterval(function() {
  if (isWorkerBusy) return;
  try {
    var acc = docAccessibility();
    var res = phanTichManHinhV5(acc.items, acc.singleTiles, acc.editBoxInfo);
    if (res && res.pause) ocrPending = null;
    var dangNghi = Date.now() < pauseUntil;
    var canOcr = !dangNghi && (ocrMode === "on" || (ocrMode === "auto" && !ketQuaManh(res)));
    if (canOcr && !screenCaptureOn && !screenCaptureTried) batChupManHinh();
    if (canOcr) xinOCRNen();
    if (ocrPending && !dangNghi) {
      var o = ocrPending;
      ocrPending = null;
      var resO = phanTichManHinhV5(o.items, o.singleTiles, o.editBoxInfo || acc.editBoxInfo);
      if (resO && !resO.pause && !ketQuaManh(res) && resO.shouldAutoFill) {
        resO.detected = "👁 " + resO.detected;
        res = resO;
      }
    }
    if (res) apDungKetQua(res);
  } catch (e) {
    lastError = (e && e.message) ? e.message : String(e);
  }
}, 420);
