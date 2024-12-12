import { Snowfall } from "./components/snowfall/snowfall";
import { ContentContainer } from "./components/content-container/content-container";
import { Gallery } from "./components/gallery/gallery";
import { Music } from "./components/music/music";
import { Header } from "./components/header/header";
import { Garland } from "./components/garland/garland";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <div className={styles.container}>
        <Snowfall />
        <Garland />

        <ContentContainer>
          <>
            <Header />
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
