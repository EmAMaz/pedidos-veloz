import { NavBar } from "./components/NavBar";
import { DropdownCustom } from "./components/DropdownCustom";

function App() {
  return (
    <>
      <div className="flex flex-col ">
        <div className="flex border-b-2 mb-4 px-4">
          <div className="w-5/6 mx-auto">
            <NavBar />
          </div>
        </div>
        <div className="w-5/6 mx-auto">
          {/* <CardProduct /> */}

          <DropdownCustom />
        </div>
      </div>
    </>
  );
}

export default App;
