import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { FaClipboard } from "react-icons/fa";
import * as styles from "./code.module.css";
// todo: decide between highlight.js and prism
// todo use light build

const Code = ({ className, children, ...props }) => {
  const match = /language-(\w+)/.exec(className || "");
  return match ? (
    <div className={styles.code}>
      <div className={styles.codeHeader}>
        <span>{match[1]}</span>
        <button
          onClick={() => {
            navigator.clipboard.writeText(children);
          }}
        >
          <FaClipboard />
        </button>
      </div>
      <SyntaxHighlighter
        language={match[1]}
        style={darcula}
        showLineNumbers={true}
        wrapLines={true}
        lineProps={{ style: { display: "flex", maxWidth: "70ch" } }}
        {...props}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  );
};

export default Code;
