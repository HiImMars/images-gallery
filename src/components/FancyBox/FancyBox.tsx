import { useRef, useEffect, FC, ReactNode } from "react";
import { OptionsType } from "@fancyapps/ui/types/Fancybox/options";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

interface Props {
  children: ReactNode;
  options?: Partial<OptionsType>;
  delegate?: string;
}

const Fancybox: FC<Props> = (props) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const delegate = props.delegate || "[data-fancybox]";
    const options = props.options || {};

    NativeFancybox.bind(container, delegate, options);

    return () => {
      NativeFancybox.unbind(container);
      NativeFancybox.close();
    };
  });

  return <div ref={containerRef}>{props.children}</div>;
};

export default Fancybox;
