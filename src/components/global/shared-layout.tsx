import { FC, ReactElement, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { Container } from "./container";
import { MobileMenu } from "./mobile-menu";
import { ContainerProps } from "@/utils/interfaces/container.interface";
import styles from "@/styles/modules/global/shared-layout.module.scss";

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
        <header className={styles.header}>
          <Link href="/">
            <Image
              className={styles.logo}
              src="/Logo.svg"
              alt="Logo"
              width={144}
              height={30}
            />
          </Link>
          {isMenuOpen ? (
            <button
              type="button"
              className={styles.burger}
              onClick={toggleMenu}
            >
              <RxCross1 className={styles.burgerIconClose} />
            </button>
          ) : (
            <button
              type="button"
              className={styles.burger}
              onClick={toggleMenu}
            >
              <RxHamburgerMenu className={styles.burgerIconOpen} />
            </button>
          )}
        </header>
      </Container>
      {isMenuOpen && <MobileMenu />}
      {children}
    </>
  );
};
