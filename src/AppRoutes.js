import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { AddJob } from "./components/AddJob";
import React from "react";
import { JobUpdatePage } from "./components/JobUpdatePage";


const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  },
  {
    path: '/add-job',
    element: <AddJob />
  },
  {
    path: '/updatejob/?',
    element: <JobUpdatePage />
  }
];

export default AppRoutes;
