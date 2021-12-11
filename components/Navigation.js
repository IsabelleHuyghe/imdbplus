import styles from "../styles/Navigation.module.scss"
import Image from "next/image"

const Navigation = ({ locale, locales }) => {
  const resolveGroups = {
    en: 'Groups',
    nl: 'Muziekgroepen',
  }
  const resolveMembers = {
    en: 'Members',
    nl: 'Leden',
  }
  const resolveHistory = {
    en: 'History',
    nl: 'Geschiedenis',
  }
  const resolveEvents = {
    en: 'Events',
    nl: 'Evenementen',
  }
  const resolveAlbums = {
    en: 'Albums',
    nl: 'Albums',
  }
  let homeurl = "/";
  if (locale != 'default') {
    homeurl = "/" + locale;
  }

  const defaultLocale = locale === 'en' ? '/' : `/${locale}/`
  return (
    <header className={styles.navigationwrapper}>
      <nav className={styles.navigation} role="navigation">

        <div className={styles.navlogo}>
          <a href={homeurl}>
            {/* <img
              src="https://a.storyblok.com/f/133261/3039x582/a60d166ec2/logo-colored-full.png/m/200x0"
              alt="IMDBPlus Logo"
              className=""
            /> */}
            <Image src="/logo-colored-full.png" alt="IMDBPlus Logo" width="128" height="25" />
          </a>
        </div>
        <div className={styles.navlinkswrapper}>
          <div className={styles.navlinks}>
            <div className={styles.navlink}>
              <a href={`${defaultLocale}pages/groups`} className={styles.movie}>{resolveGroups[locale]}</a>
            </div>
            <div className={styles.navlink}>
              <a href={`${defaultLocale}pages/members`} className={styles.personality}>{resolveMembers[locale]}</a>
            </div>
            <div className={styles.navlink}>
              <a href={`${defaultLocale}pages/history`} className={styles.newsitem}>{resolveHistory[locale]}</a>
            </div>
            <div className={styles.navlink}>
              <a href={`${defaultLocale}pages/events`} className={styles.product}>{resolveEvents[locale]}</a>
            </div>
            <div className={styles.navlink}>
              <a href={`${defaultLocale}pages/albums`} className={styles.product}>{resolveAlbums[locale]}</a>
            </div>
          </div>
          <div className={styles.navlocales}>
            {
              locales.map(loc => {
                return (<div className={styles.navlocale} key={loc}>
                  <a href={`/${loc}`} className={`${locale === loc ? "selected" : ""}`}>{loc}</a>
                </div>)
              })
            }
          </div>
        </div>

      </nav>
    </header>
  )
}

export default Navigation
