import s from "@/pages/index.module.scss";
import ExternalLink from "./ExternalLink";
import {faCloudflare, faGithub} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Footer() {

  return <footer className="container pb-10">
    <div className={[s.comment, "mb-6  mt-16"].join(" ")}>&#47;&#47; Make a footer</div>

    <small className="leading-6">Thanks to JetBrains for their color scheme. Created with <ExternalLink href="https://nextjs.dev">NextJS</ExternalLink>, deployed with <ExternalLink href="https://www.cloudflare.com/en-gb/products/pages/"><FontAwesomeIcon icon={faCloudflare} /> Cloudflare Pages</ExternalLink>, source on <ExternalLink href="https://github.com/michaelhillcox/michael"><FontAwesomeIcon icon={faGithub} /> GitHub</ExternalLink>. &copy; {new Date().getFullYear()}, Michael Hillcox.</small>
  </footer>
}
