"use client";

import { usePosts } from "@/app/blog/contexts/PostContext";
import { useState } from "react";

export const PostsSearchBar = () => {
  const { setPosts, posts }: any = usePosts();
  const [searchInput, setSearchInput] = useState("");

  const handleCleanSearch = async (evt: any) => {
    evt.preventDefault();
    const searchUrl = "https://institucional.conasems.simoa.dev/noticias/";

    try {
      const response = await fetch(searchUrl);
      const data = await response.json();
      setPosts(data);
      setSearchInput("");
    } catch (error) {
      console.error("Erro na busca: ", error);
    }
  };

  const handleSearchInput = async (evt: any) => {
    evt.preventDefault();

    const searchUrl = `https://institucional.conasems.simoa.dev/noticias/?q=${encodeURIComponent(
      searchInput
    )}`;

    try {
      const response = await fetch(searchUrl);
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Erro na busca: ", error);
    }
  };

  return (
    <>
      <form className="pb-10 pt-5" onSubmit={handleSearchInput}>
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
          Search
        </label>
        <div className="relative">
          <input
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
            type="search"
            id="default-search"
            className="block w-full py-4 ps-5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search posts..."
          />
          <button
            type="submit"
            className="text-white absolute end-5 bottom-2.5 bg-[#1A1A1A] hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 "
          >
            Search
          </button>
        </div>
        {searchInput.length > 0 && (
          <button
            className="pt-3 pl-1 underline text-white underline-offset-2 cursor-pointer"
            onClick={handleCleanSearch}
          >
            Limpar pesquisa
          </button>
        )}
      </form>
    </>
  );
};
