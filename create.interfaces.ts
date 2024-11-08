interface Author {
    authorID: number;
    name: string;
    biography?: string;
    birthDate: Date;
    nationality: string;
}

interface Genre {
    genreID: number;
    genreName: string;
}

interface Publisher {
    publisherID: number;
    publisherName: string;
    address?: string;
    city?: string;
    country?: string;
}

interface Book {
    bookID: number;
    title: string;
    description?: string;
    price: number;
    stock: number;
    genreID: number;
    authorID: number;
    publishedDate: Date;
    isbn: string;
    coverImage?: string;
}

interface Customer {
    customerID: number;
    name: string;
    email: string;
    phone?: string;
    address?: string;
    city?: string;
    country?: string;
}

interface Order {
    orderID: number;
    customerID: number;
    orderDate: Date;
    status: "Pending" | "Shipped" | "Delivered" | "Cancelled";
    totalAmount: number;
}

interface OrderDetail {
    orderDetailID: number;
    orderID: number;
    bookID: number;
    quantity: number;
    unitPrice: number;
}

interface Review {
    reviewID: number;
    bookID: number;
    customerID: number;
    rating: number;
    comment?: string;
    reviewDate: Date;
}

interface Promotion {
    promotionID: number;
    promotionName: string;
    discountPercentage: number;
    startDate: Date;
    endDate?: Date;
}

interface BookPromotion {
    bookID: number;
    promotionID: number;
}

interface BookPublisher {
    bookID: number;
    publisherID: number;
}
