import React from "react"
import { Header } from "./componets/Header";
import { BrowserRouter } from "react-router-dom";
import { Paginas } from "./componets/Paginas";
import { DataProvider } from "./context/DataProvider";
import "boxicons";

function App() {
  return (
    <DataProvider>
    <div className="App">
      <BrowserRouter>
        <Header />
       <Paginas/>
      </BrowserRouter>
    </div>
    </DataProvider>
  );
}

export default App;
