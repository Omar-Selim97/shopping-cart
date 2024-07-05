import Footer from "./componenets/Footer/Footer";
import Header from "./componenets/Header/Header";
import { words } from "./words";

function App() {
  return (
   
      <div className="layout">
        <Header/>
       <main>
         {words.content}
       </main>
      <Footer/>
      </div>
    
  );
}

export default App;
