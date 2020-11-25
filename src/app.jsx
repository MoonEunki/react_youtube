import React, { useEffect, useState } from "react";
import SearchVideo from "./components/search_header/search_header";
import VideoList from "./components/video_list/video_list";
import styles from "./app.module.css";

const App = ({ youtube }) => {
  const [videos, setVideos] = useState([]);
  const search = (query) => {
    youtube.search(query).then((videos) => setVideos(videos));
  };

  useEffect(() => {
    youtube.mostPopular().then((videos) => setVideos(videos));
  }, []); //2번째 인자로 텅빈 배열을 넣으면 마운트 될때만 호출

  return (
    <div className={styles.app}>
      <SearchVideo onSearch={search} />
      <VideoList videos={videos} />
    </div>
  );
};

export default App;
