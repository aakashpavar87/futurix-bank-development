import { getAllUsers } from "../apis/UserApi";
import { people01, people02, people03, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star  } from "../assets";
const {data} = await getAllUsers()
console.log(data.length);
export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "product",
    title: "Product",
  },
  {
    id: "investor",
    title: "Investor"
  },
  {
    id: "clients",
    title: "Clients",
  },
  {
    id: "login",
    title: "Login"
  },
  {
    id: "register",
    title: "Join Us"
  }
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Rewards",
    content:
      "The best credit cards offer some tantalizing combinations of promotions and prizes",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% Secured",
    content:
      "We take proactive steps make sure your information and transactions are secure.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Balance Transfer",
    content:
      "A balance transfer credit card can save you a lot of money in interest charges.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Aakash Pawar",
    title: "Developer & Leader",
    img: people02,
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Harsh Gajjar",
    title: "Developer & Leader",
    img: people01,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Bharat Kumavat",
    title: "Developer & Leader",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "User On-Boarding",
    value: 100+data.length+"+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "23+",
  },
  {
    id: "stats-3",
    title: "Transaction",
    value: "₹ 230M+",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Contact Us",
        link: "/contact-us",
      },
      {
        name: "How it Works",
        link: "/how-to-use",
      },
      {
        name: "Explore",
        link: "/explore-us",
      },
      {
        name: "Terms & Services",
        link: "/terms-and-condition",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "/help-center/",
      },
      {
        name: "Partners",
        link: "/partners/",
      },
      {
        name: "Suggestions",
        link: "/suggestions/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "/#clients",
      },
      {
        name: "Become a Partner",
        link: "/investorRegister",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];