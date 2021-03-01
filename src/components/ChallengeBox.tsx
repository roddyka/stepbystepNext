import styles from '../styles/components/ChallengeBox.module.css';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';

export function ChallengeBox(){
   
    const {activeChallenge, resetChallenge, completeChallenge} = useContext(ChallengesContext);
    const {resetCountdown} = useContext(CountdownContext);
    function handleChallengeSucceeded(){
        completeChallenge();
        resetCountdown();
    }

    function handleChallengeFailed (){
        resetChallenge();
        resetCountdown();
    }

    return (
        <div className={styles.challengeBoxContainer}>
            {activeChallenge ? (
               <div className={styles.challengeActive}>
                   <header>Ganhe {activeChallenge.amount} xp</header>
                   <main>
                       <img className={styles.challengeImageMovement} src={`icons/${activeChallenge.type}.svg`} alt=""/>
                       <strong>Novo desafio</strong>
                       <p>{activeChallenge.description}</p>
                   </main>
                   <footer>
                       <button
                        type="button"
                        onClick={handleChallengeFailed}
                        className={styles.challengeFailedButton}
                        >Falhei
                        </button>
                        <button 
                        type="button"
                        className={styles.challengeSucceededButton}
                        onClick={handleChallengeSucceeded}
                        >
                            Completei
                        </button>
                   </footer>
               </div>    
            ) : (
                <div className={styles.challengeNotActive}>
                    <strong>Finalize um ciclo para receber um desafio</strong>
                    <p><img className={styles.challengeImageMovement} src="icons/level-up.svg" alt="level up"/>
                Avance de level completando desafios</p>
                </div>
            )}
        </div> 
    );
}