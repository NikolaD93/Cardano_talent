import {
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  team1,
  team2,
  team3,
} from "@/assets/images";

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
    img: team1,
    contact: "https://www.linkedin.com/in/filipblagojevic/",
  },
  {
    id: 2,
    name: "Filip Srdoc",
    role: "Founder",
    img: team2,
    contact: "https://www.linkedin.com/in/filip-srdoc/",
  },
  {
    id: 3,
    name: "Djordje Stojmenovic",
    role: "Partner",
    img: team3,
    contact: "https://www.linkedin.com/in/djordjestojmenovic/",
  },
];
