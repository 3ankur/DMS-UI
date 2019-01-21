import React from 'react';
import { Route } from 'react-router-dom';
import Buttons from './buttons';
import Badges from './badges';
import Tabs from './tabs';
import SocialButton from './socialButton';
import Cards from './cards';
import Alerts from './alert';
import ProgressBars from './progressBars';
import Switches from './switchs';
import Grids from './grids';
import TypoGraphy from './typography'
import BasicTables from '../table/basicTables';
const HtmlComponents = ({ match })=>{
    console.log(match);
    return (
        <div>
           {/* other things*/}
           {/* <Route   path={match.url}  component={ Buttons } /> */}
           <Route exact  path={ `${match.url}/buttons`}  component={ Buttons } />
           <Route exact  path={ `${match.url}/badges`}  component={ Badges } />
           <Route exact path={ `${match.url}/tabs`}  component={ Tabs } />
           <Route exact  path={ `${match.url}/social-button`}  component={ SocialButton } />
           <Route exact  path={ `${match.url}/cards`}  component={ Cards } />
           <Route exact  path={ `${match.url}/alerts`}  component={ Alerts } />
           <Route exact  path={ `${match.url}/progress-bars`}  component={ ProgressBars } />
           <Route exact  path={ `${match.url}/switches`}  component={ Switches } />
           <Route exact  path={ `${match.url}/grids`}  component={ Grids } />
           <Route exact  path={ `${match.url}/typoGraphy`}  component={ TypoGraphy } />
           <Route exact  path={ `${match.url}/basictable`}  component={ BasicTables } />

           


            
        
           {/* <Route path={`${props.match.path}buttons`} component={ Buttons } /> */}
      </div>
      )
}
export default HtmlComponents;