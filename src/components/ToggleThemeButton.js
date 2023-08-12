import Image from "next/image";

const ToggleThemeButton = () => {
  return (
    <div className="w-6 h-6 relative">
      <Image
        src={`/images/icon-moon.svg`}
        alt={`"Toggle Light Theme Icon"`}
        fill={true}
      />
    </div>
  );
};

export default ToggleThemeButton;
