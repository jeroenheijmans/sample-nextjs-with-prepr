import AuthorLink from "@/components/AuthorLink";
import { GetPersons } from "@/queries/get-persons";
import getClient from "@/services/apollo-client";

async function getData() {
  const { data } = await getClient().query({
    query: GetPersons,
  });

  return data.Persons;
}

export default async function ArticlesPage() {
  const persons = await getData();

  return (
    <main className="w-full pb-8">
      <div className="page-content">
        <article className="prose">
          <h1>Authors overview</h1>
          <p className="lead">All the people with work in our database</p>
          <p>
            A list of made-up people, inspired by great authors from the past.
            Most of them have written poems and stories published on the site as
            Articles.
          </p>
        </article>
        <div className="flex flex-row gap-4 mt-8">
          {persons.items.map((person: any) => (
            <AuthorLink key={person._slug} {...person} />
          ))}
        </div>
      </div>
    </main>
  );
}
