import "./App.css";
import { Information } from "./Information";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { RecurlyWrapper } from "./PaymentForm/RecurlyWrapper";

const router = createHashRouter([
  {
    path: "/",
    element: <RecurlyWrapper />,
  },
  {
    path: "/info",
    element: <Information />,
  },
]);

function App() {
  return (
    <>
      <header>
        <h1>STORE</h1>
      </header>
      <main>
        <RouterProvider router={router} />
      </main>
      <footer>since 2022™</footer>
    </>
  );
}

export default App;
