import { Product } from '@/types-db';
import qs from 'query-string';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
    size?: string;
    isFeatured?: boolean;
    cuisine?: string;
    category?: string;
    kitchen?: string;
}

const getProducts = async (query: Query): Promise<Product[]> => {
    const url = qs.stringifyUrl({
        url: URL,
        query: {
            size: query.size,
            isFeatured: query.isFeatured,
            category: query.category,
            cuisine: query.cuisine,
            kitchen: query.kitchen,
        },
    });
    const res = await fetch(url);

    return res.json();
};

export default getProducts;