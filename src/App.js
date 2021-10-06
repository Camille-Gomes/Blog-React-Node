import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
    const currentUser = false;
    return (
        <BrowserRouter>
            <TopBar></TopBar>
            <Switch>
                <Route exact path="/" component={Home}>
                    <Home></Home>
                </Route>
                <Route path="/posts" component={Home}>
                    <Home></Home>
                </Route>
                <Route exact path="/register" component={Register}>
                    {currentUser ? <Home /> : <Register />}
                </Route>
                <Route exact path="/login" component={Login}>
                    {currentUser ? <Home></Home> : <Login></Login>}
                </Route>
                <Route exact path="/post/:id" component={Home}>
                    <Single></Single>
                </Route>
                <Route exact path="/write" component={Write}>
                    {currentUser ? <Write></Write> : <Login></Login>}
                </Route>
                <Route exact path="/settings" component={Settings}>
                    {currentUser ? <Settings></Settings> : <Login></Login>}
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
