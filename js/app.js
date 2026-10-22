console.log("CITYMUSIC App is running!")
// Чекаємо, поки весь HTML завантажиться
document.addEventListener('DOMContentLoaded', () => {
    console.log("CITYMUSIC App is running! 🎸");

    // 1. ІНТЕРАКТИВНІ ЧІПСИ (Фільтри в Новинках)
    const catBtns = document.querySelectorAll('.cat-btn');
    catBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Знімаємо клас active з усіх кнопок
            catBtns.forEach(b => b.classList.remove('active'));
            // Додаємо клас active тільки тій, на яку клікнули
            btn.classList.add('active');
        });
    });

    // 2. КЛІКАБЕЛЬНІ СЕРДЕЧКА (Додавання в обране)
    const likeBtns = document.querySelectorAll('.like-btn');
    likeBtns.forEach(btn => {
        btn.addEventListener('click', (event) => {
            event.preventDefault(); // Щоб сторінка не стрибала вгору
            // Додаємо або забираємо клас 'active-heart'
            btn.classList.toggle('active-heart');
        });
    });

    // 3. ЗМІНА КІЛЬКОСТІ ТОВАРІВ У КОШИКУ (+ та -)
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const minusBtn = counter.querySelector('.counter-btn:not(.plus)');
        const plusBtn = counter.querySelector('.plus');
        const countSpan = counter.querySelector('.count');

        if(minusBtn && plusBtn && countSpan) {
            // Клік на мінус
            minusBtn.addEventListener('click', () => {
                let currentCount = parseInt(countSpan.textContent);
                if (currentCount > 1) { // Не даємо зробити менше 1
                    countSpan.textContent = currentCount - 1;
                }
            });

            // Клік на плюс
            plusBtn.addEventListener('click', () => {
                let currentCount = parseInt(countSpan.textContent);
                countSpan.textContent = currentCount + 1;
            });
        }
    });

    // 4. БОНУСНА ФІЧА: Спливаюче повідомлення при оформленні замовлення
    const checkoutBtn = document.querySelector('.checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            // Змінюємо текст кнопки для ефекту завантаження
            const originalText = checkoutBtn.textContent;
            checkoutBtn.textContent = "Обробка...";
            checkoutBtn.style.backgroundColor = "#333"; // Тимчасово робимо сірою
            
            // Через 1 секунду показуємо повідомлення і повертаємо кнопку назад
            setTimeout(() => {
                alert("Дякуємо! Твоє замовлення успішно оформлено 🎸");
                checkoutBtn.textContent = originalText;
                checkoutBtn.style.backgroundColor = "#A31C1C";
            }, 1000);
        });
    }
});