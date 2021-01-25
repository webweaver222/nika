import React from "react";
import Loader from "../Components/loader";

interface Html {
  scripts: Array<string>;
}

export function Html({ children, scripts }: React.PropsWithChildren<Html>) {
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=1,maximum-scale=1,initial-scale=1"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>React Starter Pack</title>
      </head>
      <body>
        <div id="loader">
          <Loader />
        </div>
        <div id="root" style={{ visibility: "hidden" }}>
          {children}
        </div>
        {scripts.map((script, index) => {
          console.log(script);
          return <script src={script} key={index} />;
        })}
      </body>
    </html>
  );
}
