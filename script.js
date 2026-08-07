/**
 * Обновляет отображение текущего времени, даты и года на странице.
 *
 * Получает текущее системное время и обновляет три DOM-элемента:
 * - #clock — время в формате HH:MM:SS
 * - #date — полная дата в российской локали (например, "7 августа 2026 г.")
 * - #year — текущий год
 *
 * @function
 * @returns {void}
 * @throws {Error} Если элементы с ID 'clock', 'date' или 'year' не найдены в DOM.
 */
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = timeString;

    const dateFormatter = new Intl.DateTimeFormat('ru-RU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const dateString = dateFormatter.format(now);
    document.getElementById('date').textContent = dateString;

    document.getElementById('year').textContent = now.getFullYear();
}

updateClock();
setInterval(updateClock, 1000);
