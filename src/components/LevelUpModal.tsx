import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/LevelUpModal.module.css';
export function LevelUpModal(){

    const {level, closeLevelUpModal} = useContext(ChallengesContext)

    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>{level}</header>
                <strong>Level Up!</strong>
                <p>You are awesome! <br />keep up the great work!</p>
                <button onClick={closeLevelUpModal} type="button"><img src="/icons/close.svg" alt="fechar modal"/></button>
            </div>
        </div>
    )
}