import { createClient } from "redis";

const client = createClient({
  socket: {
    host: "localhost",
    port: 6379,
  },
});

// Event listener
client.on("Error: ", (error) =>
  console.log("REDIS client error occured!", error)
);

async function redisDataStructures() {
  try {
    // Strings -> SET, GET, MSET, MGET
    await client.set("user:name", "Gustavo");
    const name = await client.get("user:name");
    console.log(name);

    await client.mSet([
      "user:email",
      "gdpp@dev.com",
      "user:age",
      "33",
      "user:country",
      "Mexico",
    ]);
    const [email, age, country] = await client.mGet([
      "user:email",
      "user:age",
      "user:conutry",
    ]);
    console.log(email);
    console.log(age);
    console.log(country);

    // Lists -> LPUSH RPUSH, LRANGE, LPOP, RPOP

    await client.lPush("notes", ["note 1", "note 2", "note 3"]);
    const extractAllNotes = await client.lRange("notes", 0, -1);
    console.log(extractAllNotes);
  } catch (error) {
    console.log(error);
  } finally {
    client.quit();
  }
}

redisDataStructures();
