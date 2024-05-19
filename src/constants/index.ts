import {
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  team1,
  team2,
  team3,
  team4,
  team5,
} from "@/assets/images";
import { FaDiscord, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const navLinks = [
  {
    to: "#",
    name: "Home",
    className: "text-swap",
  },
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
    name: "Filip Blagojevic",
    role: "Founder",
    about:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, delectus.",
    img: team1,
    socials: [
      {
        logo: FaDiscord,
        link: "https://www.linkedin.com/in/filip-srdoc/",
      },
      {
        logo: FaXTwitter,
        link: "https://www.linkedin.com/in/filip-srdoc/",
      },
      {
        logo: FaLinkedin,
        link: "https://www.linkedin.com/in/filip-srdoc/",
      },
    ],
  },
  {
    id: 3,
    name: "Djordje Stojmenovic",
    role: "Founder",
    about:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, delectus.",
    img: team3,
    socials: [
      {
        logo: FaDiscord,
        link: "https://www.linkedin.com/in/filip-srdoc/",
      },
      {
        logo: FaXTwitter,
        link: "https://www.linkedin.com/in/filip-srdoc/",
      },
      {
        logo: FaLinkedin,
        link: "https://www.linkedin.com/in/filip-srdoc/",
      },
    ],
  },
  {
    id: 4,
    name: "Nikola Dojcinovic",
    role: "Developer",
    about:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, delectus.",
    img: team4,
    socials: [
      {
        logo: FaDiscord,
        link: "https://www.linkedin.com/in/filip-srdoc/",
      },
      {
        logo: FaXTwitter,
        link: "https://www.linkedin.com/in/filip-srdoc/",
      },
      {
        logo: FaLinkedin,
        link: "https://www.linkedin.com/in/filip-srdoc/",
      },
    ],
  },
  {
    id: 5,
    name: "Stefanija Spasic",
    role: "Creator",
    about:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, delectus.",
    img: team5,
    socials: [
      {
        logo: FaDiscord,
        link: "https://www.linkedin.com/in/filip-srdoc/",
      },
      {
        logo: FaXTwitter,
        link: "https://www.linkedin.com/in/filip-srdoc/",
      },
      {
        logo: FaLinkedin,
        link: "https://www.linkedin.com/in/filip-srdoc/",
      },
    ],
  },
];
