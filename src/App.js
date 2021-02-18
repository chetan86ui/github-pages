import ProblemListing from './components/ProblemListing'
import './App.css';
import arrayData  from './data/ArrayData'

function App() {
  return (
    <div>
      <ProblemListing problemprops={arrayData} />
    </div>
  );
}

export default App;
