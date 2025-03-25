/* Snack 1 */
const getInitials = (name) =>
  name
    .split(/\s+/)
    .filter((w) => w !== "")
    .map((w) => w[0].toUpperCase())
    .join("");

/* Snack 2 - 4 - 6 - 10 */
const createSlug = (str, postList = []) => {
  if (!str.trim()) throw new Error("Il titolo è vuoto");
  let slug = str.toLowerCase().replace(/ /g, "-");

  if (postList.length > 0 && postList.some((p) => p.slug === slug)) {
    slug = `${slug}-1`;
  }

  return slug;
};

/* Snack 3 */
const average = (nums) => {
  nums.forEach((n) => {
    if (isNaN(n)) throw new Error("Avarage vuole solo numeri");
  });

  return nums.reduce((acc, curr) => acc + curr, 0) / nums.length;
};

/* Snack 5 */
const isPalindrome = (str) => str === str.split("").reverse().join("");

/* Snack 7 */
const findPostById = (posts, id) => {
  if (isNaN(id)) throw new Error(`L'id ${id} non è valido`);

  posts.forEach((p) => {
    if (p.id === undefined || p.title === undefined || p.slug === undefined)
      throw new Error(`L'id ${id} non è valido`);
  });

  return posts.find((p) => p.id === id);
};

/* Snack 8 - 9 */
const addPost = (postsList, newPost) => {
  if (postsList.some((p) => p.id === newPost.id))
    throw new Error("L'id è già esistente");

  if (postsList.some((p) => p.slug === newPost.slug))
    throw new Error("Lo slug è già esistente");

  return [...postsList, newPost];
};

const removePost = (postsList, id) => {
  return postsList.filter((p) => p.id !== id);
};

module.exports = {
  getInitials,
  average,
  createSlug,
  isPalindrome,
  findPostById,
  addPost,
  removePost,
};
