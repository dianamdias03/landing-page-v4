import React from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';
// Screens
import Landing from "./screens/Landing.jsx";

export default function App() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;600;800&display=swap" rel="stylesheet" />
        </Helmet>
        <Landing />
      </HelmetProvider>
    </>
  );
}

