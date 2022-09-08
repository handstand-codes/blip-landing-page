import React from "react";
import { css, Global } from "@emotion/react";
import { Animations, Colors, Fonts } from "~components";

const Theme = () => (
  <>
    <Global
      styles={css`
        /*=============================================>>>>>
        = Print Resets =
        ================================================>>>>>*/

        @media print {
          * {
            background: transparent !important;
            color: #000 !important;
            text-shadow: none !important;
            height: auto !important;
            width: auto !important;
            float: none !important;
          }

          nav {
            display: none !important;
          }

          a,
          a:visited {
            color: #000 !important;
            text-decoration: underline;
          }

          a::after {
            content: " (" attr(href) ")";
          }

          abbr::after {
            content: " (" attr(title) ")";
          }

          pre,
          blockquote {
            border: 1px solid #000;
            page-break-inside: avoid;
          }

          img {
            page-break-inside: avoid;
          }

          @page {
            margin: 0.2cm;
          }

          p,
          h2,
          h3 {
            orphans: 3;
            widows: 3;
          }

          h2,
          h3 {
            page-break-after: avoid;
          }
        }

        /*=============================================>>>>>
        = Reset =
        ================================================>>>>>*/

        html,
        body,
        div,
        span,
        applet,
        object,
        iframe,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        blockquote,
        pre,
        a,
        abbr,
        acronym,
        address,
        big,
        cite,
        code,
        del,
        dfn,
        em,
        img,
        ins,
        kbd,
        q,
        s,
        samp,
        small,
        strike,
        strong,
        sub,
        sup,
        tt,
        var,
        b,
        u,
        i,
        center,
        dl,
        dt,
        dd,
        ol,
        ul,
        li,
        fieldset,
        form,
        label,
        legend,
        table,
        caption,
        tbody,
        tfoot,
        thead,
        tr,
        th,
        td,
        article,
        aside,
        canvas,
        details,
        embed,
        figure,
        figcaption,
        footer,
        header,
        hgroup,
        menu,
        nav,
        output,
        ruby,
        section,
        summary,
        time,
        mark,
        audio,
        video {
          margin: 0;
          padding: 0;
          border: 0;
          font-size: 100%;
          font: inherit;
          vertical-align: baseline;
          box-sizing: border-box;
        }
        /* HTML5 display-role reset for older browsers */
        article,
        aside,
        details,
        figcaption,
        figure,
        footer,
        header,
        hgroup,
        menu,
        nav,
        section {
          display: block;
        }
        body {
          line-height: 1;
        }
        ol,
        ul {
          list-style: none;
        }
        blockquote,
        q {
          quotes: none;
        }
        blockquote:before,
        blockquote:after,
        q:before,
        q:after {
          content: "";
          content: none;
        }
        table {
          border-collapse: collapse;
          border-spacing: 0;
        }

        /*=============================================>>>>>
        = Default typography styles =
        ================================================>>>>>*/

        body {
          font-family: "Fk Grotesk Regular";
          font-size-adjust: auto;
          text-align: left;
          word-wrap: break-word;
          text-rendering: optimizeLegibility;
          font-smoothing: antialiased;
          text-shadow: 0 0 1px transparent;
        }

        // --------------------------------------------------------------------------
        //   Content Elements
        // --------------------------------------------------------------------------

        a {
          text-decoration: none;
          color: #000;
          &:hover {
            text-decoration: underline;
          }
        }

        p {
          margin-top: 0;
          margin-bottom: 20px;
        }

        strong {
          font-weight: 700;
        }

        figure {
          margin: 0;
          padding: 0;
        }

        img {
          max-width: 100%;
          height: auto;
        }

        hr {
          display: block;
          margin: 20px 0;
          border: 0;
        }

        blockquote {
          margin: 0 0 20px;
          font-family: cambria, georgia, times, serif;
          font-style: italic;
          p {
            &:last-child {
              margin-bottom: 0;
            }
          }
        }

        table {
          width: 100%;
        }

        /*=============================================>>>>>
        = Globals =
        ================================================>>>>>*/

        html {
          font-size: 16px;
          background: black;
        }

        a {
          text-decoration: none;
          color: inherit;
          cursor: pointer;
        }

        button {
          background-color: transparent;
          color: inherit;
          border-width: 0;
          padding: 0;
          cursor: pointer;
        }

        a:focus,
        button:focus,
        input:focus,
        textarea:focus {
          outline: none;
        }

        input:not[type="checkbox"],
        textarea {
          appearance: none;
          border-radius: 0;
        }

        figure {
          margin: 0;
        }

        input::-moz-focus-inner {
          border: 0;
          padding: 0;
          margin: 0;
        }

        ul,
        ol,
        dd {
          margin: 0;
          padding: 0;
          list-style: none;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin: 0;
          font-size: inherit;
          font-weight: inherit;
        }

        p {
          margin: 0;
        }

        fieldset {
          border-width: 0;
          padding: 0;
          margin: 0;
        }
      `}
    />

    <Animations />
    <Colors />
    <Fonts />
  </>
);

export default Theme;
