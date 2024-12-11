import { Snowfall } from "./components/snowfall/snowfall";
import { ContentContainer } from "./components/content-container/content-container";
import { Gallery } from "./components/gallery/gallery";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <div className={styles.container}>
        <Snowfall />

        <ContentContainer>
          <>
            <h1 style={{ textAlign: "center", color: "#333" }}>
              Merry Christmas!
            </h1>
            <Gallery />
          </>
        </ContentContainer>
      </div>
    </>
  );
}

export default App;
