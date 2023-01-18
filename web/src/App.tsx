import { Habit } from './components/Habit';
import './styles/globals.css';

function App() {
  return (
    <div className="App">
      <Habit completed={3} />
      <Habit completed={3} />
      <Habit completed={3} />
      <Habit completed={3} />
      <Habit completed={3} />
    </div>
  )
}

export default App
