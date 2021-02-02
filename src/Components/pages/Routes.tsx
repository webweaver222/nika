import React from "react";
import { ComponentType } from "react";
import { RouteComponentProps } from "react-router-dom";

import Home from "./home";
import Project from "./project";

interface Route {
  link: string;
  title: string;
  component:
    | ComponentType<RouteComponentProps<any>>
    | ComponentType<any>
    | React.FC;
}

import easyCycle from "resources/images/easycycle/easycycleBig.png";
import megasport from "resources/images/megasport/megasportBig.png";

export const Pages: Array<Route> = [
  {
    link: "/",
    title: "Home",
    component: Home,
  },
  {
    link: "/easycycle",
    title: "Project",
    component: () => <Project imgUrl={easyCycle} />,
  },
  {
    link: "/megasport",
    title: "Project",
    component: () => <Project imgUrl={megasport} />,
  },
];
