import React from "react";
// import padosori from "../src/assets/padosori.png"
import padosori from "../src/assets/padosori.png"
import hackathon from "../src/assets/hackathon.png"
import hackathonByui from "../src/assets/hackathon-byui.png"
import recipe from "../src/assets/recipe.png"
import weather from "../src/assets/weather.png"
import chamber from "../src/assets/chamber.png"


export const projects = [
    {
      title: "Padosori Website",
      subtitle: "Typescript and React",
      description:
        "A web application allow users to find more information on Padosori housing and services.",
      image: {padosori},
      alt: "Padosori Website",
      link: "https://padosori.netlify.app/",
    },
    {
      title: "BYUI-HACK",
      subtitle: "React",
      description:
        "A web application for BYUI Hackathon 2023, allowing users to find more information on the event.",
      image: {hackathonByui},
      alt: "BYUI Hackathon",
      link: "https://byuihack.org/Homepage",
    },
    {
      title: "Recipe Finder",
      subtitle: "Javascript",
      description:
        "A simple recipe finder website made from HTML, CSS and Javascript. Users can search for recipes based on ingredients.",
      image: {recipe},
      alt: "Recipe Finder",
      link: "https://github.com/narah10/Recipe-Finder",
    },
    {
      title: "Weather Website",
      subtitle: "Javascript",
      description:
        "My first full website! Created a weather website using HTML, CSS and Javascript. There are 3 towns that show the current weather information to visitors.",
      image: {weather},
      alt: "Weather Website",
      link: "https://narah10.github.io/wdd230/lesson11/homepage.html",
    },
    {
      title: "Chamber of Commerce",
      subtitle: "Javascript",
      description:
        "A fun project where I created a Chamber of Commerce website using HTML, CSS and Javascript. The website includes a list of local businesses and their information as well as some information on West Seattle.",
      image: {chamber},
      alt: "Chamber of Commerce",
      link: "https://narah10.github.io/wdd230/commerce/",
    },
    {
      title: "Ease Heal",
      subtitle: "React and Firebase",
      description:
        "My first Hackathon project! A web application that offers an online resource for users who need support, guidance, and encouragement as they go through the difficulties of losing loved ones.",
      image: {hackathon},
      alt: "Ease Heal",
      link: "https://github.com/leslieecoder/byui-hackathon2023",
    },
  ]