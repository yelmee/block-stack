"use server"

import { createPortal } from "react-dom";
import type {
  ReactNode
} from "react";

export default async function Modal({
  children,
  domNode,
}: {
  children: ReactNode;
  domNode: Element | DocumentFragment;
}) {
  return createPortal(children, domNode);
}
