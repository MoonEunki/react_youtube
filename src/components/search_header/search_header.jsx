import React, { useRef } from "react";
import styles from "./search_header.module.css";

const SearchVideo = ({ onSearch }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    console.log(value);
    onSearch(value);
  };

  const onKeyPress = (e) => {
    //input에서 키가 눌릴때마다 호출되는데, 엔터가 눌릴경우 handleSearch 호출
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  const onClick = (e) => {
    //검색 버튼이 눌렸을때 handleSearch 호출
    handleSearch();
  };

  // const onSubmit = (event) => {
  //   event.preventDefault();
  //   const text = inputRef.current.value;
  //   props.searchVideos(text);
  //   // inputRef.current.value = "";
  // };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="/images/logo.png"></img>
        <h1 className={styles.title}>Youtube</h1>
      </div>

      <input
        className={styles.input}
        ref={inputRef}
        type="search"
        placeholder="Search..."
        onKeyPress={onKeyPress}
      ></input>
      <button className={styles.button} type="submit" onClick={onClick}>
        <img className={styles.buttonImg} src="/images/search.png"></img>
      </button>
    </header>
  );
};

export default SearchVideo;
