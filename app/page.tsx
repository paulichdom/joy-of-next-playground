//import { components } from "./components";
import { ClockPage } from "./components/Clock/ClockPage";
import { MaxWidthWrapper } from "./components/MaxWidthWrapper/MaxWidthWrapper";

import styles from "./page.module.css";
//import { useComponentContext } from "./providers/ComponentProvider";

function Home() {
  //const {selectedComponent} = useComponentContext();
 

  //const SelectedComponent = components[selectedComponent].component;
  return (
    <MaxWidthWrapper as="main" className={styles.wrapper}>
      {/* <SelectedComponent /> */}
      <ClockPage />
    </MaxWidthWrapper>
  );
}

export default Home;
