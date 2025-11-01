import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { Pencil, Users, Zap, ArrowRight, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-black border-b border-gray-800/50 sticky top-0 z-50 backdrop-blur-sm bg-black/95">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
         <Image
          src="https://cdn.prod.website-files.com/62d58a323cbc396f06a780aa/651593780abfac438bc37149_Logo%20Mark%20%2B%20Name.svg"
          alt="logo"
          width={110}
          height={110}
        />

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a
                  className="text-gray-300 transition hover:text-blue-400"
                  href="#"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="text-gray-300 transition hover:text-blue-400"
                  href="#"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  className="text-gray-300 transition hover:text-blue-400"
                  href="#"
                >
                  History
                </a>
              </li>
              <li>
                <a
                  className="text-gray-300 transition hover:text-blue-400"
                  href="#"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  className="text-gray-300 transition hover:text-blue-400"
                  href="#"
                >
                  Projects
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <div
                className="block rounded-md px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800 hover:text-blue-400"
              >
                <LoginLink postLoginRedirectURL="/dashboard">Login</LoginLink>
              </div>
              <div
                className="hidden rounded-md bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90 sm:block"
              >
                <RegisterLink>Register</RegisterLink>
              </div>
            </div>

            <button className="block rounded bg-gray-800 p-2.5 text-gray-300 transition hover:text-blue-400 md:hidden">
              <span className="sr-only">Toggle menu</span>
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;