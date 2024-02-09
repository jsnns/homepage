import { Bullet } from "@/data/resume";
import classNames from "classnames";

export const BulletList: React.FC<{ bullets: Bullet[]; level?: number }> = ({
  bullets,
  level = 0,
}) => {
  return (
    <ul
      className={classNames("list-disc", {
        "my-2": level === 1,
      })}
      style={{ marginLeft: `${level * 1.5}rem` }}
    >
      {bullets.map((bullet, i) => (
        <li key={i} className="">
          {bullet.text}
          {bullet.subBullets && (
            <BulletList bullets={bullet.subBullets} level={level + 1} />
          )}
        </li>
      ))}
    </ul>
  );
};
