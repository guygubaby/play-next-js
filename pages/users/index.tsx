import React from "react";
import Layout from "../../components/Layout";
import useSWR from "swr";
import Link from "next/link";
import { User } from "../../interfaces/user";

function getImageUrl(person: { imageId: string }) {
  return "https://i.imgur.com/" + person.imageId + "s.jpg";
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function index() {
  const { data: people, error } = useSWR("/api/user", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!people) return <div>Loading...</div>;

  const peopleList = people.map((person: User) => (
    <Link href={`/users/${person.id}`} key={person.id}>
      <li className="flex flex-row mb-4">
        <img
          className="w-32 h-32"
          src={getImageUrl(person)}
          alt={person.name}
        />
        <div className="ml-8">
          <b className="cursor-pointer">{person.name}:</b>
          <span className="mx-4">{person.profession}</span>
          <p>known for {person.accomplishment}</p>
        </div>
      </li>
    </Link>
  ));

  return (
    <Layout title="User page">
      <article className="p-6">
        <h1 className="mb-4">Sientist: </h1>
        <ul>{peopleList}</ul>
      </article>
    </Layout>
  );
}
