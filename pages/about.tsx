import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";

export default function about() {
  return (
    <Layout title="About page">
      <h1>This is about page</h1>
      <Link href="/">
        <a>go home</a>
      </Link>
    </Layout>
  );
}
