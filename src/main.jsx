import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home.jsx';
import Apps from './Components/Apps.jsx';
import Installation from './Components/Installation.jsx';
import ErrorPage from './Components/ErrorPage.jsx';
import AppDetails from './Components/AppDetails.jsx';
import AppError from './Components/AppError.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
     errorElement: <ErrorPage></ErrorPage>,
    children: [
            {
                index: true,
                path:"/",
                loader: () => fetch('/trendingApps.json') ,
               
                Component: Home
            },
            {
                path: 'apps',
                loader: () => fetch('/appData.json'),
                Component:Apps
            },
     
            {
              path: 'apps/:appId',
              loader: ({params}) => {
                return fetch('/appData.json')
                .then(res => res.json())
                .then(data =>{
                  const app = data.find(app => app.id == parseInt(params.appId));
                  return app || null;
                })

              } ,
              Component: AppDetails,
              errorElement: <AppError></AppError>
            },
             {
                path: 'installation',
                loader: () => fetch('/appData.json'),
                Component:Installation
            },
           
         
          ]
        }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
