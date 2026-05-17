// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './App.tsx';
// import './index.css';
// import { Toaster } from 'react-hot-toast';

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <Toaster
//       position="top-right"
//       toastOptions={{
//         style: {
//           background: '#111',
//           color: '#fff',
//           border: '1px solid #facc15',
//         },
//       }}
//     />

//     <App />
//   </StrictMode>
// );






import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";

import "./index.css";

import {
  ToastContainer,
} from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

createRoot(
  document.getElementById("root")!
).render(
  <StrictMode>
    <App />

    <ToastContainer
      position="top-right"
      autoClose={3000}
      theme="dark"
    />
  </StrictMode>
);