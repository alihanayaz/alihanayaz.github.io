import styles from "./page.module.scss";
import { Card } from "./components/Card";

export default function Page() {
  return (
    <>
      <main>
        <div className={styles.section}>
          <Card hasContent={true} icon="avatar" iconSize={48}>
            <h3>Hey, I&apos;m Alihan</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
              nesciunt ex cum beatae commodi nihil, neque nostrum esse accusamus
              totam molestias mollitia libero fugit! Consequatur et accusamus
              nemo eos hic.
            </p>
          </Card>
          <Card hasContent={true} icon="journey" iconSize={24}>
            <h3>Journey</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
              nesciunt ex cum beatae commodi nihil, neque nostrum esse accusamus
              totam molestias mollitia libero fugit! Consequatur et accusamus
              nemo eos hic.
            </p>
          </Card>
        </div>
        <div className={`${styles.section} ${styles.sectionReversed}`}>
          <Card hasContent={true} icon="bookmark" iconSize={24}>
            <h3>Bookmarks</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
              nesciunt ex cum beatae commodi nihil, neque nostrum esse accusamus
              totam molestias mollitia libero fugit! Consequatur et accusamus
              nemo eos hic.
            </p>
          </Card>
          <Card hasContent={true} icon="notebook" iconSize={24}>
            <h3>Notebook</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
              nesciunt ex cum beatae commodi nihil, neque nostrum esse accusamus
              totam molestias mollitia libero fugit! Consequatur et accusamus
              nemo eos hic.
            </p>
          </Card>
        </div>
      </main>
    </>
  );
}
