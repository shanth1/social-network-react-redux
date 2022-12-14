import React from "react";
import Feed from "./Feed/Feed";
import FeedMenu from "./FeedMenu/FeedMenu";

import s from "./Content.module.css";

const Content = () => {
  return (
    <div className={s.content_wrapper}>
      <Feed />
      <FeedMenu />
    </div>
  );
};

export default Content;
