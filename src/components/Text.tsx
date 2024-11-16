export const Pg: React.FC<{ text: string }> = ({ text }) => {
  return <p>{text}</p>;
};

export const Header: React.FC<{ text: string }> = ({ text }) => {
  return <h2 className="text-xl font-light">{text}</h2>;
};

export const Subheader: React.FC<{ text: string }> = ({ text }) => {
  return <h2 className="text-lg font-light opacity-50">{text}</h2>;
};

export const Section: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className="flex flex-col gap-2 my-2">{children}</div>;
};

export const Bullets: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <ul className="list-disc ml-8">{children}</ul>;
};
