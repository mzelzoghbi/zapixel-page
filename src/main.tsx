
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import PrivacyPolicy from "./PrivacyPolicy.tsx";
import "./index.css";

// Handle GitHub Pages SPA redirect format
// The 404.html redirects /privacy to /?/privacy
let pathname = window.location.pathname;

// Check if we're in the redirected format (/?/path)
if (window.location.search.startsWith('?/')) {
  const redirectPath = window.location.search.slice(2).split('&')[0].replace(/~and~/g, '&');
  pathname = '/' + redirectPath;
  // Clean up the URL
  window.history.replaceState({}, '', pathname);
}

const path = pathname.toLowerCase();
const showPrivacy = path.includes("privacy");

createRoot(document.getElementById("root")!).render(showPrivacy ? <PrivacyPolicy /> : <App />);
  
