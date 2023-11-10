import { Provider } from "react-redux";
import { Suspense, lazy } from "react";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./utils/stores/store";
import { createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import { Outlet } from "react-router-dom";
import SearchResults from "./components/SearchResults";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};

export default App;

const WatchPage = lazy(() => import("../src/components/WatchPage"));

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
        children: [
          {
            path: "/",
            element: <MainContainer />,
          },
          {
            path: "/watch",
            element: (
              <Suspense>
                <WatchPage />
              </Suspense>
            ),
          },
          {
            path: "/results",
            element: <SearchResults />,
          },
        ],
      },
    ],
  },
]);
