import { createBrowserRouter } from "react-router";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import App from "./App";
import PostIdPage from "./Pages/PostIdPage";
import ErrorPage from "./Pages/ErrorPage";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: App, //as a layout
    children: [
      {
        path: "",
        Component: HomePage,
        loader: async () => {
          const response = await (
            await fetch("https://jsonplaceholder.typicode.com/todos/1")
          ).json();
          return response;
        },
      },
      {
        path: "about",
        Component: AboutPage,
        action: async ({ request }) => {
          const formData = await request.formData();
          return formData.get("title");
        }
      },
      {
        path: "contact",
        Component: ContactPage,
      },
      {
        // path: 'post/:id',// here : used for dyanamic page creation. that means if we want to create a page for post id then we can use this.  yaha : ka use kiya gaya hai dynamic page creation ke liye. jiska matlab hai agar hame post id ke  bad kuch bhi pass karna hai string or integer  to ham pass ker sakte hai.
        path: "post/:id?", //here ? used for  optional routes.it is alos known as optional params.That means if id is not present then it will not show any error.
        Component: PostIdPage,
      },
    ],
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);
