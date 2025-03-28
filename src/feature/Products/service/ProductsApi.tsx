


const fetchProducts = async (limit:number=5) => {
    const response = await fetch(`https://fakestoreapi.com/products?limit=${limit}`);
    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }
    const data = await response.json();
    return data;
}
const fetchCategories = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/categories`);
    if (!response.ok) {
        throw new Error('Failed to fetch categories');
    }
    const data = await response.json();
    return data;
}
const fetchProductByCategory = async (category: string, limit:number= 5) =>  {
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}?limit=${limit}`);
    if (!response.ok) {
        throw new Error('Failed to fetch products by category');
    }
    const data = await response.json();
    return data;
}
const fetchProductById = async (id: number) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch product by ID');
    }
    const data = await response.json();
    return data;
}
export { fetchProducts, fetchCategories, fetchProductByCategory, fetchProductById };