import { Dispatch, RefObject, SetStateAction } from "react";

export interface ISections {
  work: HTMLElement | null;
  profile: HTMLElement | null;
  technology: HTMLElement | null;
  contact: HTMLElement | null;
}
export interface ISectionsProps {
  sectionsRef: RefObject<ISections>;
}
export interface IIsOpen {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
export interface IButton {
  text: string;
  className?: string;
  onclick?: () => void;
  title?: string;
}
export interface IWorkCard {
  brand: string;
  title: string;
  desc: string;
  image: string;
  index: number;
}
