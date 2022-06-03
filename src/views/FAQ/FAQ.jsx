import styles from './FAQ.css'
import Header from '../../components/Header/Header'

export default function FAQ() {
  return (
    <div className={styles.faq}> 
      <Header />
      <h3>Frequently Asked Questions</h3>
      <br/>
      <h4>Q: What is Cooks Books?</h4>
      <p>A: Cooks Books is your online resource for maintaining all those delicious recipes you've made, and would like to make!</p>
      <br/>
      <h4>Q: How does it work?</h4>
      <p>A: 1. Locate your cook book in our library of books OR add one if it's not already there!</p>
      <p>2. Add any recipes from the book that you've already made or wish to make.</p>
      <p>3. Keep personal notes of changes you made to the recipe OR see reviews/notes left by other cooks.</p>
      <br/>
      <h4>Q: Do I have to be a member to use Cook Books?</h4>
      <p>A: No! Anyone can view our library of cook books and recipes. However, you must be member to add and keep track of your own cook books!</p>
      <br/>
      <h4>Q: My question wasn't answered in the FAQ, what should I do?</h4>
      <p>A: We would love to hear from you! Please head over to the 'About Us' page to contact one of the amazing developers who worked on this project. We will get back to you as quickly as possibly!</p>
      <br/>
      <h4>Q: I noticed the app isn't working as intended, where can I submit a suggestion?</h4>
      <p>A: We appreciate any and all feedback! Please contact one of our developers with a description of the issue you encountered. Our goal is to improve the experience of all of our users!</p>
    </div>
  )
}