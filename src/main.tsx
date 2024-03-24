import React from 'react'
import ReactDOM from 'react-dom/client'
import bridge from "@vkontakte/vk-bridge";
import App from './App.tsx'

bridge.send("VKWebAppInit");

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
