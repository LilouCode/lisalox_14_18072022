import { Outlet } from "react-router-dom";
import { SourceProvider } from "./utils/context";
import "../src/style/main.scss";
function App() {
  return (
    <>
      <SourceProvider>
        <Outlet />
      </SourceProvider>
    </>
  );
}
export default App;
