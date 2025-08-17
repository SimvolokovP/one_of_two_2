// import { useEffect, useState } from "react";

// export type PaymentStatus =
//   | "idle"
//   | "creating"
//   | "created"
//   | "processing"
//   | "success"
//   | "failed"
//   | "error";

// export interface CreateInvoiceParams {
//   title: string;
//   description: string;
//   currency?: string;
//   prices: { label: string; amount: number }[];
//   payload?: string;
//   photoUrl?: string;
//   needName?: boolean;
//   needPhoneNumber?: boolean;
//   needEmail?: boolean;
//   needShippingAddress?: boolean;
//   isFlexible?: boolean;
// }

// export interface Invoice {
//   invoice_id: string;
// }

// export function useTelegramStarsPayment() {
//   const [invoice, setInvoice] = useState<Invoice | null>(null);
//   const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>("idle");
//   const [error, setError] = useState<string | null>(null);
//   const [isLoading, setIsLoading] = useState(false);

//   const createInvoice = async (params: CreateInvoiceParams) => {
//     if (!window.Telegram?.WebApp) {
//       setError("Telegram WebApp is not available");
//       return null;
//     }

//     setIsLoading(true);
//     setError(null);
//     setPaymentStatus("creating");

//     try {
//       const result = await window.Telegram.WebApp.sendInvoice({
//         title: params.title,
//         description: params.description,
//         currency: params.currency || "USD",
//         prices: params.prices,
//         payload: params.payload || crypto.randomUUID(),
//         photo_url: params.photoUrl,
//         need_name: params.needName || false,
//         need_phone_number: params.needPhoneNumber || false,
//         need_email: params.needEmail || false,
//         need_shipping_address: params.needShippingAddress || false,
//         is_flexible: params.isFlexible || false,
//       });

//       setInvoice(result);
//       setPaymentStatus("created");
//       return result;
//     } catch (error) {
//       console.error("Failed to create invoice:", error);
//       setError("Failed to create payment invoice");
//       setPaymentStatus("error");
//       return null;
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const processPayment = () => {
//     if (!invoice) {
//       setError("No invoice created");
//       return;
//     }

//     setPaymentStatus("processing");
//     window.Telegram.WebApp.onEvent("invoiceClosed", (status) => {
//       setPaymentStatus(status === "paid" ? "success" : "failed");
//     });

//     window.Telegram.WebApp.openInvoice(invoice);
//   };

//   useEffect(() => {
//     return () => {
//       window.Telegram?.WebApp?.offEvent("invoiceClosed");
//     };
//   }, []);

//   return {
//     createInvoice,
//     processPayment,
//     invoice,
//     paymentStatus,
//     isLoading,
//     error,
//     reset: () => {
//       setInvoice(null);
//       setPaymentStatus("idle");
//       setError(null);
//     },
//   };
// }
