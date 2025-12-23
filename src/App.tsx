import './App.css';
import './reset.css';
import Calc from './components/calculator/Calc';
import Calc_custom from './components/calculator/Calc_custom';

function App() {
    const custom = true; // true: custom calc, false: original calc

    return (
        <>
            {custom ? <Calc_custom/> : <Calc/>}
        </>
    ) 
}

export default App;