import Image from "next/image";
import styles from "./page.module.css";
import Call from "./call";

export default function Home() {
  return (
    <main className={styles.main}>
      <Call />
    </main>
  );
}
