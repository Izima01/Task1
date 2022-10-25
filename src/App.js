import './App.css';
import ProfileSection from './ProfileSection';
import LinksData from './Assets/LinksData';
import Link from './Link';

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
    </div>
  );
}

export default App;
