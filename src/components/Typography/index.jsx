import style from "./typography.module.css";

const TAGS = {
  h1: "h1",
  h2: "h2",
  body: "p",
};

export const Typography = ({ children, variant }) => {
  const Component = TAGS[variant] || "p";
  const variantClass = style[variant] || style.p;

  return <Component className={variantClass}>{children}</Component>;
};
