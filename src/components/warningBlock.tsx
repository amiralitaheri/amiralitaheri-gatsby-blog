import React, { FC } from "react";
import { VscWarning } from "react-icons/vsc";
import { cn } from "./utils";
import * as styles from "./warningBlock.module.css";

const WarningBlock: FC<{
  type?: "warning" | "error";
  children: React.ReactNode;
}> = ({ type = "warning", children }) => {
  return (
    <div
      className={cn(
        styles.container,
        type === "error" ? styles.error : styles.warning
      )}
    >
      <VscWarning />
      {children}
    </div>
  );
};

export default WarningBlock;
