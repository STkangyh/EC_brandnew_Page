import React from 'react';
import { Github, Slack, Instagram } from 'react-bootstrap-icons';
import styles from './Footer.module.css';
import Link from 'next/link';

function Footer() {
  return (
    <div className="container my-5">
      <footer className="bg-light text-center text-white">
        <div className="container p-4 pb-0" style={{ backgroundColor: '#f1f1f1' }}>
          <section className="mb-4">
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://misty-wildcat-563.notion.site/Endless-Creation-34-8c608f05fa4941b38e9222bab05067cc"
              role="button"
              data-mdb-ripple-color="dark"
            >
              notion
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://endlesscreation.slack.com"
              role="button"
              data-mdb-ripple-init
            >
              <Slack />
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://github.com/Endless-Creation-Official"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <Github />
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://www.instagram.com/endless__creation?igsh=d3N4NHJoa3hiYm9o"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <Instagram />
            </a>
          </section>
        </div>
        <div className="text-center text-dark p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          Copyright ⓒ Endless Creation 2024
        </div>
      </footer >
    </div >
  );
}

export default Footer;