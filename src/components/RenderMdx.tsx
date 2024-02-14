import { FC } from "react";
import { compileSync, runSync } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";

const compileMDX = (mdx: string) =>
  String(
    compileSync(mdx, {
      outputFormat: "function-body",
      development: false,
    })
  );

const RenderMdx: FC<{ mdx: string }> = ({ mdx }) => {
  return runSync(compileMDX(mdx), runtime).default();
};

export default RenderMdx;
