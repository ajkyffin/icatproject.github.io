import React from "react";
import { Link } from "gatsby";
import { css } from "@emotion/core";
import RecentMeetings from "./recentMeetings";
import Searchbar from "./searchbar";

export const linkStyle = css`
  text-decoration: none;
  color: white;
  &:hover {
    color: green;
  }
`;

export const liStyle = css`
  margin-bottom: 5px;
`;

export const ulStyle = css`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 11px;
`;

export const Sidebar = () => (
  <div
    css={css`
      background-color: black;
      color: white;
      width: 175px;
      float: left;
      margin-top: 2rem;
      margin-bottom: -100%;
      min-height: 100vh;
      position: fixed;
      z-index: 3;
      padding-left: 10px;
      @media only screen and (max-width: 600px) {
        display: none;
      }
    `}
  >
    <h5>Search</h5>
    <Searchbar />
    <RecentMeetings />
    <h5>Links</h5>
    <ul
      css={css`
        ${ulStyle}
      `}
    >
      <li
        css={css`
          ${liStyle}
        `}
      >
        <a
          css={css`
            ${linkStyle}
          `}
          href="http://groups.google.com/group/icatgroup"
        >
          icatgroup
        </a>
      </li>
      <li
        css={css`
          ${liStyle}
        `}
      >
        <a
          css={css`
            ${linkStyle}
          `}
          href="https://repo.icatproject.org/"
        >
          repo.icatproject.org
        </a>
      </li>
      <li
        css={css`
          ${liStyle}
        `}
      >
        <Link
          to="/useful-links"
          css={css`
            ${linkStyle}
          `}
        >
          Useful Links
        </Link>
      </li>
      <li
        css={css`
          ${liStyle}
        `}
      >
        <a
          css={css`
            ${linkStyle}
          `}
          href="https://waffle.io/icatproject/icat.server"
        >
          Waffle.io dashboard
        </a>
      </li>
      <li
        css={css`
          ${liStyle}
        `}
      >
        <a
          css={css`
            ${linkStyle}
          `}
          href="https://github.com/icatproject"
        >
          Github for icatproject
        </a>
      </li>
      <li
        css={css`
          ${liStyle}
        `}
      >
        <a
          css={css`
            ${linkStyle}
          `}
          href="https://github.com/icatproject-contrib"
        >
          Github for icatproject-contrib
        </a>
      </li>
    </ul>
  </div>
);