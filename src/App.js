import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Routes, Route, Outlet, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import { useEffect, useState } from 'react';
import './App.css';
import NoPage from './pages/NoPage';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const [fadeIn, setFadeIn] = useState(false);

  const handleNavLinkClick = () => {
    setFadeIn(true);
    setTimeout(() => {
      setFadeIn(false);
    }, 500);
  };

  return (
    <Router>
      <div className={`container mx-auto p-4`}>
        <nav className={`bg-gray-800 p-4 flex justify-between items-center`}>
          <ul className='flex space-x-8 text-white'>
            <li>
              <NavLink to="/" exact className={({ isActive }) => isActive ? "font-bold text-yellow-500" : "hover:text-gray-300 font-bold hover:underline text-blue-400"} onClick={handleNavLinkClick}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/education" className={({ isActive }) => isActive ? "font-bold text-yellow-500" : "hover:text-gray-300 font-bold hover:underline text-blue-400"} onClick={handleNavLinkClick}>Education</NavLink>
            </li>
            <li>
              <NavLink to="/experience" className={({ isActive }) => isActive ? "font-bold text-yellow-500" : "hover:text-gray-300 font-bold hover:underline text-blue-400"} onClick={handleNavLinkClick}>Experience</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => isActive ? "font-bold text-yellow-500" : "hover:text-gray-300 font-bold hover:underline text-blue-400"} onClick={handleNavLinkClick}>Contact</NavLink>
            </li>
            <li className="ml-auto">
              <div>
                <input
                  className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  checked={isDarkMode}
                  onChange={toggleDarkMode}
                />
                <label
                  className="inline-block pl-[0.15rem] hover:cursor-pointer"
                  htmlFor="flexSwitchCheckDefault">{isDarkMode ? 'Dark Mode' : 'Light Mode'}</label>
              </div>
            </li>
          </ul>
        </nav>

        <hr />
        <div className={`${fadeIn ? 'fade-in' : ''}`}>
          <Outlet />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
