/**
 * JSX-Typen für die @material/web-Custom-Elements.
 *
 * React 19 rendert Custom Elements nativ: Props, die als Property auf
 * dem Element existieren (checked, selected, value …), werden als
 * Property gesetzt, alles andere als Attribut. Die Typen hier sind
 * bewusst pragmatisch — häufige Props benannt, Rest offen.
 */
import type * as React from "react";

type MdProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
> & {
  disabled?: boolean;
  value?: string | number;
  label?: string;
  name?: string;
  href?: string;
  target?: string;
  type?: string;
  checked?: boolean;
  selected?: boolean;
  required?: boolean;
  error?: boolean;
  open?: boolean;
  active?: boolean;
  indeterminate?: boolean;
  placeholder?: string;
  min?: number | string;
  max?: number | string;
  step?: number | string;
  rows?: number | string;
  anchor?: string;
  slot?: string;
  [key: string]: unknown;
};

declare global {
  namespace React.JSX {
    interface IntrinsicElements {
      "md-filled-button": MdProps;
      "md-filled-tonal-button": MdProps;
      "md-outlined-button": MdProps;
      "md-text-button": MdProps;
      "md-icon-button": MdProps;
      "md-outlined-text-field": MdProps;
      "md-outlined-select": MdProps;
      "md-select-option": MdProps;
      "md-checkbox": MdProps;
      "md-switch": MdProps;
      "md-radio": MdProps;
      "md-slider": MdProps;
      "md-tabs": MdProps;
      "md-primary-tab": MdProps;
      "md-secondary-tab": MdProps;
      "md-menu": MdProps;
      "md-menu-item": MdProps;
      "md-list": MdProps;
      "md-list-item": MdProps;
      "md-divider": MdProps;
      "md-chip-set": MdProps;
      "md-assist-chip": MdProps;
      "md-filter-chip": MdProps;
      "md-dialog": MdProps;
      "md-linear-progress": MdProps;
      "md-circular-progress": MdProps;
    }
  }
}

export {};
