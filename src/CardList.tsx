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
  {
    id: "ppdemo",
    category: "React, Typescript, framer motion",
    title: "Menu Interface",
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
  {
    id: "gilded-rose",
    category: "Typescript, Jest",
    title: "The Gilded Rose",
    pointOfInterest: 200,
    width: "800px",
    overlayColor: "linear-gradient(rgb(191, 2, 2), rgb(188, 69, 63), rgb(177, 103, 118), rgb(151, 133, 176), rgb(84, 162, 236))",
    startX: 1,
    startY: 0,
    endX: -5,
    endY: -5,
    description: "I was passed this Typescript coding challenge recently and gave it a go. I had to refactor an inventory system as if I were working on legacy code, assuming the current system was a dependency elsewhere and needed to maintain functionality.|The project was initialized with TSDX (https://github.com/formium/tsdx), so I used Jest for the testing.",
    links: [{
      linkHref: "https://github.com/rplumlee/The-Gilded-Rose",
      linkText: "Repo"
    }]
  },
  {
    id: "portfolio",
    category: "React, Typescript, framer motion",
    title: "Portfolio Fork",
    pointOfInterest: 200,
    width: "800px",
    overlayColor: "linear-gradient( rgb(42, 231, 114), rgb(76, 197, 145), rgb(82, 163, 171), rgb(68, 129, 195), rgb(2, 96, 218))",
    startX: 1,
    startY: 0,
    endX: -5,
    endY: -5,
    description: "I decided to start my portfolio with the App Store UI demo linked to on Framer Motion (https://codesandbox.io/s/app-store-ui-using-react-and-framer-motion-5z1u1), but soon realized it didn't have everything I needed.  I've been extending it as I go, so far I've added the following features: |-Card overlay configuration|-Extra options for controlling image positioning|-3 row repeating layout|-Newline functionality in expanded content|-Ability to add buttons to cards",
    links: [{
      linkHref: "https://github.com/rplumlee/portfolio",
      linkText: "Repo"
    }]
  },
  {
    id: "moore",
    category: "Shopify, Liquid, Javascript",
    title: "Moore Fashion",
    pointOfInterest: 200,
    width: "800px",
    overlayColor: "linear-gradient(to top,rgb(188, 247, 139), rgb(199, 214, 155), rgb(204, 179, 169), rgb(206, 144, 181), rgb(204, 104, 192))",
    startX: 1,
    startY: 0,
    endX: -5,
    endY: -5,
    description: "This a project I picked up for a local fashion designer in my spare time and was my first foray into Shopify.|The client wanted a clean, unique look and there weren't any premium themes that fit the bill. I decided to build one using Fullpage.js and the liquid templates so that the client could inject and edit content in a variety of ways.",
    links: [{
      linkHref: "https://wearmoore.com/",
      linkText: "Moore Fashion"
    }]
  },
  {
    id: "sip",
    category: "Wordpress, php, javascript",
    title: "Senior Insurance Parter",
    pointOfInterest: 200,
    width: "800px",
    overlayColor: "linear-gradient(rgb(32, 68, 186), rgb(54, 104, 199), rgb(64, 140, 212), rgb(67, 176, 225), rgb(62, 214, 237))",
    startX: 1,
    startY: 0,
    endX: -45,
    endY: -70,
    description: "This was a quick and fun project I just set up for an insurance company. |The initial buildout consisted of designing the site and building a quote engine that would return insurance policies for users based on a questionaire.|It's built on wordpress using the Jevelin theme, and plain old JQuery for the quote engine.",
    links: [{
      linkHref: "https://seniorinsurancepartner.com/",
      linkText: "Senior Insurance Partner"
    }]
  }/*,
  {
    id: "adapt",
    category: "Wordpress, php, javascript",
    title: "ADAPT Training",
    pointOfInterest: 200,
    width: "800px",
    overlayColor: "linear-gradient(to top,rgb(172, 15, 235), rgb(171, 102, 228), rgb(163, 151, 219), rgb(146, 195, 210), rgb(110, 237, 199))",
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
