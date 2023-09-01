export const cn = (...args: (string | boolean)[]) => {
  return args.filter(Boolean).join(" ");
};
