// ------- UI -------

interface TextProps {
  text: string;
  className?: string;
}

type targetTypes = "_blank" | "_self";

interface LinkProps {
  text: string;
  link?: string;
  className?: string;
  target?: targetTypes;
}

interface IconProps {
  width: number;
  height: number;
  fill: string;
}

// ------- End UI -------
