// كود جافاسكريبت للتفاعلات البسيطة
document.addEventListener('DOMContentLoaded', function() {
    // إضافة تأثير عند الضغط على أزرار "اطلب الآن"
    const orderButtons = document.querySelectorAll('.order-btn');
    
    orderButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.closest('.product-card').querySelector('h3').textContent;
            alert(شكراً لاهتمامك بمنتج: ${productName}\nسيتم توجيهك إلى نموذج الطلب قريباً.);
            // هنا سيتم إضافة رابط نموذج الطلبات لاحقاً
        });
    });
    
    // تأثير سلس للتمرير
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});