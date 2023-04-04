import { FC, ReactElement } from "react";
import { ContainerProps } from "@/utils/interfaces/container.interface";
import styles from "@/styles/modules/global/container.module.scss";

export const Container: FC<ContainerProps> = ({
  children,
}: ContainerProps): ReactElement => {
  return <div className={styles.container}>{children}</div>;
};
