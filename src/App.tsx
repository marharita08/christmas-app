import { Snowfall } from "./components/snowfall/snowfall";
import { ContentContainer } from "./components/content-container/content-container";
import { Gallery } from "./components/gallery/gallery";
import { Music } from "./components/music/music";
import { Header } from "./components/header/header";
import { Garland } from "./components/garland/garland";
import { AnimatedImages } from "./components/animated-images/animated-images";
import { Movies } from "./components/movies/movies";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <div className={styles.container}>
        <Snowfall />
        <Garland isTop={true} />

        <ContentContainer>
          <>
            <AnimatedImages />
            <Header />
            <main className={styles.main}>
              <Gallery />
              <Music />
              <Movies />
            </main>
          </>
        </ContentContainer>
        <Garland isTop={false} />
      </div>
    </>
  );
}

export default App;
