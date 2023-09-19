import classes from "./lessons.module.scss";

const Lesson1 = () => {
  return (
    <div className="container">
      <h2 className={classes.lessonTitle}>Урок 1</h2>
      <ul className={classes.list}>
        <li className={classes.listItem}>
          <span className="phraseRu">Эти уроки кажутся очень полезными</span>
          <span className="phraseEn">These lessons seem very useful</span>
        </li>
      </ul>
    </div>
  )
}

export default Lesson1;