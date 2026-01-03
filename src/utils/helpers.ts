export function generateSlug(string: string) {
  return string
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

interface Category {
  name: string;
  slug: string;
}

export function generateCategoryData(categories: string[]) {
  const categoryData: Category[] = [];
  categories.forEach((category) => {
    categoryData.push({
      name: category,
      slug: generateSlug(category),
    });
  });
  return categoryData;
}
