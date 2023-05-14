import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/create-post" element={<CreatePost/>} />
      </Routes>
    </main>
      </BrowserRouter>
    </>
  );
}

export default App;
