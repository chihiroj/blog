export const dummyData = {
  async getAllArticles() {
    return [
      {
        slug: "sample-article-1",
        title: "Sample Article 1",
        description: "Short description for article one.",
        author: "John Doe",
        date: "2025-01-12",
        categories: ["animal", "life"],
        image: "https://placehold.co/600x400",
        featured: true
      },
      {
        slug: "sample-article-2",
        title: "Sample Article 2",
        description: "Short description for article two.",
        author: "Jane Doe",
        date: "2025-01-13",
        categories: ["animal", "life"],
        image: "https://placehold.co/600x400",
        featured: true
      },
      {
        slug: "sample-article-3",
        title: "Sample Article 3",
        description: "Short description for article three.",
        author: "Mark Smith",
        date: "2025-01-14",
        categories: ["animal", "life"],
        image: "https://placehold.co/600x400",
        featured: false
      },
    ];
  },

  async getFeaturedArticles() {
    return [
      {
        slug: "sample-article-1",
        title: "Sample Article 1",
        description: "Short description for article one.",
        author: "John Doe",
        date: "2025-01-12",
        categories: ["animal", "life"],
        image: "https://placehold.co/600x400",
        featured: true
      },
      {
        slug: "sample-article-2",
        title: "Sample Article 2",
        description: "Short description for article two.",
        author: "Jane Doe",
        date: "2025-01-13",
        categories: ["animal", "life"],
        image: "https://placehold.co/600x400",
        featured: true
      },
    ];
  },

  async getArticle(slug) {
    const all = await this.getAllArticles()
    return all.find(a => a.slug === slug)
  },

  async login() {
    console.log("login");
  },

  async search(query) {
    return await this.getAllArticles();
  }
}