import './App.css';
import { Graph } from './components/Graph'
import { Form } from './components/Form'

function App() {
  return (
    <div className="App">
      <div className="container mx-auto max-w-6xl text-center drop-shahdow-lg text-gray-800">
        <h1 className="text-4xl py-8 mb-10 bg-slate-800 text-white rounded">Expense Tracker</h1>
        {/* Grid Columns */}
        <div className="grid md:grid-cols-2 gap-4">
          <Graph />
          {/* Form */}
          <Form /> 
        </div>
      </div>
    </div>
  );
}

export default App;
