import React, { lazy, ReactElement, Suspense } from "react";
import { Route } from "react-router";

export const APIUrl = "https://api.aviationstack.com/v1/";

const HomePage = lazy(() => import("../pages/home"));
const WeatherPage = lazy(() => import("../pages/weather"));

type navigationLink = {
    name: string;
    path: string;
    element: ReactElement
};

export const navigationLinks:Array<navigationLink> = [
    {
        name: "Home",
        path: "/",
        element: React.createElement(HomePage)
    },
    {
        name: "Weather",
        path: "/weather",
        element: React.createElement(WeatherPage)
    }
];

export const pageSuspense = (component:ReactElement):ReactElement => {
    return React.createElement(Suspense,{children:component})
}

export const AppRoutes = (): ReactElement => { 
    const newElements = navigationLinks.map((navigation)=> {
       return React.createElement(Route, { key: navigation.name, path: navigation.path, element: pageSuspense(navigation.element)});
    });
    return React.createElement(React.Fragment, null, ...newElements);
}