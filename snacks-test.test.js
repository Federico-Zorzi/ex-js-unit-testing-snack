const {
  getInitials,
  createSlug,
  average,
  isPalindrome,
  findPostById,
  addPost,
  removePost,
} = require("./snacks-test");

let posts;
beforeEach(() => {
  posts = [
    {
      id: 1,
      title: "Introduzione a JavaScript",
    },
    {
      id: 2,
      title: "Guida a React per principianti",
    },
    {
      id: 3,
      title: "Node.js e Express: Creare un server",
    },
    {
      id: 4,
      title: "CSS Grid vs Flexbox: Quale usare?",
    },
    {
      id: 5,
      title: "Le migliori pratiche per il backend",
    },
  ].map((p) => ({ ...p, slug: createSlug(p.title) }));
});
afterEach(() => {
  posts = [];
});

describe("Manipolazione di stringhe", () => {
  /* Snack 1 */
  test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
    expect(getInitials("Federico Zorzi")).toBe("FZ");
    expect(getInitials("Paolo Rossi")).toBe("PR");
  });

  /* Snack 5 */
  test("La funzione isPalindrome verifica se una stringa è un palindromo.", () => {
    expect(isPalindrome("otto")).toBeTruthy();
  });
});

describe("Generatore slug", () => {
  /* Snack 2 */
  test("La funzione createSlug restituisce una stringa in lowercase.", () => {
    expect(createSlug("Stringa Di Prova")).toBe("stringa-di-prova");
  });

  /* Snack 4 */
  test("La funzione createSlug sostituisce gli spazi con -.", () => {
    expect(createSlug("Questo è un test")).toBe("questo-è-un-test");
  });

  /* Snack 6 */
  test("La funzione createSlug lancia un errore se il titolo è vuoto o non valido.", () => {
    expect(() => createSlug("")).toThrow();
    expect(() => createSlug("  ")).toThrow();
  });

  /* Snack 10 */
  test("Se viene passato un array di post come secondo argomento, la funzione createSlug incrementa di 1 se lo slug esiste già.", () => {
    expect(createSlug("Guida a React per principianti", posts)).toBe(
      "guida-a-react-per-principianti-1"
    );
  });
});

describe("Operazioni su array", () => {
  /* Snack 3 */
  test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
    expect(average([1, 2, 3, 4, 5])).toBe(3);
    expect(average([7, 8, 9, 10])).toBe(8.5);
  });

  /* Snack 7 */
  test("La funzione findPostById restituisce il post corretto dato l’array di post e l’id", () => {
    expect(findPostById(posts, 2)).toEqual({
      id: 2,
      title: "Guida a React per principianti",
      slug: "guida-a-react-per-principianti",
    });
    expect(findPostById(posts, 3)).toEqual({
      id: 3,
      title: "Node.js e Express: Creare un server",
      slug: "node.js-e-express:-creare-un-server",
    });
  });

  test("Ogni post ha le proprietà id, title e slug", () => {
    posts.forEach((post) => {
      expect(post).toHaveProperty("id");
      expect(post).toHaveProperty("title");
      expect(post).toHaveProperty("slug");
    });
  });

  /* Snack 8 */
  test("Dopo aver aggiunto un post con la funzione addPost, l'array posts deve contenere un elemento in più.", () => {
    expect(
      addPost(posts, {
        id: 6,
        title: "Nuovo post",
        slug: "nuovo-post",
      })
    ).toHaveLength(6);
  });

  test("Dopo aver rimosso un post con la funzione removePost, l'array posts deve contenere un elemento in meno.", () => {
    expect(removePost(posts, 5)).toHaveLength(4);
  });

  /* Snack 9 */
  test("Se si tenta di aggiungere un post con un id o uno slug già esistente, la funzione addPost deve lanciare un errore.", () => {
    expect(() =>
      addPost(posts, {
        id: 5,
        title: "Nuovo post",
        slug: "nuovo-post",
      })
    ).toThrow("L'id è già esistente");

    expect(() =>
      addPost(posts, {
        id: 8,
        title: "Nuovo post",
        slug: "introduzione-a-javascript",
      })
    ).toThrow("Lo slug è già esistente");
  });
});
