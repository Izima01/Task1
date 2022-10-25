import './App.css';
import ProfileSection from './Components/ProfileSection';
import LinksData from './Assets/LinksData';
import Link from './Components/Link';
import Socials from './Components/Socials';
import Footer from './Components/Footer';

function App() {
  // console.log(LinksData);
  const renderLinks = LinksData.map(({ name, link, id }, index) => {
    return (
      <Link name={name} link={link} id={id} key={index} />
    )
  })

  return (
    <div className="App">
      <ProfileSection />
      <div className="links">
        {renderLinks}
      </div>
      <Socials />
      <Footer />
    </div>
  );
}

export default App;
