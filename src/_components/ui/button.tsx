type Props = {
  label: string;
  onClick?: () => void;
  size: 1 | 2 | 3;
};

export const Button = ({ label, onClick, size }: Props) => {
  return (
    <div
      className={`flex justify-center items-center cursor-pointer bg-white text-black font-semibold rounded-3xl
         ${size === 1 && "h-12 text-lg"}
         ${size === 2 && "h-10 text-md"}
         ${size === 3 && "h-8 text-sm"}`}
      onClick={onClick}
    >
      {label}
    </div>
  );
};
