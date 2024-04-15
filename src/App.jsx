import "./App.css";
import Nav from "./Nav";
import Header from "./Header";
import Employees from "./Employees";
import GroupedTeamMembers from "./GroupedTeamMembers";
import Footer from "./Footer";
import NotFound from "./NotFound";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {DataProvider} from "./context/DataContext";


export default function App() {
  return (
    <DataProvider>
      <Router>
        <Nav />
        <Header/>
        <Routes>
          <Route path="/" element={<Employees/>} />
          <Route path="/GroupedTeamMembers" element={<GroupedTeamMembers />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </DataProvider>
  );
}
