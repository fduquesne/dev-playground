import Form from "next/form";

export default function SearchForm() {
  return (
    <Form action="/search">
      <input
        className="w-75 h-10 mr-2 px-3 border rounded-md border-neutral-400"
        type="search"
        id="q"
        name="q"
        placeholder="Titre, auteur, ..."
      />
      <button
        className="h-10 px-3 rounded-md bg-blue-400 text-neutral-950 cursor-pointer"
        type="submit"
      >
        Rechercher
      </button>
    </Form>
  );
}
