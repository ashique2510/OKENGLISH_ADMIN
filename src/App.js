import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import {  Bookings, Calendar, AddTrainers , Trainers, Stacked, Pyramid, Students, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor, RegisteredUsers ,Announcement ,AdminLogin ,TutorLogin ,TrainerHome ,TrainerBooking} from './pages';
import './App.css';
import { ToastContainer } from 'react-toastify';


import { useStateContext } from './contexts/ContextProvider';
import Home from './pages/Home';

const App = () => {

  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings ,show } = useStateContext();

  console.log('fffffrom  aaapp jjjss',activeMenu);


  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

    


  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>

       { show && (
               <>
            <TooltipComponent
              content="Settings"
              position="Top"
            >
         
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: '50%' }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
                >
             <FiSettings /> 
              </button>

            </TooltipComponent>
                </>
       )}
          </div>

   { show && (

           <>

          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
                <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
                <Sidebar />
            </div>
          )}

      </>

)}


          <div
              
             className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 ' 
            }
          >
            
         { show && (

            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
             <Navbar /> 
            </div>

            )}



          <div>

            { themeSettings && 
            
              <ThemeSettings />
            }
           

            <Routes>
              {/* Dashboard */}
              <Route path="/" element={<AdminLogin /> } />
              <Route path="/tutor" element={<TutorLogin /> } />
              <Route path="/home" element={<Home />} />
              <Route path="/tutor_home" element={<TrainerHome />} />

              {/* Pages */}
              <Route path="/registered_users" element={<RegisteredUsers />} />
              <Route path="/bookings" element={<Bookings />} />
              <Route path="/trainers" element={<Trainers />} />
              <Route path="/add_trainers" element={<AddTrainers />} />
              <Route path="/students" element={<Students />} />
              <Route path="/announcement" element={<Announcement />} />
              <Route path="/tutor_booking" element={<TrainerBooking />} />

              {/* Apps */}
              <Route path="/kanban" element={<Kanban />} />
              <Route path="/editor" element={<Editor />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/color-picker" element={<ColorPicker />} />

              {/* Charts */}
              <Route path="/line" element={<Line />} />
              <Route path="/area" element={<Area />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/financial" element={<Financial />} />
              <Route path="/color-mapping" element={<ColorMapping />} />
              <Route path="/pyramid" element={<Pyramid />} />
              <Route path="/stacked" element={<Stacked />} />
            </Routes>
          </div>
        { show &&  <Footer /> }
          </div>
        </div>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
};

export default App;
