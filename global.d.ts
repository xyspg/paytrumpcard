import React from "react";

declare namespace JSX {
  interface IntrinsicElements {
    'apple-pay-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  }
}
