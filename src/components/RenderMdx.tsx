import { FC } from "react";
import { compileSync, runSync } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";

function compileMDX(mdx: string) {
  const code = String(
    compileSync(mdx, {
      outputFormat: "function-body",
      development: false,
    })
  );

  return code;
}

const RenderMdx: FC<{ mdx: string }> = ({ mdx }) => {
  return runSync(compileMDX(mdx), runtime).default();
};

export default RenderMdx;
