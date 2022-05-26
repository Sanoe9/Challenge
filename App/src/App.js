import { useEffect, useState } from 'react';
import './index.css';

function App() {
  const [adviceNumber, setAdviceNumber] = useState(0);
  const [advice, setAdvice] = useState('');

  const fetchAdvices = () => {
    fetch('https://api.adviceslip.com/advice')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log('🍕', data);
        setAdvice(data.slip.advice);
        setAdviceNumber(data.slip.id);
      })
      .catch((err) => {
        console.log('🐳', err);
      });
  };

  const handleClick = () => {
    fetchAdvices();
  }

  useEffect(() => {
    fetchAdvices();
  }, []);

  return (
    <div className="app">
      <div className="advice-card-container">
        <div className="advice-card">
          <span>
            ADVICE #{adviceNumber} 
          </span>
          <p><q>
            {advice}
          </q></p>

          <div className="divider">
            <img src="../images/pattern-divider-desktop.svg" alt="divider"></img>
          </div>

          <div className="advice-card-footer" onClick={handleClick}>
            <img src="../images/icon-dice.svg" alt="dice" className="advice-card-footer-img"></img>
          </div>
        </div>
      </div>

      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"> Frontend Mentor</a>. 
        Coded by <a href="#">Salma Noe</a>.
      </div>
    </div>

  );
}

export default App;