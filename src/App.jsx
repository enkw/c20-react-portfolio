// Grabbing Outlet for an easy way to swap out pages
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import Footer from './components/Footer'

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  // Using this to keep my navbar and footer displayed at all times
  return (
    <>
      <Nav />
      <main className="mx-3">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
