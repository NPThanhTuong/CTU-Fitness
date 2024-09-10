export const webPaths = [
  {
    name: "Trang chủ",
    path: "/",
    isButton: false,
  },
  {
    name: "Huấn luyện viên",
    path: "/trainers",
    isButton: false,
  },
  {
    name: "Thiết bị",
    path: "/equipments",
    isButton: false,
  },
  {
    name: "Về chúng tôi",
    path: "/about",
    isButton: false,
  },
  {
    name: "Liên hệ",
    path: "/contact",
    isButton: false,
  },
  {
    name: "Đăng ký",
    path: "/signup",
    isButton: true,
  },
];

export const expSort = [
  {
    value: "asc",
    title: "Kinh nghiệm tăng dần",
  },
  {
    value: "desc",
    title: "Kinh nghiệm giảm dần",
  },
];
export const priceSort = [
  {
    value: "asc",
    title: "Giá tăng dần",
  },
  {
    value: "desc",
    title: "Giá giảm dần",
  },
];
export const nameSort = [
  {
    value: "asc",
    title: "Theo tên A-Z",
  },
  {
    value: "desc",
    title: "Theo tên Z-A",
  },
];

export const navList = [
  {
    href: "/admin",
    textLink: "Trang chủ",
    activePath: "admin",
  },
  {
    href: "/admin/users",
    textLink: "Người dùng",
    activePath: "users",
  },
  {
    href: "/admin/equipments",
    textLink: "Thiết bị",
    activePath: "equipments",
  },
  {
    href: "/admin/employees",
    textLink: "Nhân viên",
    activePath: "employees",
  },
  {
    href: "/admin/register-forms",
    textLink: "Đơn đăng ký",
    activePath: "register-forms",
  },
  {
    href: "/admin/exercises",
    textLink: "Bài tập",
    activePath: "exercises",
  },
  {
    href: "/admin/training-sessions",
    textLink: "Buổi tập",
    activePath: "training-sessions",
  },
  {
    href: "/admin/benefits",
    textLink: "Quyền lợi",
    activePath: "benefits",
  },
  {
    href: "/admin/membership-packages",
    textLink: "Gói thành viên",
    activePath: "membership-packages",
  },
];

export const saltRounds = 10;

export const highlightImages = [
  {
    path: "/images/introduceEquipments/highlight1.jpg",
    title: "<h4>Hình ảnh - <a href='/' >CTU Fitness</a></h4>",
  },
  {
    path: "/images/introduceEquipments/highlight2.jpg",
    title: "<h4>Hình ảnh - <a href='/' >CTU Fitness</a></h4>",
  },
  {
    path: "/images/introduceEquipments/highlight3.jpg",
    title: "<h4>Hình ảnh - <a href='/' >CTU Fitness</a></h4>",
  },
  {
    path: "/images/introduceEquipments/highlight4.jpg",
    title: "<h4>Hình ảnh - <a href='/' >CTU Fitness</a></h4>",
  },
  {
    path: "/images/introduceEquipments/highlight5.jpg",
    title: "<h4>Hình ảnh - <a href='/' >CTU Fitness</a></h4>",
  },
  {
    path: "/images/introduceEquipments/highlight6.jpg",
    title: "<h4>Hình ảnh - <a href='/' >CTU Fitness</a></h4>",
  },
];

export const equipmentSort = [
  // {
  //   value: "id",
  //   title: "Mã thiết bị",
  // },
  {
    value: "name",
    title: "Tên thiết bị",
  },
  {
    value: "dateImported",
    title: "Ngày nhập",
  },
];

export const trainerSort = [
  // {
  //   value: "id",
  //   title: "Mã huấn luyện viên",
  // },
  {
    value: "name",
    title: "Tên huấn luyện viên",
  },
  {
    value: "experience",
    title: "Kinh nghiệm huấn luyện",
  },
  {
    value: "age",
    title: "Tuổi huấn luyện viên",
  },
];
