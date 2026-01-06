import arrowBack from "../assets/icons/arrow-back.png";
import arrowDown from "@/assets/icons/arrow-down.png";
import arrowRight from "@/assets/icons/arrow-right.png";
import bag from "@/assets/icons/bag.png";
import bell from "@/assets/icons/bell.png";
import caretArrow from "@/assets/icons/caret-arrow-up.png";
import cloud from "@/assets/icons/cloud.png";
import cloudy from "@/assets/icons/cloudy.png";
import downwardArrow from "@/assets/icons/downward-arrow.png";
import check from "@/assets/icons/check.png";
import clock from "@/assets/icons/clock.png";
import dollar from "@/assets/icons/dollar.png";
import envelope from "@/assets/icons/envelope.png";
import home from "@/assets/icons/home.png";
import home1 from "@/assets/icons/home1.png";
import location from "@/assets/icons/location-pin.png";
import logout from "@/assets/icons/logout.png";
import overcast from "@/assets/icons/overcast.png";
import rain from "@/assets/icons/rain.png";
import sun from "@/assets/icons/sun.png";
import weather from "@/assets/icons/weather.png";
import profile from "@/assets/icons/profile.png";
import minus from "@/assets/icons/minus.png";
import pencil from "@/assets/icons/pencil.png";
import person from "@/assets/icons/person.png";
import phone from "@/assets/icons/phone.png";
import plus from "@/assets/icons/plus.png";
import search from "@/assets/icons/search.png";
import search1 from "@/assets/icons/search1.png";
import shoppingBag from "@/assets/icons/shopping-bag.png";
import star from "@/assets/icons/star.png";
import trash from "@/assets/icons/trash.png";
import user from "@/assets/icons/user.png";

import avatar from "@/assets/images/avatar.png";
import avocado from "@/assets/images/avocado.png";
import cucumber from "@/assets/images/cucumber.png";
import emptyState from "@/assets/images/empty-state.png";
import logo from "@/assets/images/logo.png";
import mushrooms from "@/assets/images/mushrooms.png";
import spanish from "@/assets/images/salad.png";
import success from "@/assets/images/success.png";
import tomatoes from "@/assets/images/tomatoes.png";
import logo1 from "@/assets/images/logo1.png";
import logoNoBg from "@/assets/images/logo-no-bg.png";
import view1 from "@/assets/images/view1.png";
import view2 from "@/assets/images/view2.png";
import view3 from "@/assets/images/view3.png";

export const images = {
    avatar,
    avocado,
    cucumber,
    emptyState,
    logo,
    logo1,
    view1,
    view2,
    view3,
    logoNoBg,
    mushrooms,
    spanish,
    success,
    tomatoes,
    arrowBack,
    arrowDown,
    arrowRight,
    bag,
    bell,
    caretArrow,
    downwardArrow,
    overcast,
    rain,
    sun,
    weather,
    cloud,
    cloudy,
    check,
    clock,
    dollar,
    envelope,
    home,
    location,
    logout,
    minus,
    pencil,
    home1,
    person,
    phone,
    plus,
    search,
    search1,
    profile,
    shoppingBag,
    star,
    trash,
    user,
};


export const WEATHER = {
  temperature: 26,
  high: 32,
  low: 18,
  condition: "Mostly Sunny",
  location: "Dharan",
  locationIcon: location,
  icon: cloudy,
};


export const home_banners = [
  {
    id: 1,
    title: "Know Best Market Prices",
    buttonText: "View Market",
    image: view1,
    route: "/market",
  },
  {
    id: 2,
    title: "Know Best Market Prices",
    buttonText: "View Market",
    image: view2,
    route: "/market",
  },
  {
    id: 3,
    title: "Know Best Market Prices",
    buttonText: "View Market",
    image: view3,
    route: "/market",
  },
];


export const market_prices = [
  {
    id: 1,
    name: "Spinach",
    market: "Buddhabare Hatiya",
    price: 130,
    unit: "kg",
    updatedAt: "2 hrs ago",
    image: spanish,
  },
  {
    id: 2,
    name: "Tomato",
    market: "Thulo Bazar",
    price: 80,
    unit: "kg",
    updatedAt: "6 hrs ago",
    image: tomatoes,
  },
  {
    id: 3,
    name: "Cucumber",
    market: "Gudri Bazar",
    price: 230,
    unit: "kg",
    updatedAt: "3 hrs ago",
    image: cucumber,
  },
  {
    id: 4,
    name: "Mushrooms",
    market: "Kamal Bazar",
    price: 330,
    unit: "kg",
    updatedAt: "5 hrs ago",
    image: mushrooms,
  },
];



// export const QUICK_ACTIONS = [
//   {
//     id: 1,
//     title: "Market",
//     icon: "market",
//     route: "/market",
//   },
//   {
//     id: 2,
//     title: "Services",
//     icon: "tractor",
//     route: "/services",
//   },
//   {
//     id: 3,
//     title: "P/L Cal",
//     icon: "calculator",
//     route: "/calculator",
//   },
//   {
//     id: 4,
//     title: "Diagnosis",
//     icon: "chat",
//     route: "/diagnosis",
//   },
// ];