import { FC, ReactElement, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { Container } from "./container";
import { MobileMenu } from "./mobile-menu";
import { ContainerProps } from "@/utils/interfaces/container.interface";
import global from "@/styles/global.module.scss";

export const SharedLayout: FC<ContainerProps> = ({
  children,
}: ContainerProps): ReactElement => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Container>
        <header className={global.header}>
          <Link href="/">
            <Image
              className={global.logo}
              src="/Logo.svg"
              alt="Logo"
              width={144}
              height={30}
            />
          </Link>
          {isMenuOpen ? (
            <button
              type="button"
              className={global.burger}
              onClick={toggleMenu}
            >
              <RxCross1 className={global.burgerIconClose} />
            </button>
          ) : (
            <button
              type="button"
              className={global.burger}
              onClick={toggleMenu}
            >
              <RxHamburgerMenu className={global.burgerIconOpen} />
            </button>
          )}
        </header>
      </Container>
      {isMenuOpen && <MobileMenu />}
      {children}
    </>
  );
};
