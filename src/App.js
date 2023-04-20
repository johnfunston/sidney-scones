import './input.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/Landing.js'
import About from './components/About.js'
import BakeShop from './components/BakeShop.js'
import ContactForm from './components/ContactForm.js'
import NavBar from './components/NavBar.js'


function App() {

  const sconeMenu = [{name: 'Earl Gray', price: '8.99', description: 'Delicious earl gray tea and vanilla bean icing on our signature Sweet Gourmet Scone', image: "../imgs/brand-scone.png", stock: "55", inputCost: "3.00", inStock: true },
  {name: 'Cotton Candy', price: '7.99', description: 'For those with a real sweet tooth', image: "../imgs/brand-scone.png", stock: "0", inputCost: "3.00", inStock: false },
  {name: 'Salted Caramel', price: '6.99', description: 'Crisp apple and decadent house made salted caramel on our signature Sweet Gourmet Scone', image: "../imgs/brand-scone.png", stock: "55", inputCost: "3.00", inStock: true },
  {name: 'Cinnamon Apple', price: '12.99', description: 'Scrumptuos and sweet', image: "../imgs/brand-scone.png", stock: "55", inputCost: "3.00", inStock: true },
  {name: 'Keto Chili', price: '12.99', description: 'Scrumptuos and sweet', image: "../imgs/brand-scone.png", stock: "55", inputCost: "3.00", inStock: true },
  {name: '?', price: '12.99', description: 'Scrumptuos and sweet', image: "../imgs/brand-scone.png", stock: "55", inputCost: "3.00", inStock: true }]

  const bobaMenu = [{name: 'Earl Gray', price: '12.99', description: 'Scrumptuos and sweet', image: "../imgs/bubble-tea.png", stock: "55", inputCost: "3.00", inStock: true },
  {name: 'Earl Gray', price: '12.99', description: 'Scrumptuos and sweet', image: "../imgs/bubble-tea.png", stock: "0", inputCost: "3.00", inStock: false },
  {name: 'Salted Caramel', price: '12.99', description: 'Scrumptuos and sweet', image: "../imgs/bubble-tea.png", stock: "55", inputCost: "3.00", inStock: true },
  {name: 'Corn', price: '12.99', description: 'Scrumptuos and sweet', image: "../imgs/bubble-tea.png", stock: "55", inputCost: "3.00", inStock: true },
  {name: 'Pizza', price: '12.99', description: 'Scrumptuos and sweet', image: "../imgs/bubble-tea.png", stock: "55", inputCost: "3.00", inStock: true },
  {name: '?', price: '12.99', description: 'Scrumptuos and sweet', image: "../imgs/bubble-tea.png", stock: "55", inputCost: "3.00", inStock: true }]


 return (
    <Router>
      <div className="App">
        <NavBar />
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/bakeshop" render={() => <BakeShop sconeMenu={sconeMenu} bobaMenu={bobaMenu} />} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={ContactForm} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
