import React, { FC } from "react";

import * as styles from "./container.module.css";

const Container: FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className={styles.root}>{children}</div>
);

export default Container;
