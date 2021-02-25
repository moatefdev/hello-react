import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Error from "./components/Error";
import PostDetails from "./components/posts/PostDetails";
import CreeatePost from "./components/posts/CreatePost";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/post/:id" component={PostDetails} />
            <Route path="/create" component={CreeatePost} />
            <Route path="*" component={Error} />
          </Switch>
        </main>
        <h1>App</h1>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
