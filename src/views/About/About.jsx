import React from 'react';
import Header from '../../components/Header/Header';
import styles from './About.css';
import github from './gitHub.png';
import linkedin from './linkedin.png';

export default function About() {
  return (
    <div>
      <Header />
      <header className={styles.us}>
        <div className={styles.aboutUsHeader}>
          <h1>About Us!</h1>
        </div>
       
      </header>
      <div className={styles.teamContainer}>
      <div className={styles.meet}>
          <h4>Meet The Team</h4>
          <p>
            We are a group of software developers here to encourage EVERYONE to
            start using their cook books!
          </p>
        </div>
        <div className={styles.squares}>
        <section className={styles.team}>
          <h3>Vic Caruso</h3>
          <p>
            Vic Caruso is a software developer, outdoors adventurer, and pizza
            enthusiast based out of Portland, OR. The fanciest meal he's ever
            cooked was Pan-seared Scallops with Crème D'échalote and the least
            fancy meal he's ever cooked was Backpacker's Pad Thai. His favorite
            cook book is Foodheim by Eric Wareheim.
          </p>
          <div className={styles.links}>
            <a
              className={styles.linkedin}
              href="https://www.linkedin.com/in/viccaruso/"
            >
              <img src={linkedin} />
            </a>
            <a className={styles.github} href="https://github.com/viccaruso">
              <img src={github} />
            </a>
          </div>
        </section>
        <section className={styles.team}>
          <h3>Denzel Bartolaba</h3>
          <p>
            Denzel is a full-stack software engineer currently living in
            Vancouver, WA. He strives to make the world of the internet a much
            easier place for everyone! His hobbies are boxing, archery, playing
            video games, and his favorite cook book is From Crook to Cook by
            Snoop Dogg.
          </p>
          <div className={styles.links}>
            <a
              className={styles.linkedin}
              href="https://www.linkedin.com/in/denzel-bartolaba-45a322b5/"
            >
              <img src={linkedin} />
            </a>
            <a className={styles.github} href="https://github.com/xDenzelB">
              <img src={github} />
            </a>
          </div>
        </section>
        <section className={styles.team}>
          <h3>Trevor Rezac</h3>
          <p>
            Trevor Rezac is a foodie, and a Full Stack Software Developer based
            in Beaverton, OR. His favorite cuisines are Indian, Vietnamese, and
            Mexican. He enjoys trying out new recipes from a variety of
            different recipe books & Gordon Ramsay is his spirit animal. Also,
            Trevor makes a mean guacamole (ask him about the secret ingredient)!
          </p>
          <div className={styles.links}>
            <a
              className={styles.linkedin}
              href="https://www.linkedin.com/in/trevor-rezac/"
            >
              <img src={linkedin} />
            </a>
            <a className={styles.github} href="https://github.com/Trevor-Rezac">
              <img src={github} />
            </a>
          </div>
        </section>
        <section className={styles.team}>
          <h3>Olivia Miller</h3>
          <p>
            Olivia is a front end developer in Portland, OR. She likes to make
            things and was working in stop motion animation and textile design
            before coding. One of her favorite cook books is ‘The Book of Jewish
            Food’ by Claudia Roden because it mostly gets used when cooking on
            special occasions for family and friends.
          </p>
          <div className={styles.links}>
            <a
              className={styles.linkedin}
              href="https://www.linkedin.com/in/olivia14miller/"
            >
              <img src={linkedin} />
            </a>
            <a
              className={styles.github}
              href="https://github.com/oliviaamiller"
            >
              <img src={github} />
            </a>
            </div>
            </section>
        
          </div>
        
      </div>
    </div>
  );
}
