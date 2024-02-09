import { Icon } from "react-feather";

export const IconBox: React.FC<{ Icon: Icon }> = ({ Icon }) => {
  return (
    <div className="shrink-0 w-15 h-15 flex flex-col items-center justify-center border-opacity-30 aspect-square border-solid p-1.5 border-[1px] border-white rounded-md">
      <Icon size={12} className="opacity-50" />
    </div>
  );
};
