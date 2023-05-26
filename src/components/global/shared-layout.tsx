import { FC, ReactElement, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { Sidebar } from "./sidebar";
import { Container } from "./container";
import { MobileMenu } from "./mobile-menu";
import { AuthModal } from "./auth-modal";
import { ContainerProps } from "@/utils/interfaces/container.interface";
import { logOut } from "@/api/users";
import styles from "@/styles/modules/global/shared-layout.module.scss";
import { useGlobalContext } from "@/contexts";

export const SharedLayout: FC<ContainerProps> = ({
  children,
}: ContainerProps): ReactElement => {
  const { setLoggedIn } = useGlobalContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const handleLogOut = async () => {
    await logOut();
    setLoggedIn(false);
  };

  const openMenu = () => {
    setIsMenuOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeMenu = (e: any) => {
    if (
      e.currentTarget.id === "menu-close" ||
      e.target.closest("li") ||
      e.key === "Escape"
    ) {
      setIsMenuOpen(false);
      document.body.style.overflow = "auto";
    }
  };

  const openAuthModal = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    setIsAuthOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeAuthModal = (e: any) => {
    if (
      e.key === "Escape" ||
      e.target.id === "auth-close" ||
      e.target.closest("svg")
    ) {
      setIsAuthOpen(false);
      document.body.style.overflow = "auto";
    }
  };

  return (
    <div className={styles.layoutWrapperLarge}>
      <Sidebar openAuthModal={openAuthModal} handleLogOut={handleLogOut} />
      <div className={styles.layoutWrapper}>
        <Container>
          <header className={styles.header}>
            <Link href="/">
              <Image
                className={styles.logo}
                src="/logo.png"
                alt="Logo"
                width={144}
                height={30}
              />
            </Link>
            {isMenuOpen ? (
              <button
                type="button"
                id="menu-close"
                className={styles.burger}
                onClick={closeMenu}
              >
                <RxCross1 className={styles.burgerIconClose} />
              </button>
            ) : (
              <button
                type="button"
                id="menu-open"
                className={styles.burger}
                onClick={openMenu}
              >
                <RxHamburgerMenu className={styles.burgerIconOpen} />
              </button>
            )}
          </header>
        </Container>
        {isMenuOpen && (
          <MobileMenu
            closeMenu={closeMenu}
            openAuthModal={openAuthModal}
            handleLogOut={handleLogOut}
          />
        )}
        {children}
      </div>
      {isAuthOpen && <AuthModal closeAuthModal={closeAuthModal} />}
    </div>
  );
};
