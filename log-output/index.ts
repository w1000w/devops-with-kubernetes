import { v4 as uuidv4 } from "uuid";

function generateRandomString() {
  const randomString = uuidv4();
  console.log(randomString);
  setInterval(() => {
    console.log(randomString);
  }, 5000);
}

generateRandomString();

// Test
