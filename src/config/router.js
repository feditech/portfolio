import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, Expertise, Certification, Testinomial, Hireme } from '../containers'

function AppRouter() {

    return (
        <Router>
            <Route exact path="/" component={Home} />
            <Route exact path="/expertise" component={Expertise} />
            <Route exact path="/certification"  component={Certification}  />
            <Route exact path="/testimonial"  component={Testinomial} />
            <Route exact path="/hireme" component={Hireme} />
        </Router>
    )
}

export default AppRouter;