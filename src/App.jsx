import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Navbar from "./components/Layout/Navbar";
import Sidebar from "./components/Layout/Sidebar";
import Dashboard from "./components/Admin/Dashboard";
import Result from "./components/Admin/Result/Results";
import TrendsHistory from "./components/Admin/TrendsHistory/TrendsHistory";
import { Issues } from "./components/Issues to review/Issues";
import Settings from "./components/Settings/Settings";
import UpgradePlan from "./components/UpgradePlan/UpgradePlan";

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const location = useLocation();

  const hideLayout =
    location.pathname === "/" || location.pathname === "/signup";

  return (
    <>
      <div className="Main-App">
        {!hideLayout && <Navbar toggleSidebar={toggleSidebar} />}
        <div className={`Main-App-container ${hideLayout ? "no-sidebar" : ""}`}>
          {!hideLayout && (
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          )}
          <div className="Main-App-Content">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              

              {/*Admin Panel */}
              {/* Dashbord */}
            <Route path="/dashboard" element={<Dashboard />} />
              {/* Dashbord */}

              {/*Rsult*/}
              <Route path="/admin/result" element={< Result/>}/>
              {/*result*/}
              <Route path="/admin/trends" element={<TrendsHistory/>}/>
              {/*issues*/}
             <Route path="/admin/issues" element={<Issues/>}/>
              {/*issues */}

              {/*setting */}
              <Route path="/admin/settings" element={<Settings/>}/>

              {/*upgrade*/}
               <Route path="/admin/upgrade" element={<UpgradePlan/>}/>
              {/*upgrade */}
             
              {/*Profile */}

              {/*Customer Panel */}
              {/*customer dashboard */}
            
              {/*customer dashboard */}

              {/* bill payment */}
             
              {/*bill payment */}

              {/*Setting */}
        
              {/*Setting */}


              {/*Customer Profile */}
 

              {/*Customer Profile */}


              {/*Customer Panel */}
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};
function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
