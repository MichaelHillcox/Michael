import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faHeart, faLocationDot, faStar, faVenusMars} from "@fortawesome/free-solid-svg-icons";
import s from './index.module.scss'
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import ExternalLink from "../components/ExternalLink";

export default function Home() {
  return (
    <>
      <div className="container md:pt-20 pt-10 pb-10">
        <img src="/assets/logo.svg" className="mb-10" width={90} alt="Michael's logo" />

        <div className={[s.comment, "mb-6"].join(" ")}>&#47;&#47; Introduce yourself</div>
        <h1 className="mb-4 text-3xl font-bold">Hey, I&apos;m Michael.</h1>
        <p className="mb-6">I&apos;m a <em>full-stack developer</em> and a <em>part-time designer</em> with over 10 years experience working in the Web Industry. Lead developer at <ExternalLink href="https://feed-the-beast.com">Feed The Beast</ExternalLink> creating <em>Software</em>, <em><ExternalLink href="https://minecraft.fandom.com/wiki/Mods">Minecraft mods</ExternalLink></em>, and <em>Managing Projects</em>.</p>

        <div className="flex gap-6 mb-16 flex-wrap">
          <ExternalLink href="https://github.com/michaelhillcox" className="flex gap-4 items-center">
              <FontAwesomeIcon icon={faGithub} />
              @MichaelHillcox
          </ExternalLink>
          <div className="flex gap-4 items-center">
            <FontAwesomeIcon icon={faVenusMars} />
            Human
          </div>
          <div className="flex gap-4 items-center">
            <FontAwesomeIcon icon={faLocationDot} />
            United Kingdom
          </div>
        </div>

        <div className={[s.comment, "mb-6"].join(" ")}>&#47;&#47; Explain the knowledge I&apos;ve gained over the years...</div>
        <div className="grid md:grid-cols-2 gap-8 leading-7">
          <div>
            <h2 className="mb-4 text-2xl font-bold">Languages</h2>
            <p className="mb-2">I&apos;m a language agnostic programmer, so I use what works best.</p>
            <ul className="list-disc pl-4" role="list">
              <li className="star"><FontAwesomeIcon icon={faStar} /> Java</li>
              <li className="star"><FontAwesomeIcon icon={faStar} /> Typescript & Javascript</li>
              <li className="star"><FontAwesomeIcon icon={faStar} /> C#</li>
              <li className="star"><FontAwesomeIcon icon={faStar} /> NodeJS & Deno</li>
              <li>Python</li>
              <li>Rust</li>
              <li>GoLang</li>
              <li>C / C++</li>
              <li>PHP 5.4+ (8.2 <FontAwesomeIcon icon={faHeart} />)</li>
              <li>Docker, Linux, Git, Nginx, Caddy, Apache, and Bash</li>
              <li>Most databases and all the web stack, HTML, CSS, SCSS, Less and loads more!</li>
            </ul>
          </div>

          <div>
            <h2 className="mt-8 md:mt-0 mb-4 text-2xl font-bold">Frameworks</h2>
            <p className="mb-2">Frameworks! Frameworks all the way down...</p>
            <ul className="list-disc pl-4" role="list">
              <li className="star"><FontAwesomeIcon icon={faStar} /> React</li>
              <li className="star"><FontAwesomeIcon icon={faStar} /> Vue (2 & 3)</li>
              <li>ExpressJS</li>
              <li>Javalin</li>
              <li>NestJS</li>
              <li>NextJS</li>
              <li>Nuxt</li>
              <li>ExpressJS</li>
              <li>Laravel</li>
              <li>Flask</li>
              <li>Wordpress (😭)</li>
              <li>And a bunch more, just too many to list here...</li>
            </ul>
          </div>
        </div>

        <p className="mt-6">I also make bots / apps for a bunch of different use cases so I&apos;m very familiar with the API&apos;s, frameworks and ecosystems of platforms like <em>Discord</em>, <em>Slack</em>, <em>Microsoft Teams</em>, <em>GitHub</em>, <em>Telegram</em>, <em>Shopify</em>, etc.</p>

        <div className={[s.comment, "mb-6 mt-16"].join(" ")}>&#47;&#47; Let people know how to contact me</div>
        <h2 className="mb-4 text-2xl font-bold">Contact</h2>
        <p>I don&apos;t really use social media but if you&apos;d like to get in contact with me, you can use one of the following options</p>

        <div className="flex gap-6 flex-wrap gap-6 mt-6">
          <a className="flex gap-4 items-center" href="mailto:hello+from@michaelhillcox.com">
            <FontAwesomeIcon icon={faEnvelope} />
            Email (Preferred)
          </a>
          <ExternalLink className="flex gap-4 items-center" href="https://linkedin.com/in/michael-hillcox-9995b7137">
            <FontAwesomeIcon icon={faLinkedin} />
            LinkedIn
          </ExternalLink>
        </div>
      </div>
    </>
  );
}
