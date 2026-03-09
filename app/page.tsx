import { MaxWidthWrapper } from "./components/MaxWidthWrapper/MaxWidthWrapper";
import { SelectedComponent } from "./components";

import styles from "./page.module.css";

function Home() {
  return (
    <MaxWidthWrapper as="main" className={styles.wrapper}>
      <SelectedComponent />
    </MaxWidthWrapper>
  );
}

export default Home;
