import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header />
            <Body state={props.state} />
            {/* <Footer /> */}
        </div>
    );
};

export default App;
