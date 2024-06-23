import Image from "next/image";

export default function BarIcon() {
  return (
    <div className="cursor-pointer">
      <Image src="/svg/bar.svg" width={30} height={30} alt="bar-icon" />
    </div>
  );
}
