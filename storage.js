// storage.js

async function saveToLocal(data) {
  try {
    localStorage.setItem("userPosts", JSON.stringify(data));
    console.log("Saved to Local Storage successfully ✔");
  } catch (err) {
    console.error("Storage error:", err);
  }
}

export default saveToLocal;