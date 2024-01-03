import React from 'react';
import styles from '../src/styles/search.module.css'; 

const Search = () => {
  return (
    <div className={`${styles.containerStyle} p-8`}>
        <input className={`${styles.inputStyle} roundedDefault shadowDefault`} type="text" placeholder="Procure aqui" alt='procurar' />
        <button className={ `${styles.buttonStyle} roundedDefault shadowDefault`} >
            <svg className=""  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="10" cy="10" r="7" />  <line x1="21" y1="21" x2="15" y2="15" /></svg>
        </button>
    </div>
  );
};

export default Search;