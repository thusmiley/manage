import NavBar from './components/NavBar'
import Footer from './components/Footer'
import HeroHome from './components/HeroHome';
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import GetStarted from './components/GetStarted'

const App = () => {
  return (
    <div>
        <NavBar />
        <HeroHome />
        <Features />
        <Testimonials />
        <GetStarted />
        <Footer />
    </div>
  );
};

export default App;
