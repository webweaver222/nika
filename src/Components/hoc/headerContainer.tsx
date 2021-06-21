import React, { useRef, useState, useEffect, ComponentType } from "react";

const HeaderContainer = (Wrapped: ComponentType<any>) => (props: any) => {
  const header = useRef(null);

  const [parallaxOffset, setParallax] = useState(0);

  const handleScroll = (event: any) => {
    if (event.target.scrollTop > event.target.offsetHeight) return;

    setParallax(event.target.scrollTop * 0.6);
  };

  const onShevroneClick = () =>
    requestAnimationFrame(() => {
      const body = document.body;
      if (
        body.scrollTop >=
        (90 *
          Math.max(
            document.documentElement.clientHeight,
            window.innerHeight || 0
          )) /
          100
      )
        return;

      body.scrollTop += 15;

      onShevroneClick();
    });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);

    return () => window.removeEventListener("scroll", handleScroll, true);
  }, []);

  return (
    <Wrapped
      {...props}
      header={header}
      parallaxOffset={parallaxOffset}
      setParallax={setParallax}
      handleScroll={handleScroll}
      onShevroneClick={onShevroneClick}
    />
  );
};

export default HeaderContainer;
