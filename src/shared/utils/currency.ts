export function formatCurrency(value?: number | null): string {
  const safe = Number(value) || 0
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(safe)
}

export function parseCurrency(value?: string | null): number {
  if (!value) return 0
  const cleaned = value.replace(/[^\d,]/g, '').replace(',', '.')
  return parseFloat(cleaned) || 0
}
