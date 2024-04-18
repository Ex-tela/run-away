import type {Metadata} from "next";
import {Signika, DM_Sans} from "next/font/google";
import {TbRun} from "react-icons/tb";
import "./globals.css";
import {FaGithub, FaLinkedin, FaPoo} from "react-icons/fa";

import {
  Footer,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Link from "next/link";

const titleFont = Signika({subsets: ["latin"]});
const bodyFont = DM_Sans({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "RUN AWAY!!",
  description: "",
};


export default function RootLayout({children,}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" className="bg-stone-100 dark:bg-stone-800">
      <head>
      </head>

      <body className={titleFont.className}>
        <Navbar className="bg-stone-200 dark:bg-stone-700">
          <NavbarBrand as={Link} className="hover:scale-110" href="/">
            <TbRun className="dark:text-white text-3xl mr-1"/>
            <span className="self-center whitespace-nowrap text-xl dark:text-white">RUN AWAY</span>
          </NavbarBrand>

          <FaPoo />

          <NavbarToggle/>
          <NavbarCollapse>
            <NavbarLink as={Link}
                        className="whitespace-nowrap dark:text-white hover:scale-110"
                        alt="My Account"
                        href="account">
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                   xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                   viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
              </svg>
            </NavbarLink>
            <NavbarLink href="bag">
              <svg className="w-6 h-6 text-gray-800 dark:text-white hover:scale-110"
                   aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                   fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z"/>
              </svg>
            </NavbarLink>
          </NavbarCollapse>
        </Navbar>

        <main className="w-full flex justify-center">
          <div className="max-w-5xl m-3">
            <div className={bodyFont.className}>
              {children}
            </div>
          </div>
        </main>

        <Footer className="w-6/8 m-3">
          <div className="w-full bg-stone-200 dark:bg-stone-600 rounded-lg">
            <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
              <div>
                <FooterTitle title="help center"/>
                <FooterLinkGroup col>
                  <FooterLink href="#">Discord Server</FooterLink>
                  <FooterLink href="#">Twitter</FooterLink>
                  <FooterLink href="#">Facebook</FooterLink>
                  <FooterLink href="#">Contact Us</FooterLink>
                </FooterLinkGroup>
              </div>
              <div>
                <FooterTitle title="legal"/>
                <FooterLinkGroup col>
                  <FooterLink href="#">Privacy Policy</FooterLink>
                  <FooterLink href="#">Licensing</FooterLink>
                  <FooterLink href="#">Terms &amp; Conditions</FooterLink>
                </FooterLinkGroup>
              </div>
            </div>
            <div
                className="w-full bg-stone-300 dark:bg-stone-700 px-4 py-6 sm:flex sm:items-center sm:justify-between rounded-lg">
              <p className="text-grey-700 text-sm dark:text-stone-300">2024 | made by Estela Valle</p>
              <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                <FooterIcon icon={FaGithub} className="text-grey-700 dark:text-stone-300 h-6 w-6"
                            href="https://github.com/Ex-tela/run-away-fashion"/>
                <FooterIcon icon={FaLinkedin} className="text-grey-700 dark:text-stone-300 h-6 w-6"
                            href="https://www.linkedin.com/in/estela-valle-58a165202/"/>
              </div>
            </div>
          </div>
        </Footer>
      </body>
      </html>
  );
}
