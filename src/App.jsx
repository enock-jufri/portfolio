import { Outlet } from "react-router-dom";
import Header from "./header";

const App = () => {
  return (
    <div className="bg-[#0F172A] text-white min-h-screen overflow-hidden">
      <Header />
      <div className="pt-20 px-4"> {/* Push content below the header */}
        <Outlet />
      </div>
    </div>
  );
};

export default App;
