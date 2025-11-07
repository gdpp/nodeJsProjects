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

async function testRedisConnection() {
  try {
    await client.connect();
    console.log("REDIS Connected successfully");

    await client.set("key", "value");
    await client.set("name", "gustavo");
    await client.set("last_name", "perez");

    const extractedValue = await client.get("name");
    console.log(extractedValue);

    const deleteCount = await client.del("last_name");
    console.log(deleteCount);

    await client.set("count", "100");
    const incrementCount = await client.incr("count");
    console.log(incrementCount);

    const decrementCount = await client.decr("count");
    console.log(decrementCount);
  } catch (error) {
    console.log(error);
  } finally {
    await client.quit();
  }
}

testRedisConnection();
