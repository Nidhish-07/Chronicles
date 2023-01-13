"use client";

import React, { FormEvent } from "react";
import { useRouter } from "next/navigation";

type Props = {};

const Search = (props: Props) => {
  const [input, setInput] = React.useState("");

  const router = useRouter();

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!input) {
      return;
    }

    router.push(`/search/?term=${input}`);
  };
  return (
    <form
      className="max-w-6xl mx-auto flex item-center justify-between"
      onSubmit={(event) => submitHandler(event)}
    >
      <input
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
        placeholder="Search"
        className="flex-1 w-full h-14 rounded placeholder-zinc-500 text-gray-500 outline-none bg-transparent dark:text-orange-500"
      />
      <button
        disabled={!input}
        className="text-orange-400 disabled:text-gray-400"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
