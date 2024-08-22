const units = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
const teens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
const tens = ['Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
const thousands = ['Thousand', 'Million', 'Billion'];

function convertNumberToWords(num) {
  if (num === 0) return 'Zero';
  
  if (num < 10) return units[num];
  if (num < 20) return teens[num - 10];
  if (num < 100) return `${tens[Math.floor(num / 10) - 2]} ${num % 10 !== 0 ? units[num % 10] : ''}`.trim();
  
  if (num < 1000) return `${convertNumberToWords(Math.floor(num / 100))} Hundred ${num % 100 !== 0 ? convertNumberToWords(num % 100) : ''}`.trim();

  for (let i = 0, p = 1000; i < thousands.length; i++, p *= 1000) {
    if (num < p * 1000) {
      return `${convertNumberToWords(Math.floor(num / p))} ${thousands[i]} ${num % p !== 0 ? convertNumberToWords(num % p) : ''}`.trim();
    }
  }
}

export { convertNumberToWords };
