import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";
import NavBar from "./components/NavBar";
import { Component } from "react";
import UserEdit from "./components/UserEdit";
import UserCreation from "./components/UserCreation";

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <div className="App p-10 bg-slate-100">
          <Switch>
            <Route path="/users" exact component={UserList} />
            <Route path="/users/details/:userId" component={UserDetails} />
            <Route path="/users/edit/:userId" component={UserEdit} />
            <Route path="/users/new" component={UserCreation} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
