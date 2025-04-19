import "./styles.scss";

/**
 * @exports
 * @description Text component that uses a default style
 * @version 1.0.0
 */
export function UiText({ text, className }: TextProps) {
  return <p className={`${className} ui-text`}>{text}</p>;
}
