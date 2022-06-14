import React from 'react';

export default function Header({onDarkModeClick, mode}) {
    return(
        <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {mode ? "Dark" : "Light"} Mode
        </button>
      </header>
    )
}