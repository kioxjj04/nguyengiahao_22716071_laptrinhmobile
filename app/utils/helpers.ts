export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(amount);
};

export const formatDate = (date: Date = new Date()): string => {
  return new Intl.DateTimeFormat('vi-VN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
};

export const calculateSubtotal = (price: number, quantity: number): number => {
  return price * quantity;
};

export const calculateVAT = (amount: number, rate: number = 0.1): number => {
  return amount * rate;
};