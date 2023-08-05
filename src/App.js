import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Routes from "./pages/Routes";
import AppContext from "./contexts/mainContext";
import NewsLatter from "./components/Footer/NewsLatter/NewsLatter";
function App() {
  return (
    <AppContext>
      <header>
        <Header />
      </header>

      <main >
        <Routes />
      </main>
<NewsLatter/>
      <footer>
        <Footer />
      </footer>
    </AppContext>
  );
}

export default App;
