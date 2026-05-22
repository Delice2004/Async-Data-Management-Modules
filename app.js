// app.js

import { fetchPosts } from "./api.js";
import saveToLocal from "./storage.js";

async function initApp() {
  const posts = await fetchPosts();


  const firstFive = posts.slice(0, 5);

  console.log("=== FIRST 5 POSTS ===");

  firstFive.forEach((post, index) => {
    console.log(`\nPost ${index + 1}`);
    console.log("Title:", post.title);
    console.log("Body:", post.body);
  });

  await saveToLocal(firstFive);
}

initApp();