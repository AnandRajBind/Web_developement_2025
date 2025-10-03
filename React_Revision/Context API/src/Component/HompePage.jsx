import React,{useContext} from 'react'
import styles from './HomePage.module.css'
import { ThemeContext } from '../ThemeContext';

function HompePage() {
const { theme } = useContext(ThemeContext);
    
    return (
        <div className={theme==='light'?styles.homeLight:styles.homeDark}>
            <div className={styles.welcome}>
                Welcome to our Channel Coding Hnger
            </div>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sequi id ipsa fuga provident recusandae sint, necessitatibus facilis, minima quis labore dignissimos iusto veritatis quod nihil esse error consectetur ipsum?</p>
            <div className={styles.homeCards}>
                <div className={ theme==='light'?styles.lightcard:styles.darkCard}>
                    <h3>CodingHunger</h3>
                    <p>Amazon SDE - II</p>
                    <p>Lorem ipsum do  eaque soluta dignissimos totam possimus quia pariatur minima.</p>
                </div>
                <div className={theme==='light'?styles.lightcard:styles.darkCard}>
                    <h3>CodingHunger</h3>
                    <p>Amazon SDE - II</p>
                    <p>Lorem ipsum do  eaque soluta dignissimos totam possimus quia pariatur minima.</p>
                    </div>
            </div>
        </div>
    )
}

export default HompePage