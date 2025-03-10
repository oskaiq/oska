// script.js
function convertCurrency() {
    const amount = document.getElementById("amount").value;
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;

    // إذا كانت الحقول فارغة
    if (!amount || amount <= 0) {
        alert("يرجى إدخال مبلغ صحيح.");
        return;
    }

    // أسعار الصرف الثابتة (للتمثيل فقط)
    const rates = {
        USD: { EUR: 0.85, EGP: 30.9, GBP: 0.75, JPY: 135.5, CHF: 0.92, IQD: 1450 },
        EUR: { USD: 1.18, EGP: 36.5, GBP: 0.88, JPY: 160.5, CHF: 1.08, IQD: 1700 },
        EGP: { USD: 0.032, EUR: 0.027, GBP: 0.024, JPY: 4.4, CHF: 0.029, IQD: 47 },
        GBP: { USD: 1.33, EUR: 1.14, EGP: 41.5, JPY: 182.3, CHF: 1.22, IQD: 2300 },
        JPY: { USD: 0.0074, EUR: 0.0062, EGP: 0.23, GBP: 0.0055, CHF: 0.0067, IQD: 12 },
        CHF: { USD: 1.09, EUR: 0.93, EGP: 34.5, GBP: 0.82, JPY: 149.5, IQD: 1580 },
        IQD: { USD: 0.00069, EUR: 0.00059, EGP: 0.021, GBP: 0.00043, JPY: 0.083, CHF: 0.00063 }
    };

    // إذا كانت نفس العملة (لا حاجة للتحويل)
    if (fromCurrency === toCurrency) {
        document.getElementById("output").innerText = `النتيجة: ${amount} ${fromCurrency}`;
        return;
    }

    // حساب المبلغ المحول
    const conversionRate = rates[fromCurrency][toCurrency];
    const convertedAmount = (amount * conversionRate).toFixed(2);

    document.getElementById("output").innerText = `النتيجة: ${convertedAmount} ${toCurrency}`;
}
