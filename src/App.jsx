import { Outlet, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";
import HistoryPage from "./pages/HistoryPage";
import EntryPage from "./pages/EntryPage";
import ListViewPage from "./pages/ListViewPage";
import Register from "./pages/Register";
import NavBar from "./components/NavBar";

function Template() {
  return (
    <>
      <div className="bg-blue-400">
        <NavBar />
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route element={<Template />}>
        <Route path="/" element={<Login />} />
        <Route path="/listViewPage" element={<ListViewPage />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/entryPage" element={<EntryPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
