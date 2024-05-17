"use client";

import { useState } from "react";
import { ChevronRight } from "react-feather";

export const DropDown: React.FC<{
  children: React.ReactNode;
  header: React.ReactNode;
}> = ({ children, header }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer px-3 -mx-3 py-1 -my-1 mb-0 rounded-md hover:bg-white hover:bg-opacity-10 select-none flex flex-row items-center"
      >
        <ChevronRight
          className={`transform ${
            isOpen ? "rotate-90" : "rotate-0"
          } transition-transform opacity-50`}
        />
        {header}
      </div>
      {isOpen && children}
    </div>
  );
};
