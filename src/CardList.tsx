import * as React from "react";
import { Card } from "./Card";
import { CardData } from "./types";
import { BrowserRouter as Router, Route } from "react-router-dom";

const List = ({ match, history }) => (
  <ul className="card-list">
    {cardData.map(card => (
      <Card
        key={card.id}
        isSelected={match.params.id === card.id}
        history={history}
        {...card}
      />
    ))}
  </ul>
);

export const CardList = () => (
  <Router>
    <Route path={["/portfolio/:id", "/portfolio/"]} component={List} />
  </Router>
);

const cardData: CardData[] = [
  // Photo by ivan Torres on Unsplash
  {
    id: "ppdemo2",
    category: "React, Typescript, framer motion",
    title: "Menu Builder",
    pointOfInterest: 0,
    width: "973px",
    overlayColor: "linear-gradient(rgb(71, 179, 246), rgb(128, 191, 241), rgb(168, 204, 236), rgb(202, 216, 231), rgb(233, 229, 225))",
    startX: -100,
    startY: 0,
    endX: -140,
    endY: 0,
    description: "Last weekend I thought I'd try out Typescript.|I recently interviewed at a startup in the restaurant/food delivery game, so I thought I'd mock up an interface for a client (restaurant) to use to build their menu.|It also turned out to be a nice dive into Framer Motion. I only worked on this in the evenings over the course of a week so it's definitely a bit clunky, but it felt nice to flex the React muscles again.  ",
    links: [{
      linkHref: "https://rplumlee.github.io/ppdemo/",
      linkText: "Live Demo"
    },
    {
      linkHref: "https://github.com/rplumlee/ppdemo",
      linkText: "github repo"
    }]
  },
  // Photo by Dennis Brendel on Unsplash
  {
    id: "smith",
    category: "Javascript, Java, MySQL",
    title: "Smith Optics",
    pointOfInterest: 120,
    width: "1050px",
    overlayColor: "linear-gradient(rgb(247, 201, 192), rgb(203, 191, 158), rgb(158, 180, 125), rgb(109, 168, 92), rgb(47, 155, 58))",
    startX: -340,
    startY: -70,
    endX: 0,
    endY: 0,
    description: "I spent the better part of the last two years on a team maintaining Smith's legacy ecommerce system, troubleshooting every kind of issue you can imagine and building out features. Here are some highlights:|-Building out custom landing pages with GreenSock|-Redoing the checkout system in React|-Coding features for handling warranty claims|-Handling complex data processing for a system transition",
    links: [{
      linkHref: "https://smithoptics.com",
      linkText: "Smith Optics"
    }]
  },
  // Photo by Alessandra Caretto on Unsplash
  {
    id: "vsv",
    category: "wordpress, javascript, php",
    title: "Visit Sun Valley",
    pointOfInterest: 260,
    width: "785px",
    overlayColor: "linear-gradient(rgb(202, 145, 207), rgb(192, 120, 202), rgb(181, 93, 197), rgb(169, 64, 192), rgb(156, 21, 186))",
    startX: 0,
    startY: -40,
    endX: -70,
    endY: 0,
    description: "Another client that I spent quite a bit of time on is Visit Sun Valley. It's easily the largest Wordpress site I've helped manage. Between being active bloggers and maintaining a comprehensive resource guide to traveling to and from Sun Valley, they are the definitive business directory and all seasons activity guide.|Some things I worked on are:|-Building a new front end for their calendar plugin using Handlebars and JQuery|-Coding a widget that takes the user's browser location and finds the quickest and cheapest flight routes to Sun Valley|-building out a protected board members section to integrated with the Wordpress backend for the client to manage and display documents|-Designing and building a variety of content pages and templates",
    links: [{
      linkHref: "https://visitsunvalley.com",
      linkText: "Visit Sun Valley"
    }]
  },
  // Photo by Taneli Lahtinen on Unsplash
  {
    id: "moore",
    category: "Shopify, Liquid, Javascript",
    title: "Moore Fashion",
    pointOfInterest: 200,
    width: "800px",
    overlayColor: "linear-gradient(rgb(191, 2, 2), rgb(188, 69, 63), rgb(177, 103, 118), rgb(151, 133, 176), rgb(84, 162, 236))",
    startX: 1,
    startY: 0,
    endX: -5,
    endY: -5,
    description: "This a project I picked up for a local fashion designer in my spare time and was my first foray into Shopify.|The client wanted a clean, unique look and there weren't any premium themes that fit the bill. I decided to build one using Fullpage.js and the liquid templates so that the client could inject and edit content in a variety of ways.",
    links: [{
      linkHref: "https://wearmoore.com/",
      linkText: "Moore Fashion"
    }]
  }/*,
  // Photo by Simone Hutsch on Unsplash
  {
    id: "d",
    category: "Photography",
    title: "The Latest Ultra-Specific Photography Editing Apps",
    pointOfInterest: 150,
    width: "#FA6779",
    overlayColor: "rgba(0,0,0,.4)",
    startX: 0,
    startY: 0,
    endX: 0,
    endY: 0,
    description: "hey",
    links: [{
      linkHref: "https://rplumlee.github.io/ppdemo/",
      linkText: "Live Demo"
    }]
  },
  // Photo by Siora Photography on Unsplash
  {
    id: "h",
    category: "They're all the same",
    title: "100 Cupcake Apps for the Cupcake Connoisseur",
    pointOfInterest: 60,
    width: "#282F49",
    overlayColor: "rgba(0,0,0,.4)",
    startX: 0,
    startY: 0,
    endX: 0,
    endY: 0,
    description: "hey",
    links: [{
      linkHref: "https://rplumlee.github.io/ppdemo/",
      linkText: "Live Demo"
    }]
  },
  // Photo by Yerlin Matu on Unsplash
  {
    id: "e",
    category: "Cats",
    title: "Yes, They Are Sociopaths",
    pointOfInterest: 200,
    width: "#AC7441",
    overlayColor: "rgba(0,0,0,.4)",
    startX: 0,
    startY: 0,
    endX: 0,
    endY: 0,
    description: "hey",
    links: [{
      linkHref: "https://rplumlee.github.io/ppdemo/",
      linkText: "Live Demo"
    }]
  },
  // Photo by Ali Abdul Rahman on Unsplash
  {
    id: "b",
    category: "Holidays",
    title: "Seriously the Only Escape is the Stratosphere",
    pointOfInterest: 260,
    width: "#CC555B",
    overlayColor: "rgba(0,0,0,.4)",
    startX: 0,
    startY: 0,
    endX: 0,
    endY: 0,
    description: "hey|new paragraph|another one",
    links: [{
      linkHref: "https://rplumlee.github.io/ppdemo/",
      linkText: "Live Demo"
    }]
  }*/
];
