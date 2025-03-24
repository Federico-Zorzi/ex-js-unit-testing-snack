/* Snack 1 */
const getInitials = (name) =>
  name
    .split(/\s+/)
    .map((w) => w[0])
    .join("");

/* Snack 2 - 4 */
const createSlug2 = (str) => str.toLowerCase();

/* Snack 3 */
const average = (nums) =>
  nums.reduce((acc, curr) => acc + curr, 0) / nums.length;

/* Snack 4 - 6 - 10 */
const createSlug = (str, postList = []) => {
  if (!str.trim()) throw new Error("Il titolo è vuoto");
  let slug = str.toLowerCase().replace(/ /g, "-");

  if (postList.length > 0 && postList.some((p) => p.slug === slug)) {
    slug = `${slug}-1`;
  }

  return slug;
};

/* Snack 5 */
const isPalindrome = (str) => str === str.split("").reverse().join("");

/* Snack 6 */

/* Snack 7 */
const findPostById = (arr, id) => arr.find((p) => p.id === id);

/* Snack 8 - 9 */
const addPost = (postsList, newPost) => {
  if (postsList.some((p) => p.id === newPost.id))
    throw new Error("Id duplicato, non è possibile aggiungere il nuovo post");

  if (postsList.some((p) => p.slug === newPost.slug))
    throw new Error("Slug duplicato, non è possibile aggiungere il nuovo post");

  return [...postsList, newPost];
};

const removePost = (postsList, id) => {
  return postsList.filter((p) => p.id !== id);
};

module.exports = {
  getInitials,
  createSlug2,
  average,
  createSlug,
  isPalindrome,
  findPostById,
  addPost,
  removePost,
};
