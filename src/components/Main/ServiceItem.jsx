import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";

function ServiceItem({ image, title, benefits, price, periodOfUsage }) {
  return (
    <div>
      <Image
        src={image}
        width={1000}
        height={1000}
        alt="Train service image"
        className="size-full object-cover rounded-md"
      />

      <h3 className="font-bold text-2xl text-white uppercase mt-4 mb-2">
        {title}
      </h3>

      <ul className="text-white pl-4">
        {benefits?.map((benefit) => (
          <li key={benefit.id} className="flex gap-3 my-3">
            <Image
              src="/images/icons/gym.png"
              width={24}
              height={24}
              alt="bullet list icon"
              className="size-auto"
            />
            <span>{benefit.name}</span>
          </li>
        ))}
      </ul>
      <div className="font-bold text-2xl text-white">
          Thời gian sử dụng: {periodOfUsage} tháng
        </div>
      <div className="flex justify-between items-center mt-5">
        <div className="font-bold text-2xl text-white">
          Giá:{" "}
          <span className="text-primary">
            {(price * 1000).toLocaleString("it-IT", {
              style: "currency",
              currency: "VND",
            })}
          </span>
        </div>
        <Link
          href="/register-member"
          className="flex justify-center items-center"
        >
          <Button size="lg" className="bg-primary hover:scale-105">
            Đăng ký ngay
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default ServiceItem;
