import React from "react";
import { ComponentType } from "react";
import { RouteComponentProps } from "react-router-dom";

import Home from "./home";
import About from "./about";
import Project from "./project";
import EasyCycleProject from "./project/easycycle";

interface Route {
  link: string;
  title: string;
  component:
    | ComponentType<RouteComponentProps<any>>
    | ComponentType<any>
    | React.FC;
}

import easyCycle from "resources/images/easycycle/easycycleBig.jpg";
import easyGif from "resources/images/easycycle/animation.gif";
import megasport from "resources/images/megasport/megasportBig.png";
import casino from "resources/images/casino/casinoBig.jpg";
import fly from "resources/images/fly/flyBig.jpg";
import wispa from "resources/images/wispa/wispaBig.jpg";

export const Pages: Array<Route> = [
  {
    link: "/",
    title: "Home",
    component: Home,
  },
  {
    link: "/about",
    title: "About",
    component: About,
  },
  {
    link: "/easycycle",
    title: "Project",
    component: () => <EasyCycleProject imgUrl={easyCycle} gifUrl={easyGif} />,
  },
  {
    link: "/megasport",
    title: "Project",
    component: () => <Project imgUrl={megasport} />,
  },
  {
    link: "/casino",
    title: "Project",
    component: () => <Project imgUrl={casino} />,
  },
  {
    link: "/fly",
    title: "Project",
    component: () => <Project imgUrl={fly} />,
  },
  {
    link: "/wispa",
    title: "Project",
    component: () => <Project imgUrl={wispa} />,
  },
];
