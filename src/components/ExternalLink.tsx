import {ReactNode} from "react";

type Props = {
  href: string;
  children: ReactNode;
} & Record<string, any>

export default function ExternalLink({href, children, ...rest}: Props) {
  return <a rel="noreferrer noopener" target="_blank" href={href} {...rest}>
    {children}
  </a>
}
