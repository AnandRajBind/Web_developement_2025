import React from 'react'
import styles from './Navabar.module.css'
// step 7 import global context and useContext.
import ThemeContext  from '../ThemeContext'

import { useContext } from 'react'

function Navabar() {
    // step-8 consume the global  data
    const { theme, toggleTheme } = useContext(ThemeContext);
    const handleOnChange = () => {
        toggleTheme();
    }


    return (
        <div className={theme === 'light' ? styles.navabarLight : styles.navbarDark}>
            <div className='styles.leftSide'>
                <h1>Coding Hunger</h1>
            </div>

            <div className={styles.rightSide}>
                <div>Theme</div>

                <div>
                    <label class={styles.switch}>

                        <input type='checkbox' onChange={handleOnChange} />
                        <span class={[styles.slider, styles.round].join(' ')}></span>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Navabar