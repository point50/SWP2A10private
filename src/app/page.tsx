import styles from "./page.module.css";
import Banner from "@/components/Banner"

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Banner/>
      </main>
    </div>
  );
}
