import styles from './Feedback.module.scss';
import { Info } from '../Info/Info'

const Feedback = () => {
    return (
        <section className={styles.feedback}>
            <h2>Feedback</h2>
            {data.map((feedback) => (
                <div className={styles.feedback_item}>
                      <Info className={styles.feedback_item__text} text={feedback.feedback} />
                        <div className={styles.feedback_item__info}>
                            <img src={feedback.reporter.photoUrl} alt="avatar"/>
                            <p>{feedback.reporter.name}, <a href={feedback.reporter.citeUrl}>somesite.com</a></p>
                        </div >
                </div>
            ))}
        </section>
    );
}



export default Feedback;













const data = [
  {
    feedback:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. ",
    reporter: {
      photoUrl: require("../../assets/user.png"),
      name: "John Doe",
      citeUrl: "https://www.citeexample.com",
    },
  },
  {
    feedback:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. ",
    reporter: {
        photoUrl: require("../../assets/user.png"),
        name: "John Doe",
      citeUrl: "https://www.citeexample.com",
    },
  },
];
