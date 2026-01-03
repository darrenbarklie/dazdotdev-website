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

export function generateCategoryData(categories: any) {
  let categoryData: Category[] = [];
  categories.forEach((category: string) => {
    categoryData.push({
      name: category,
      slug: generateSlug(category),
    });
  });
  return categoryData;
}
