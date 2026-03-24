export const formatAmountToCentavos = (phpAmount: number): number => {
  return Math.round(phpAmount * 100);
};

export const formatCentavosToPhp = (centavos: number): string => {
  return '₱' + (centavos / 100).toLocaleString('en-PH', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export const getPaymentMethodLabel = (method: string): string => {
  const labels: Record<string, string> = {
    gcash: 'GCash',
    card: 'Credit/Debit Card',
    paymaya: 'PayMaya',
    dob: 'Online Banking',
    dob_ubp: 'UnionBank Online',
  };
  return labels[method] || method;
};
