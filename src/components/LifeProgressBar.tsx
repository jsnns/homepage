import { BIRTHDAY } from "@/data/profile";
import { DateTime } from "luxon";

export const LifeProgressBar = () => {
  const today = DateTime.now();
  const lifeExpectancy = 80;

  const yearsLived = today.diff(BIRTHDAY, "years").years;

  const lifePercentage = (yearsLived / lifeExpectancy) * 100;

  return (
    <div className="flex flex-col py-2">
      <div className="w-full h-4 border-white border-opacity-25 border-[1px] rounded-full">
        <div
          className="h-full flex flex-col justify-center text-right rounded-l-full bg-white bg-opacity-25"
          style={{ width: `${lifePercentage}%` }}
        >
          <p className="text-white text-xs pr-2">
            {Math.floor(yearsLived)} years old
          </p>
        </div>
      </div>
    </div>
  );
};
