import "./App.css";
import { createContext } from "react";
import { Toaster } from "react-hot-toast";
import Navbar from "./Shared/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Team from "./Pages/Team/Team";
import NotFound from "./Shared/NotFound/NotFound";
import { useState } from "react";
import ScrollButton from "./Components/ScrollButton/ScrollButton";
import Login from "./Pages/Authentication/Login/Login";
import SignUp from "./Pages/Authentication/SignUp/SignUp";
import ResetPassword from "./Pages/Authentication/ResetPassword/ResetPassword";
import AboutUs from "./Pages/AboutUs/AboutUs";
import RequireAuth from "./Auth/RequireAuth/RequireAuth";
import Dashboard from "./Pages/ManageDashboard/Dashboard/Dashboard";
import WelcomeDashboard from "./Pages/ManageDashboard/WelcomeDashboard/WelcomeDashboard";
import JobDescription from "./Pages/Jobs/JobDescription/JobDescription";
import AddNewJob from "./Pages/ManageDashboard/Jobs/AddNewJob";
import Employers from "./Pages/ManageDashboard/Employers/Employers";
import Profile from "./Pages/ManageDashboard/Profile/Profile";
import Recruitment from "./Pages/ManageDashboard/Recruitment/Recruitment";
import Inbox from "./Pages/ManageDashboard/Inbox/Inbox";
import AllHr from "./Pages/ManageDashboard/ManageHr/AllHr";
import RequireAdmin from "./Auth/RequireAdmin/RequireAdmin";
import Candidates from "./Pages/ManageDashboard/Candidates/Candidates";
import SignUpForHrManager from "./Pages/Authentication/SignUpForHrManager/SignUpForHrManager";
import RequireHr from "./Auth/RequireHr/RequireHr";
import AllJob from "./Pages/Jobs/AllJob/AllJob";
export const InitializeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState(false);

  // useEffect(() => {
  //   setTheme(JSON.parse(window.localStorage.getItem("theme")));
  // }, []);

  const handleThemeChange = () => {
    setTheme(!theme);
    window.localStorage.setItem("theme", !theme);
  };
  return (
    <div data-theme={theme && "night"}>
      <InitializeContext.Provider value={{ handleThemeChange, theme }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Job Route Start */}

          <Route path="/jobs" element={<AllJob />} />
          <Route path="/job/:jobId" element={<JobDescription />} />

          {/* Job Route End  */}

          <Route path="/about" element={<AboutUs />} />
          <Route path="/team" element={<Team />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signUp/hr" element={<SignUpForHrManager />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          >
            <Route index element={<WelcomeDashboard />} />
            <Route
              path="job/addNew"
              element={
                <RequireHr>
                  <AddNewJob />
                </RequireHr>
              }
            />
            <Route path="profile" element={<Profile />} />
            <Route
              path="employers"
              element={
                <RequireHr>
                  <Employers />
                </RequireHr>
              }
            />
            <Route
              path="recruitment"
              element={
                <RequireHr>
                  <Recruitment />
                </RequireHr>
              }
            />
            <Route path="candidates" element={<Candidates />} />
            <Route path="mails" element={<Inbox />} />
            <Route
              path="allHr"
              element={
                <RequireAdmin>
                  <AllHr />
                </RequireAdmin>
              }
            />
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <ScrollButton />
        <Toaster />
      </InitializeContext.Provider>
    </div>
  );
}

export default App;
