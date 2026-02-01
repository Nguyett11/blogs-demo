"use client";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Link from "next/link";

function AppHeader() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Link href="/" className="navbar-brand">
            HoiDanIT
          </Link>
          <Nav className="me-auto">
            <Link href="/blogs" className="nav-link">
              Blogs
            </Link>
            {/* <Link href="/youtube" className="nav-link">Youtube</Link>
                        <Link href="/tiktok" className="nav-link">Tiktok</Link> */}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default AppHeader;
