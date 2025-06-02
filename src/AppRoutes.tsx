import { Home } from "./pages/Home.tsx";
import { AddJob } from "./pages/AddJob.tsx";
import { JobUpdatePageFunc } from "./pages/JobUpdatePage.tsx";


export const AppRoutes = [
  {
    index: true,
    path: '/',
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

