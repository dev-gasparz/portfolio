// ------- UI -------

interface BoxProps {
  children: React.ReactNode;
  className?: string;
  flexRow?: boolean;
  hasBorder?: boolean;
  hasPadding?: boolean;
  hasBgColor?: boolean;
}

type titleClass = "lg" | "md" | "sm";

interface TitleProps {
  title: string;
  size: titleClass;
}

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
  onClick?: () => void;
}

interface LoaderProps {
  quantity?: number;
}

interface IconProps {
  width: number;
  height: number;
  fill: string;
}

// ------- End UI -------
