import React from 'react';
import { Link } from 'react-router-dom';
import styles from './App.module.css';

const App = () => (
    <div className={styles['home']}>
      <div>
        <img src="" alt=""/>
        	<p>des parcours des carrier</p>
          <Link to="/secteur">
            <button>
              Navigate
            </button>
          </Link>
      </div>
    </div>
);
export default App;