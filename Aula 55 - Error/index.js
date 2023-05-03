try {
  throw new Error("Deu um problema no código");
} catch (e) {
  console.log(e.name + ": " + e.message);
}
