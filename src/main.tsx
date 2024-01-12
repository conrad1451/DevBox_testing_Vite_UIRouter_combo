import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// const Hello = () => <h3>hello world</h3>;
// const About = () => <h3>Its the UI-Router hello world app!</h3>;

// const NoCap = () => {
//   const activeClass = "active";
//   const helloSref = useSrefActive("hello", null, activeClass);
//   const aboutSref = useSrefActive("about", null, activeClass);

//   return (
//     <div>
//       <a {...helloSref}>Hello</a>
//       <a {...aboutSref}>About</a>
//       <UIView />
//     </div>
//   );
// };

// const helloState = { name: "hello", url: "/hello", component: Hello };
// const aboutState = { name: "about", url: "/about", component: About };

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// );
