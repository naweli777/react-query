import { QueryClientProvider,QueryClient } from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools'
import './App.css';
import { Route,BrowserRouter as Router,Link,Switch } from 'react-router-dom';
import { Superhero } from './components/Superhero.page';
import { HomePage } from './components/Home.Page';
import { RQSuperheros } from './components/RQSuperhero.page';


const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
   <Router>
     <div>
       <nav>
         <ul>
           <li>
             <Link to='/'>Home</Link>
           </li>
           <li>
             <Link to='/super-heros'>Traditional SuperHero</Link>
           </li>
           <li>
             <Link to='/rq-super-heros'>RQ SuperHero</Link>
           </li>
         </ul>
       </nav>
       <Switch>
         <Route path='/super-heros'><Superhero/></Route>
         <Route path='/rq-super-heros'><RQSuperheros/></Route>
         <Route path='/'><HomePage/></Route>

       </Switch>
      
     </div>
   </Router>
   <ReactQueryDevtools intialIsOpen={false} position='bottom-right'/>
   </QueryClientProvider>
  );
}

export default App;
