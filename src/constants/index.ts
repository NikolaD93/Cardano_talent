import {
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  team1,
  team3,
  team4,
  team5,
} from "@/assets/images";
import { FaDiscord, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const navLinks = [
  {
    to: "#about",
    name: "About",
    className: "text-swap",
  },
  {
    to: "#team",
    name: "Team",
    className: "text-swap",
  },
  {
    to: "#faq",
    name: "FAQ",
    className: "text-swap",
  },
  {
    to: "blog",
    name: "Blog",
  },
];

export const members = [
  {
    id: "member1",
    img: avatar1,
    fallback: "avatar 1",
  },
  {
    id: "member2",
    img: avatar2,
    fallback: "avatar 2",
  },
  {
    id: "member3",
    img: avatar3,
    fallback: "avatar 3",
  },
  {
    id: "member4",
    img: avatar4,
    fallback: "avatar 4",
  },
  {
    id: "member5",
    img: avatar5,
    fallback: "avatar 5",
  },
];

export const team = [
  {
    id: 1,
    name: "Filip",
    role: "Founder",
    about:
      "A seasoned Blockchain Consultant and Cardano Specialist with a deep technical background.",
    img: team1,
    socials: [
      {
        logo: FaXTwitter,
        link: "https://x.com/filipblagojevi8",
      },
      {
        logo: FaLinkedin,
        link: "https://www.linkedin.com/in/filipblagojevic",
      },
    ],
  },
  {
    id: 3,
    name: "DJ",
    role: "Founder",
    about:
      "Blockchain Enthusiast with a unique blend of expertise in both marketing and technical aspects of the industry.",
    img: team3,
    socials: [
      {
        logo: FaXTwitter,
        link: "https://x.com/Cardano_DJ",
      },
      {
        logo: FaLinkedin,
        link: "https://www.linkedin.com/in/djordjestojmenovic/",
      },
    ],
  },
  {
    id: 4,
    name: "Nikola",
    role: "Developer",
    about:
      "Skilled Frontend and Backend Ninja Developer, known for his exceptional coding prowess and versatility.",
    img: team4,
    socials: [
      {
        logo: FaXTwitter,
        link: "https://x.com/dojc70100",
      },
      {
        logo: FaLinkedin,
        link: "https://www.linkedin.com/in/nikoladojcinovic93/",
      },
      {
        logo: FaYoutube,
        link: "https://www.youtube.com/@dojcinovic651",
      },
    ],
  },
  {
    id: 5,
    name: "Stef",
    role: "Creator",
    about:
      "Her artistic vision and attention to detail ensure that our projects not only stand out but also resonate deeply with our audience.",
    img: team5,
    socials: [
      {
        logo: FaXTwitter,
        link: "https://x.com/___Stefanija___",
      },
      {
        logo: FaLinkedin,
        link: "https://www.linkedin.com/in/stefanija-spasic/",
      },
    ],
  },
];

export const footerLinks = [
  {
    to: "https://discord.com/invite/5U4Z3r2NJb",
    logo: FaDiscord,
  },
  {
    to: "https://twitter.com/CardanoTalent",
    logo: FaXTwitter,
  },
  {
    to: "https://www.linkedin.com/company/cardanotalent",
    logo: FaLinkedin,
  },
];
