import Link from "next/link";

import { FaGithub } from "react-icons/fa";
import { SiNotion } from "react-icons/si";

interface SocialProps {
  containerStyles: string;
  iconStyles: string;
}

const socials = [
  {
    icon: <FaGithub />,
    path: "",
  },
  {
    icon: <SiNotion />,
    path: "",
  },
];

export default function Social({ containerStyles, iconStyles }: SocialProps) {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
}
