import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/CompletedChallenger.module.css';

export function CompletedChallenger(){
    const {challengesCompleted} = useContext(ChallengesContext)
    return (
        <div className={styles.completedChallengesCointainer}>
            <span>Desafios Completos</span>
            <span>{challengesCompleted}</span>
        </div>
    );
}