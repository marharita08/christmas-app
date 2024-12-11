import { Snowfall } from "./components/snowfall/snowfall";
import { ContentContainer } from "./components/content-container/content-container";
import { Gallery } from "./components/gallery/gallery";
import { Music } from "./components/music/music";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <div className={styles.container}>
        <Snowfall />

        <ContentContainer>
          <>
            <header>
              <h1 style={{ textAlign: "center", color: "#333" }}>
                Merry Christmas!
              </h1>
            </header>
            <main className={styles.main}>
              <Gallery />
              <Music />
            </main>
          </>
        </ContentContainer>
      </div>
    </>
  );
}

export default App;
