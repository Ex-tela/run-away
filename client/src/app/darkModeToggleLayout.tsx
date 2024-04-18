'use client'

import {useState} from 'react'
import {TbRun, TbSunMoon} from "react-icons/tb";
import {
  Footer, FooterIcon, FooterLink, FooterLinkGroup, FooterTitle,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle
} from "flowbite-react";
import Link from "next/link";
import {IoIosSearch} from "react-icons/io";
import {FaUserLarge} from "react-icons/fa6";
import {BsBasket2Fill} from "react-icons/bs";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {DM_Sans, Signika} from "next/font/google";

const titleFont = Signika({subsets: ["latin"]});
const bodyFont = DM_Sans({subsets: ["latin"]});

export default function DarkModeToggleLayout({children,}: Readonly<{
  children: React.ReactNode;

}>) {
  const [darkModeEnabled, setDarkModeEnabled] = useState(false)
  console.log(darkModeEnabled)
  return (
      <html lang="en" className={`bg-stone-100 dark:bg-stone-700 ${darkModeEnabled ? 'dark' : ''}`}>
      <head>
      </head>

      <body className={bodyFont.className}>
      <Navbar className="text-stone-800 dark:text-stone-300 bg-stone-200 dark:bg-stone-800 fixed w-full">
        <NavbarBrand as={Link} className="hover:scale-110" href="/">
          <TbRun className="text-4xl mr-1"/>
          <div className={titleFont.className}>
            <span
                className="self-center whitespace-nowrap text-2xl text-stone-800 dark:text-stone-300">RUN AWAY</span>
          </div>
        </NavbarBrand>

        <div className="inline-flex flex-grow pl-3 md:pl-20 md:pr-20">
          <input
              className="w-full bg-stone-100 dark:bg-stone-700 rounded-3xl p-2 pl-4 pr-4 mr-2 focus:border-none"
              placeholder="Search for products..."/>
          <button>
            <IoIosSearch
                className="w-10 h-10 mr-2 hover:bg-stone-100 dark:hover:bg-stone-700 rounded-2xl p-2"/>
          </button>
        </div>

        <button onClick={() => setDarkModeEnabled(!darkModeEnabled)}>
          <TbSunMoon
              className="md:mr-6 w-10 h-10 hover:bg-stone-100 dark:hover:bg-stone-700 rounded-2xl p-2"/>
        </button>

        <NavbarToggle/>
        <NavbarCollapse>
          <NavbarLink as={Link}
                      className="inline-flex hover:scale-110 text-xl"
                      alt="My Account"
                      href="account">
            <FaUserLarge className="mr-2 text-stone-800 dark:text-stone-300"/>
            <span className="text-base text-stone-800 dark:text-stone-300">Larry</span>
          </NavbarLink>
          <NavbarLink as={Link}
                      className="inline-flex hover:scale-110 text-xl"
                      alt="My Account"
                      href="basket">
            <BsBasket2Fill className="mr-2 text-stone-800 dark:text-stone-300"/>
            <span className="text-base text-stone-800 dark:text-stone-300">Basket</span>
          </NavbarLink>
        </NavbarCollapse>
      </Navbar>

      <main className="w-full flex justify-center">
        <div className="max-w-5xl m-3 text-stone-800 dark:text-stone-400 mt-28 md:mt-20">
          <div className={bodyFont.className}>
            {children}
          </div>
        </div>
      </main>

      <Footer className="w-7/8 m-3">
        <div className="w-full bg-stone-200 dark:bg-stone-800 rounded-lg">
          <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
            <div>
              <FooterTitle className="text-stone-500 dark:text-stone-300" title="help center"/>
              <FooterLinkGroup className="text-stone-500 dark:text-stone-300" col>
                <FooterLink href="#">Discord Server</FooterLink>
                <FooterLink href="#">Twitter</FooterLink>
                <FooterLink href="#">Facebook</FooterLink>
                <FooterLink href="#">Contact Us</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle className="text-stone-500 dark:text-stone-300" title="legal"/>
              <FooterLinkGroup className="text-stone-500 dark:text-stone-300" col>
                <FooterLink href="#">Privacy Policy</FooterLink>
                <FooterLink href="#">Licensing</FooterLink>
                <FooterLink href="#">Terms &amp; Conditions</FooterLink>
              </FooterLinkGroup>
            </div>
          </div>

          {/*bottom section of footer*/}
          <div
              className="w-full bg-stone-300 dark:bg-stone-900 px-4 py-6 sm:flex sm:items-center sm:justify-between rounded-lg">
            <p className="text-stone-600 text-sm dark:text-stone-400">2024 | made by Estela
              Valle</p>
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <FooterIcon icon={FaGithub}
                          className="text-stone-600 dark:text-stone-400 h-6 w-6 hover:text-stone-500"
                          href="https://github.com/Ex-tela/run-away-fashion"/>
              <FooterIcon icon={FaLinkedin}
                          className="text-stone-600 dark:text-stone-400 h-6 w-6 hover:text-stone-500"
                          href="https://www.linkedin.com/in/estela-valle-58a165202/"/>
            </div>
          </div>
        </div>
      </Footer>
      </body>
      </html>
  )
}
