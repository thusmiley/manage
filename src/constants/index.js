import facebook from "../assets/icon-facebook.svg";
import pinterest from "../assets/icon-pinterest.svg";
import twitter from "../assets/icon-twitter.svg";
import instagram from "../assets/icon-instagram.svg";
import youtube from "../assets/icon-youtube.svg";

export const navLinks = [
  {
    id: "pricing",
    title: "Pricing",
  },
  {
    id: "product",
    title: "Product",
  },
  {
    id: "about",
    title: "About Us",
  },
  {
    id: "careers",
    title: "Careers",
  },
  {
    id: "community",
    title: "Community",
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon:  facebook ,
    link: "/",
  },
  {
    id: "social-media-2",
    icon: youtube ,
    link: "/",
  },
  {
    id: "social-media-3",
    icon: twitter ,
    link: "/",
  },
  {
    id: "social-media-4",
    icon: pinterest ,
    link: "/",
  },
  {
    id: "social-media-5",
    icon:  instagram ,
    link: "/",
  },
];

export const footerLinks = [
  {
    group: "group-1",
    links: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Pricing",
        link: "/",
      },
      {
        name: "Products",
        link: "/",
      },
      {
        name: "About Us",
        link: "/",
      },
    ],
  },
  {
    group: "group-2",
    links: [
      {
        name: "Careers",
        link: "/",
      },
      {
        name: "Community",
        link: "/",
      },
      {
        name: "Privacy Policy",
        link: "/",
      },
    ],
  },
];
