import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./hocs/Layout";
import Blog from "./components/Blog";
import BlogDetail from "./components/BlogDetail";
import Home from "./components/Home";
import Category from "./components/Category";
const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/category/:id" component={Category} />
          <Route exact path="/blog/:id" component={BlogDetail} />
        </Switch>
      </Layout>
    </Router>
  );
};
export default App;

/*  */
