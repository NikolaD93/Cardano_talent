import {
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  team2,
  team3,
  team4,
  circle,
  shape,
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

export const about = [
  {
    title: "Specialized Focus on Crypto",
    description:
      "We specialize exclusively in the crypto industry, ensuring we understand the nuances and specific requirements of this rapidly evolving field. Our expertise allows us to find candidates with the right skills and knowledge to drive your business forward.",
    number: "01",
  },
  {
    title: "Quality Over Quantity",
    description:
      "We believe in the quality of candidates over the quantity of resumes. Our rigorous vetting process ensures that only the most qualified and suitable candidates are presented to you. This saves you time and helps you find the perfect fit for your organization.",
    number: "02",
    img: circle,
  },
  {
    title: "Proven Track Record",
    description:
      "With years of experience in crypto recruitment, we have helped numerous companies build strong teams that excel. Our success stories span various roles and levels, from developers and analysts to executives, showcasing our ability to deliver results consistently.",
    number: "03",
  },
  {
    title: "Trust and Reliability",
    description:
      "Just like the trusted bookshop with excellent customer service, we have built our reputation on trust and reliability. Our clients return to us because they know we deliver what we promise — exceptional talent and unmatched service.",
    number: "04",
  },
  {
    title: "Tailored Solutions",
    description:
      "We understand that every company is unique. Our solutions are customized to meet your specific needs, whether you're a startup looking for foundational team members or an established company seeking to expand. We work closely with you to understand your culture, goals, and requirements.",
    number: "05",
  },
  {
    title: "Comprehensive Support",
    description:
      "From the initial consultation to onboarding, we provide comprehensive support throughout the hiring process. Our team is always available to assist you, ensuring a smooth and efficient experience.",
    number: "06",
    img: shape,
  },
  {
    title: "Passion for Crypto",
    description:
      "Our passion for the crypto industry drives everything we do. We stay abreast of the latest trends and developments, ensuring that our knowledge is current and our approach is innovative. Your passion is our passion.",
    number: "07",
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
    id: 3,
    name: "DJ",
    role: "Founder",
    about:
      "Blockchain Enthusiast with a unique blend of expertise in both marketing and technical aspects of the industry.",
    img: team2,
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
    img: team3,
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
    img: team4,
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
