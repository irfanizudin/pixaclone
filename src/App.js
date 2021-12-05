import "./App.css";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import Content from "./components/Content";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div>
            <Hero />
            <SearchBar />
            <Content />
            <Footer />
        </div>
    );
};

export default App;
