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
    path: '/add-job',
    element: <AddJob />
  },
  {
    path: '/updatejob/?',
    element: <JobUpdatePage />
  }
];

export default AppRoutes;
