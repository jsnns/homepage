"use client";

import { DateTime } from "luxon";
import { useEffect, useState } from "react";

const birthday = DateTime.fromISO("1999-12-12");
export const Age = () => {
  const [time, setTime] = useState(birthday.diffNow("years").years * -1);

  useEffect(() => {
    setInterval(() => {
      setTime(birthday.diffNow("years").years * -1);
    }, 50);
  }, []);

  const age = time.toLocaleString(undefined, {
    minimumFractionDigits: 9,
  });

  const [int, dec] = age.split(".");

  return (
    <>
      <span className="">{int}</span>
      <span className="opacity-30 text-xs">.{dec}</span> year-old
    </>
  );
};
