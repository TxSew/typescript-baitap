//Bài tập 1: Tính Toán Tổng Tiền của Đơn Hàng
//Yêu cầu: Viết một hàm calculateTotalOrderAmount nhận vào danh sách OrderDetail của một đơn hàng và trả về tổng số tiền của đơn hàng đó.

function calculateTotalOrderAmount(orderDetails: OrderDetail[]): number {
    return orderDetails.reduce((total, detail) => total + detail.quantity * detail.unitPrice, 0);
}

// Test
const orderDetails: OrderDetail[] = [
    { orderDetailID: 1, orderID: 1, bookID: 1, quantity: 2, unitPrice: 15.99 },
    { orderDetailID: 2, orderID: 1, bookID: 2, quantity: 1, unitPrice: 25.99 }
];
console.log(calculateTotalOrderAmount(orderDetails)); // Output: 57.97


//Bài tập 2: Lọc Sách Theo Giá và Thể Loại
//Yêu cầu: Viết một hàm filterBooks cho phép lọc sách dựa trên giá tối thiểu, giá tối đa và genreID. Nếu các giá trị này không được cung cấp, bỏ qua điều kiện lọc tương ứng.

function filterBooks(minPrice?: number, maxPrice?: number, genreID?: number): Book[] {
    return books.filter(book => {
        const priceMatch = (minPrice === undefined || book.price >= minPrice) &&
                           (maxPrice === undefined || book.price <= maxPrice);
        const genreMatch = (genreID === undefined || book.genreID === genreID);
        return priceMatch && genreMatch;
    });
}

// Test
const book1: Book = { bookID: 2, title: "JavaScript Essentials", price: 20, stock: 5, genreID: 2, authorID: 1, publishedDate: new Date("2021-01-01"), isbn: "2345678901234" };
const book2: Book = { bookID: 3, title: "Advanced TypeScript", price: 35, stock: 2, genreID: 1, authorID: 2, publishedDate: new Date("2022-01-01"), isbn: "3456789012345" };
books.push(book1, book2);

console.log(filterBooks(10, 30, 2)); // should return book1
//Bài tập 3: Tìm Khách Hàng Theo Tên hoặc Email
//Yêu cầu: Viết một hàm findCustomer để tìm khách hàng dựa trên tên hoặc email. Nếu tìm thấy, trả về thông tin khách hàng, ngược lại trả về null.
let customers: Customer[] = [
    { customerID: 1, name: "Alice", email: "alice@example.com", country: "USA" },
    { customerID: 2, name: "Bob", email: "bob@example.com", country: "Canada" },
];

function findCustomer(search: string): Customer | null {
    return customers.find(customer => customer.name === search || customer.email === search) || null;
}

// Test
console.log(findCustomer("Alice")); // should return customer with name Alice
console.log(findCustomer("bob@example.com")); // should return customer with email bob@example.com
console.log(findCustomer("unknown")); // should return null
