import Link from './components/Link'
import Route from './components/Route'
import AccordionPage from './components/AccordionPage'
import ButtonPage from './components/ButtonPage'
export default function App() {
  return (
    <div>
      <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
        <div>
          <Link to="/button">Go to Button Page</Link>
          <Link to="/accordion">Go to Accordion Page</Link>
        </div>
        <div className="col-span=5">
          <Route path="/">
            <p>Home Page</p>
          </Route>
          <Route path="/button">
            <ButtonPage />
          </Route>
          <Route path="/accordion">
            <AccordionPage />
          </Route>
        </div>
      </div>
    </div>
  )
}
