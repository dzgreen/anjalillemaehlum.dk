import Head from "next/head"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import NextLink from "next/link"
import cn from "classnames"
import Footer from "components/Footer"
import MobileMenu from "components/MobileMenu"
import { Facebook } from "react-feather"
// import { Youtube } from "react-feather"

function NavItem({ href, text }) {
  const router = useRouter()
  const isActive = router.asPath === href

  return (
    <NextLink href={href}>
      <a
        className={cn(
          isActive
            ? "font-semibold text-gray-800 "
            : "font-normal text-gray-600 ",
          "hidden rounded-lg p-1 transition-all hover:bg-gray-200  sm:px-3 sm:py-2 md:inline-block"
        )}
      >
        <span className="capsize">{text}</span>
      </a>
    </NextLink>
  )
}

export default function Container(props) {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), [])

  const { children, ...customMeta } = props
  const router = useRouter()
  const meta = {
    title: "Anja Lillemæhlum – cellist",
    description: `Cellist, komponist og underviser.`,
    image: "",
    type: "website",
    ...customMeta,
  }

  return (
    <div className="bg-gray-50 ">
      <div className="flex h-screen flex-col justify-between">
        <Head>
          <title>{meta.title}</title>
          <meta name="robots" content="follow, index" />
          <meta content={meta.description} name="description" />
          <meta
            property="og:url"
            content={`https://anjalillemaehlum.dk/${router.asPath}`}
          />
          <link
            rel="canonical"
            href={`https://anjalillemaehlum.dk/${router.asPath}`}
          />
          <meta property="og:type" content={meta.type} />
          <meta property="og:site_name" content="anjalillemaehlum.dk" />
          <meta property="og:description" content={meta.description} />
          <meta property="og:title" content={meta.title} />
          <meta property="og:image" content={meta.image} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@dominik_zdyb" />
          <meta name="twitter:title" content={meta.title} />
          <meta name="twitter:description" content={meta.description} />
          <meta name="twitter:image" content={meta.image} />

          {meta.date && (
            <meta property="article:published_time" content={meta.date} />
          )}
        </Head>
        <div className="flex flex-col justify-center px-8">
          <nav className="mx-auto flex w-full max-w-3xl items-center justify-between bg-gray-50 bg-opacity-60 pt-8 pb-8 text-gray-900 sm:pb-16">
            <a href="#skip" className="skip-nav">
              Skip to content
            </a>

            <div className="ml-[-0.60rem]">
              <MobileMenu />
              <NavItem href="/" text="Hjem" />
              {/* <NavItem href="/blog" text="Blog" /> */}
              <NavItem href="/lyt" text="Lyt" />
              <NavItem href="/koncertkalender" text="Koncertkalender" />
              <NavItem href="/undervisning" text="Undervisning" />
              <NavItem href="/kontakt" text="Kontakt" />
            </div>
          </nav>
        </div>

        <main
          id="skip"
          className="mb-auto flex flex-col justify-center bg-gray-50 px-8 "
        >
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}
