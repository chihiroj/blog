export const dummyData = {
  async getAllArticles() {
    return [
      {
        id: "1",
        title: "Sample Article 1",
        description: "Short description for article one.",
        author: "John Doe",
        date: "2025-01-12",
        category: "animal",
        image: "https://placehold.co/600x400",
        featured: true
      },
      {
        id: "2",
        title: "Sample Article 2",
        description: "Short description for article two.",
        author: "Jane Doe",
        date: "2025-01-13",
        category: "lifestyle",
        image: "https://placehold.co/600x400",
        featured: true
      },
      {
        id: "3",
        title: "Sample Article 3",
        description: "Short description for article three.",
        author: "Mark Smith",
        date: "2025-01-14",
        category: "tech",
        image: "https://placehold.co/600x400",
        featured: false
      },
    ];
  },

  async getFeaturedArticles() {
    return [
      {
        id: "1",
        title: "Sample Article 1",
        description: "Short description for article one.",
        author: "John Doe",
        date: "2025-01-12",
        category: "animal",
        image: "https://placehold.co/600x400",
        featured: true
      },
      {
        id: "2",
        title: "Sample Article 2",
        description: "Short description for article two.",
        author: "Jane Doe",
        date: "2025-01-13",
        category: "lifestyle",
        image: "https://placehold.co/600x400",
        featured: true
      },
    ];
  },

  async getArticle(id) {
    const all = await this.getAllArticles()
    return all.find(a => a.id === id)
  },

  async login() {
    console.log("login");
  },

  async search(query) {
    return await this.getAllArticles();
  }
}