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
                   <header>Win {activeChallenge.amount} xp</header>
                   <main>
                       <img className={styles.challengeImageMovement} src={`icons/${activeChallenge.type}.svg`} alt=""/>
                       <strong>New Challenge</strong>
                       <p>{activeChallenge.description}</p>
                   </main>
                   <footer>
                       <button
                        type="button"
                        onClick={handleChallengeFailed}
                        className={styles.challengeFailedButton}
                        >Failed
                        </button>
                        <button 
                        type="button"
                        className={styles.challengeSucceededButton}
                        onClick={handleChallengeSucceeded}
                        >
                            Completed
                        </button>
                   </footer>
               </div>    
            ) : (
                <div className={styles.challengeNotActive}>
                    <strong>End a task to receive a challenge</strong>
                    <p><img className={styles.challengeImageMovement} src="icons/level-up.svg" alt="level up"/>
                    Level up by completing tasks</p>
                </div>
            )}
        </div> 
    );
}