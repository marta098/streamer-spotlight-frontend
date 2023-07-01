import {BrowserRouter as Router, Route, Routes, Switch} from "react-router-dom";
import StreamerDetails from "./pages/StreamerDetails";
import WithRouter from "./hooks/WithRouter";
import Redirect from "react-router-dom/es/Redirect";


function App() {
  return (

      <Router>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/streamer"/>
                </Route>
            <Route exact path={`/streamer/:streamerId`} component={routeParams => <StreamerDetails
               streamerId={routeParams.match.params.streamerId}/>}/>
            </Switch>
      </Router>
  );
}

export default App;
