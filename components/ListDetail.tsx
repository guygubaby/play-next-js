import React from "react";
import { User } from "../interfaces/user";

type Props = {
  item: User;
};

function getImageUrl(person: { imageId: string }) {
  return "https://i.imgur.com/" + person.imageId + "s.jpg";
}

export default function ListDetail({ item }: Props) {
  return (
    <div>
      <li key={item.id} className="flex flex-row mb-4">
        <img className="w-32 h-32" src={getImageUrl(item)} alt={item.name} />
        <div className="ml-8">
          <b className="cursor-pointer">{item.name}:</b>
          <span className="mx-4">{item.profession}</span>
          <p>known for {item.accomplishment}</p>
        </div>
      </li>
    </div>
  );
}
