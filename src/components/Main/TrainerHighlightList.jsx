import CardItem from "../CardItem";

function TrainerHighlightList({ className }) {
  return (
    <div className={className}>
      <CardItem
        key={1}
        id={0}
        srcImg="/images/ta-duy-anh-1713334451206-87501208.jpeg"
        title="Tạ Duy Anh"
        category="Huấn luyện viên sức bền"
        desc="Những huấn luyện viên này nhằm mục đích tăng cường 
				sự mềm mại và đàn hồi của cơ bắp, điều này có thể dẫn đến 
				hiệu quả vận động tốt hơn, giảm nguy cơ chấn thương và cải 
				thiện hiệu suất thể chất tổng thể."
        linkFb="#"
        linkTwitter="#"
        linkIg="#"
      />

      <CardItem
        key={2}
        id={0}
        srcImg="/images/bhdlinh-avatar-1713333827680-3457249.jpeg"
        title="Bùi Hà Thảo Linh"
        category="Huấn luyện viên dinh dưỡng"
        desc="Những huấn luyện viên này hiểu vai trò quan trọng 
				của dinh dưỡng trong việc rèn luyện thể chất, quản lý 
				cân nặng, xây dựng cơ bắp và sức khỏe tổng thể."
        linkFb="#"
        linkTwitter="#"
        linkIg="#"
      />

      <CardItem
        key={3}
        id={0}
        srcImg="/images/lvluan-avatar-1713334018761-34608168.jpeg"
        title="Lê Vũ Luân"
        category="Huấn luyện viên sức mạnh"
        desc="Sử dụng các bài tập kháng lực như cử tạ, bài tập thể hình và dây kháng lực
				 để thử thách cơ bắp và thúc đẩy tăng trưởng. Đảm bảo rằng các bài tập được thực 
				 hiện chính xác để ngăn ngừa chấn thương và tối đa hóa sự tham gia của cơ bắp."
        linkFb="#"
        linkTwitter="#"
        linkIg="#"
      />
    </div>
  );
}

export default TrainerHighlightList;
