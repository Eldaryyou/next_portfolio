import Image from "next/image";
import MotionTransition from "./transition-cpmponent";

const AvatarServices = () => {
  return (
    <MotionTransition
      position="right"
      className="bottom-0 left-0 hidden md:inline-block md:absolute"
    >
      <Image
        src="/services.png"
        alt="Avatar Services"
        width="900"
        height="900"
        className="w-[300px] h-full sm:w-[190px]"
      ></Image>
    </MotionTransition>
  );
};

export default AvatarServices;
