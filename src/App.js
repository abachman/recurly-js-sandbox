import './App.css';
import { PaymentForm } from './PaymentForm/PaymentForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          This is a Recurly Form
        </p>
        <PaymentForm />
      </header>
    </div>
  );
}

export default App;
