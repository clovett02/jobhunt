import { Home } from "./pages/Home.tsx";
import { AddJob } from "./pages/AddJob.jsx";
import React from "react";
import { JobUpdatePageFunc } from "./pages/JobUpdatePageFunc.tsx";


const AppRoutes = [
  {
    index: true,
    element: <Home/>
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
