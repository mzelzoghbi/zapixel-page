
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import PrivacyPolicy from "./PrivacyPolicy.tsx";
import "./index.css";

const path = window.location.pathname.toLowerCase();
const showPrivacy = path.includes("privacy");

createRoot(document.getElementById("root")!).render(showPrivacy ? <PrivacyPolicy /> : <App />);
  
