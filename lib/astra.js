const { createClient } = require("@astrajs/rest");

let astraClient = null;
const getAstraClient = async () => {
  if (astraClient === null) {
    astraClient = await createClient(
      {
        astraDatabaseId: process.env.ASTRA_DB_ID,
        astraDatabaseRegion: process.env.ASTRA_DB_REGION,
        applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
      },
      30000
    );
  }
  return astraClient;
};

export const getArtist = async () => {
  const client = await getAstraClient();
  const { status, data } = await client.post(
    `/api/graphql/${process.env.ASTRA_DB_KEYSPACE}`,
    {
      query: `query getArtist {
        nextjs_characters {
          values {
            id
            Artist_name
            Address
            Experience
            specialAbility
          }
        }
      }`,
    }
  );


export const getCharacters = async () => {
  const client = await getAstraClient();
  const { status, data } = await client.post(
    `/api/graphql/${process.env.ASTRA_DB_KEYSPACE}`,
    {
      query: `query getCharacters {
        nextjs_characters {
          values {
            id
            actor_name
            house_name
            name
            royal
          }
        }
      }`,
    }
  );
  
  export const getHeros = async () => {
  const client = await getAstraClient();
  const { status, data } = await client.post(
    `/api/graphql/${process.env.ASTRA_DB_KEYSPACE}`,
    {
      query: `query getCharacters {
        nextjs_characters {
          values {
            id
            Hero_name
            Address_name
            power
            specialAbility
          }
        }
      }`,
    }
  );
  
  export const getToons = async () => {
  const client = await getAstraClient();
  const { status, data } = await client.post(
    `/api/graphql/${process.env.ASTRA_DB_KEYSPACE}`,
    {
      query: `query getCharacters {
        nextjs_characters {
          values {
            id
            Cartoon_name
            house_name
            type
            rich
          }
        }
      }`,
    }
  );
  if (status === 404) {
    throw new Error("Astra GraphQL endpoint is invalid");
  }
  return data && data.nextjs_characters && data.nextjs_characters.values;
};
