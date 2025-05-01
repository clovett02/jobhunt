import { Home } from "./pages/Home";
import { AddJob } from "./pages/AddJob";
import React from "react";
import { JobUpdatePageFunc } from "./pages/JobUpdatePageFunc";


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
    element: <JobUpdatePageFunc />
  }
];

export default AppRoutes;
