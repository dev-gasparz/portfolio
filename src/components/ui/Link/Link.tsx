import "./styles.scss";

/**
 * @exports
 * @description Text component that uses a default style
 * @version 1.0.0
 */
export function UiLink({ link, text, className, target }: LinkProps) {
  return (
    <a href={link} className={`${className} ui-link`} target={target}>
      {text}
    </a>
  );
}
