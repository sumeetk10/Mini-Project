import React from 'react'
import css from './Topbar.module.css'

const Topbar = () => {
    return(

        <header className="App-header">
          <nav className={css.topBar}>
            <img src="https://www.pngplay.com/wp-content/uploads/3/White-Amazon-Logo-PNG-HD-Quality.png" alt="Amazon"/>
          </nav>
        </header>

    );
}

export default Topbar;