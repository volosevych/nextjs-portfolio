import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const social = [
    {icon: <FaGithub/>, path: 'https://github.com/volosevych'},
    {icon: <FaLinkedin/>, path: 'https://www.linkedin.com/in/anastasia-volosevych-3753741aa/'},
    // {icon: <FaTwitter/>, path: ''},
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {social.map((item, index) => {
        return <Link key={index} href={item.path} className={iconStyles}>{item.icon}</Link>
      })}
    </div>
  )
}

export default Socials
