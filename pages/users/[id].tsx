import React from "react";
import Layout from "../../components/Layout";
import ListDetail from "../../components/ListDetail";
import { User } from "../../interfaces/user";

type Props = {
  item?: User;
  errors?: string;
};

export default function UserDetail({ errors, item }: Props) {
  if (errors) {
    return (
      <Layout title="Error | Next.js + TypeScript Example">
        <p>
          <span style={{ color: "red" }}>Error:</span> {errors}
        </p>
      </Layout>
    );
  }

  return (
    <Layout
      title={`${
        item ? item.name : "User Detail"
      } | Next.js + TypeScript Example`}
    >
      {item && <ListDetail item={item} />}
    </Layout>
  );
}
