import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { StoreDataProvider } from "./contexts/StoreDataContext";
import {
  Navbar,
  BelowNavbar,
  Carousel,
  BestSelling,
  Banner,
  TopCategories,
  RecentHistory,
  ProductsGrid,
  ProductSpecs,
  Footer,
} from "./components";

function App() {
  return (
    <Router>
      <StoreDataProvider>
        <div className="App">
          <Navbar />
          <BelowNavbar />
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return (
                  <>
                    <Carousel />
                    <BestSelling />
                    <Banner />
                    <TopCategories />
                    <RecentHistory />
                  </>
                );
              }}
            />
            <Route exact path="/:category" component={ProductsGrid} />
            <Route
              exact
              path="/:category/:productId"
              component={ProductSpecs}
            />
          </Switch>
          <Footer />
        </div>
      </StoreDataProvider>
    </Router>
  );
}

export default App;
