
import { Provider } from "react-redux";
import "./App.css"
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";


const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children: [
    {
      path: "/",
      element: <MainContainer />
    },
    {
      path: "/watch",
      element: <WatchPage />
    }

  ]
}])


function App() {
  return (
    <Provider store={store}>
      <div className="App">

        <Head />
        <RouterProvider router={appRouter} />
        {/* 
* head
* Body 
*  siderBar
* MenuItem
*  Buttonlist
*  Vide0Container
*   VideoCard



*/}
      </div>
    </Provider>
  );
}

export default App;
