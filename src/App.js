import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Routes from "./pages/Routes";
import AppContext from "./contexts/mainContext";
function App() {
  return (
    <AppContext>
      <header>
        <Header />
      </header>

      <main>
        <Routes />
      </main>

      <footer>
        <Footer />
      </footer>
    </AppContext>
  );
}

export default App;
