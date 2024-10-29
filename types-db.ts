export interface Categories {
    id: string,
    billboardId: string,
    billboardLabel: string,
    name: string,
}

export interface Sizes{
    id: string,
    value: string,
    name: string,
}

export interface Kitchen{
    id: string,
    value: string,
    name: string,
}

export interface Cuisines{
    id: string,
    value: string,
    name: string,
    }

export interface Product{
    id: string,
    name: string,
    price: number,
    qty?: number,
    images: { url: string }[],
    isFeatured: boolean,
    isArchived: boolean,
    category: string,
    size: string,
    kitchen: string,
    cuisine: string,
}

export interface Order {
    id: string,
    isPaid: boolean,
    phone: string,
    orderItems: Product[],
    address: string,
    orderStatus: string,
    
}