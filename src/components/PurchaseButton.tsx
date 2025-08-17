// import { useState } from "react";
// import { Button } from "@telegram-apps/telegram-ui";
// import { invoice } from "@telegram-apps/sdk-react";

// export function PurchaseButton() {
//   const [paymentStatus, setPaymentStatus] = useState<
//     "idle" | "pending" | "paid" | "failed"
//   >("idle");
//   const [error, setError] = useState<string | null>(null);
//   const [isLoading, setIsLoading] = useState(false);

// //   const invoice = await window.Telegram.WebApp.sendInvoice({
// //     title: "Test Invoice",
// //     description: "Demo payment",
// //     currency: "USD",
// //     prices: [{ label: "Test", amount: 100 }], // 1 USD
// //     payload: "test_payload",
// //   });

// //   // Подписка на статус
// //   window.Telegram.WebApp.onEvent("invoiceClosed", (status) => {
// //     console.log("Invoice status:", status); // "paid", "failed", "pending"
// //   });

// //   // Открытие интерфейса оплаты
// //   window.Telegram.WebApp.openInvoice(invoice);

//   const handlePurchase = async () => {
//     try {
//       setIsLoading(true);
//       setPaymentStatus("pending");
//       setError(null);

//       const status = await invoice.open("abIIks213");

//       setPaymentStatus(status);

//       if (status === "paid") {
//         console.log("Payment successful!", status);
//       } else {
//         console.log("Payment failed or canceled", status);
//       }
//     } catch (err) {
//       console.error("Payment error:", err);
//       setError("Failed to process payment");
//       setPaymentStatus("failed");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="flex flex-col gap-2">
//       <Button onClick={handlePurchase} disabled={isLoading}>
//         {isLoading ? "Processing..." : "Buy with Telegram Stars"}
//       </Button>

//       {paymentStatus === "paid" && (
//         <div className="text-green-500">Payment successful! Thank you!</div>
//       )}

//       {paymentStatus === "failed" && (
//         <div className="text-red-500">
//           {error || "Payment failed. Please try again."}
//         </div>
//       )}
//     </div>
//   );
// }
