import React, { useContext }from 'react'
import styles from './Navabar.module.css'
// step 7 import global context and useContext.
import {ThemeContext} from '../ThemeContext'

 

function Navabar() {
    // step-8 consume the global  data
    const { theme, toggleTheme } = useContext(ThemeContext);
    const handleOnToggle = (e) => {
        toggleTheme();
    }
    return (
        <div className={theme === 'light' ? styles.navbarLight : styles.navbarDark}>
            <div className={styles.leftSide}>
                <h1>Coding Hunger</h1>
            </div>
            <div className={styles.rightSide}>
                <div>Theme</div>
                <div>
                    <label className={styles.switch}>
                        <input 
                            type='checkbox' 
                            onChange={handleOnToggle} 
                            checked={theme === 'dark'} 
                        />
                        <span className={[styles.slider, styles.round].join(' ')}></span>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Navabar