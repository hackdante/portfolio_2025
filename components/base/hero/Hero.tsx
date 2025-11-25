import Image from "next/image";

export const Hero = () => {
  const BACKGROUND_URL = "/images/dark--logo-md.png";

  return (
    <Image
      width={400}
      height={106}
      src={BACKGROUND_URL}
      alt="KENSAI"
      loading="eager"
    />
  );
};
