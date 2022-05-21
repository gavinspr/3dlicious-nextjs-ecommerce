import { ImGithub } from "react-icons/im";
import { SiLinkedin } from "react-icons/si";
import { MdEmail } from "react-icons/md";

export type ContactDetails = {
  name: string;
  color: string;
  link: string;
  icon: JSX.Element;
};

const CONTACT_DETAILS: ContactDetails[] = [
  { name: "Github", color: "purple", link: "", icon: <ImGithub size={30} /> },
  {
    name: "LinkedIn",
    color: "linkedin",
    link: "",
    icon: <SiLinkedin size={30} />,
  },
  { name: "Email", color: "red", link: "", icon: <MdEmail size={30} /> },
];

export default CONTACT_DETAILS;
