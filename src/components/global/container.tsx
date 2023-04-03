import { FC, ReactElement } from "react";
import { ContainerProps } from "@/utils/interfaces/container.interface";
import global from "@/styles/global.module.scss";

export const Container: FC<ContainerProps> = ({
  children,
}: ContainerProps): ReactElement => {
  return <div className={global.container}>{children}</div>;
};
