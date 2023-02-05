import cn from "classnames"
import Link from "next/link"
import useDelayedRender from "useDelayedRender"
import { useState, useEffect } from "react"
import styles from "styles/mobile-menu.module.css"

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
    isMenuOpen,
    {
      enterDelay: 20,
      exitDelay: 300,
    }
  )

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false)
      document.body.style.overflow = ""
    } else {
      setIsMenuOpen(true)
      document.body.style.overflow = "hidden"
    }
  }

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = ""
    }
  }, [])

  return <>
    <button
      className={cn(styles.burger, "visible md:hidden")}
      aria-label="Toggle menu"
      type="button"
      onClick={toggleMenu}
    >
      <MenuIcon data-hide={isMenuOpen} />
      <CrossIcon data-hide={!isMenuOpen} />
    </button>
    {isMenuMounted && (
      <ul
        className={cn(
          styles.menu,
          "absolute flex flex-col bg-gray-50 ",
          isMenuRendered && styles.menuRendered
        )}
      >
        <li
          className="border-b border-gray-300 text-sm font-semibold text-gray-900  "
          style={{ transitionDelay: "150ms" }}
        >
          <Link href="/" className="flex w-auto pb-4">
            Hjem
          </Link>
        </li>

        <li
          className="border-b border-gray-300 text-sm font-semibold text-gray-900  "
          style={{ transitionDelay: "250ms" }}
        >
          <Link href="/lyt" className="flex w-auto pb-4">
            Lyt
          </Link>
        </li>

        <li
          className="border-b border-gray-300 text-sm font-semibold text-gray-900  "
          style={{ transitionDelay: "250ms" }}
        >
          <Link href="/koncertkalender" className="flex w-auto pb-4">
            Koncertkalender
          </Link>
        </li>

        <li
          className="border-b border-gray-300 text-sm font-semibold text-gray-900  "
          style={{ transitionDelay: "250ms" }}
        >
          <Link href="/undervisning" className="flex w-auto pb-4">
            Undervisning
          </Link>
        </li>
        <li
          className="border-b border-gray-300 text-sm font-semibold text-gray-900  "
          style={{ transitionDelay: "250ms" }}
        >
          <Link href="/presse" className="flex w-auto pb-4">
            Presse
          </Link>
        </li>
        <li
          className="border-b border-gray-300 text-sm font-semibold text-gray-900  "
          style={{ transitionDelay: "250ms" }}
        >
          <Link href="/kontakt" className="flex w-auto pb-4">
            Kontakt
          </Link>
        </li>
      </ul>
    )}
  </>;
}

function MenuIcon(props: JSX.IntrinsicElements["svg"]) {
  return (
    <svg
      className="absolute h-5 w-5 text-gray-900 "
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M2.5 7.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 12.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CrossIcon(props: JSX.IntrinsicElements["svg"]) {
  return (
    <svg
      className="absolute h-5 w-5 text-gray-900 "
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  )
}
