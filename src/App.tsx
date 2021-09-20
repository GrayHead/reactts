import Posts from "./Posts";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter, RouteChildrenProps
} from "react-router-dom";
import PostDetails from "./PostDetails";
import {RouteComponentProps} from "react-router";

const App = () => {
    return (
        <div>

            <Router>
                <Link to={'/posts'}>posts</Link>

                <Route exact path={'/posts'} render={() => <Posts/>}/>

                <Route path={'/posts/:id'} render={(props: RouteComponentProps) => <PostDetails {...props}/>}/>

            </Router>


        </div>
    );
}

export default App;
