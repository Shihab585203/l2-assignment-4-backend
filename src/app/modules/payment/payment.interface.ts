export interface TPaymentData {
    name: string;
    email: string;
    price: number;
    phone: string;
    transactionId: string;
    date: Date;
    cartIds: string[];
    status: 'pending' | 'completed' | "failed",
    paymentMethod: string;
}