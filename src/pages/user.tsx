import Head from "next/head";

import { NavBar, FormInputText } from "@/components";

import { ChangeEvent, FormEvent, useState } from "react";

import styles from "@/styles/User.module.css";

export default function User() {
  interface character {
    first: string | null;
    middle: string | null;
    last: string | null;
    full: string | null;
    native: string | null;
    userPreferred: string | null;
  }

  const [characterIds, setCharacterIds] = useState<string[]>([]);
  const [characters, setCharacters] = useState<character[]>([]);
  const [formInputTextValue, setFormInputTextValue] = useState("");

  const aniListUrl: string = "https://graphql.anilist.co";

  const fetchUserFavouriteCharacterIds = async (name: string) => {
    setCharacterIds([]);

    const queryUserFavouriteCharacterIds: string = `
    query ($name: String) {
      User(name: $name) {
        favourites {
          characters {
            nodes {
              id
            }
          }
        }
      }
    } 
    `;

    const variables: { name: string } = {
      name: name,
    };

    interface options {
      method: string;
      headers: { "Content-Type": string; Accept: string };
      body: string;
    }

    const options: options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: queryUserFavouriteCharacterIds,
        variables: variables,
      }),
    };

    try {
      const response = await fetch(aniListUrl, options);
      const data = await response.json();

      if (data.data.User !== null) {
        const nodes = data.data.User.favourites.characters.nodes;
        const idArray: string[] = [];
        nodes.forEach((node: { id: string }) => {
          idArray.push(node.id);
        });

        setCharacterIds(idArray);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const fetchCharacter = async (id: number) => {
    setCharacters([]);

    const queryCharacter: string = `
    query ($id: Int) {
      Character(id: $id) {
        name {
          first
          middle
          last
          full
          native
          userPreferred
        }
      }
    }
    `;

    const variables: { id: number } = {
      id: id,
    };

    const options: {
      method: string;
      headers: { "Content-Type": string; Accept: string };
      body: string;
    } = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: queryCharacter,
        variables: variables,
      }),
    };

    try {
      const response = await fetch(aniListUrl, options);
      const data = await response.json();
      setCharacters((prevCharacters: character[]) => {
        return [...prevCharacters, data.data.Character.name];
      });
    } catch (e) {
      console.log(e);
    }
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetchUserFavouriteCharacterIds(formInputTextValue);
    characterIds.forEach((id) => {
      fetchCharacter(parseInt(id));
    });
    console.log(characters);
  };

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setFormInputTextValue(event.target.value);
  };

  return (
    <>
      <Head>
        <title>Review Charter - User</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <main className={styles["user"]}>
        <FormInputText
          labelText="Enter username:"
          inputValue={formInputTextValue}
          submitHandler={submitHandler}
          changeHandler={changeHandler}
        />
        <h1>Characters</h1>
        {characters.map((item, index) => {
          return (
            <div key={index}>
              <h2>Character</h2>
              <ul>
                <li>First: {item.first}</li>
                <li>Last: {item.last}</li>
                <li>Middle: {item.middle}</li>
                <li>Full: {item.full}</li>
                <li>User preferred: {item.userPreferred}</li>
                <li>Native: {item.native}</li>
              </ul>
            </div>
          );
        })}
      </main>
    </>
  );
}
