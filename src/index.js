import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react'
import App from './App';
import './index.css';
import { datadogRum } from '@datadog/browser-rum';
// ==================== Only for React Router v6.4.2 ====================
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
// } from "react-router-dom";
// import Layout from './components/Layout';
// import {
//   About, Contact, Home, ListPosts, PostDetail, PostForm
// } from './pages';
// ======================================================================
datadogRum.init({
  applicationId: 'c1f2e24c-0bc1-4375-9cc9-31dfd579a74d',
  clientToken: 'pubeafc2cbe85ace06b262485a35bae43c4',
  site: 'datadoghq.com',
  service: 'testux',

  // Specify a version number to identify the deployed version of your application in Datadog 
  // version: '1.0.0',
  sampleRate: 100,
  sessionReplaySampleRate: 20,
  trackInteractions: true,
  trackResources: true,
  trackLongTasks: true,
  defaultPrivacyLevel: 'mask-user-input',
  actionNameAttribute: 'data-custom-name',
  trackViewsManually: true,

});

datadogRum.startSessionReplayRecording();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
