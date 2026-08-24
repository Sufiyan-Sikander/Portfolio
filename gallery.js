const projectImages = {

    "Vision 360 - E-Services & Technologies Pvt Ltd": [
        "images/Vision 360 - E - Services & Technologies Pvt Ltd/pic1.png",
        "images/Vision 360 - E - Services & Technologies Pvt Ltd/pic2.png",
        "images/Vision 360 - E - Services & Technologies Pvt Ltd/pic3.png",
        "images/Vision 360 - E - Services & Technologies Pvt Ltd/pic4.png",
        "images/Vision 360 - E - Services & Technologies Pvt Ltd/pic5.png",
        "images/Vision 360 - E - Services & Technologies Pvt Ltd/pic6.png",
        "images/Vision 360 - E - Services & Technologies Pvt Ltd/pic7.png",
        "images/Vision 360 - E - Services & Technologies Pvt Ltd/pic8.jpg"
    ],



    "YT-Comments Sentiment Analysis using MLOps": [
        "images/YT-Comments Sentiment Analysis using MLOps/pic 1.png",
        "images/YT-Comments Sentiment Analysis using MLOps/pic 2.png",
        "images/YT-Comments Sentiment Analysis using MLOps/pic 3.png",
        "images/YT-Comments Sentiment Analysis using MLOps/pic 4.png",
        "images/YT-Comments Sentiment Analysis using MLOps/pic 5.png",
        "images/YT-Comments Sentiment Analysis using MLOps/pic 6.png",
        "images/YT-Comments Sentiment Analysis using MLOps/pic 7.png",
        "images/YT-Comments Sentiment Analysis using MLOps/pic 8.png",
        "images/YT-Comments Sentiment Analysis using MLOps/pic 9.png",
        "images/YT-Comments Sentiment Analysis using MLOps/pic 10.png",
    ],

    "Chalktalk": [
        "images/Chalktalk/pic2.png",
        "images/Chalktalk/pic3.png",
        "images/Chalktalk/pic4.png",
        "images/Chalktalk/pic5.jpeg",
        "images/Chalktalk/pic6.jpeg",
        "images/Chalktalk/pic7.jpeg",
        "images/Chalktalk/pic8.jpeg",
        "images/Chalktalk/pic9.jpeg",
        "images/Chalktalk/pic10.jpeg"
    ],

    "ShurukerAi-FYP": [
        "images/Shuruker project pics/Screenshot 2026-07-18 010309.png",
        "images/Shuruker project pics/Screenshot 2026-07-18 010342.png",
        "images/Shuruker project pics/Screenshot 2026-07-18 010429.png",
        "images/Shuruker project pics/Screenshot 2026-07-18 010503.png",
        "images/Shuruker project pics/Screenshot 2026-07-18 010627.png",
        "images/Shuruker project pics/Screenshot 2026-07-18 012544.png"
    ],

    "Traffic-GPT": [
        "images/Traffic-GPT/Pic 1.png",
        "images/Traffic-GPT/Pic 2.png",
        "images/Traffic-GPT/Pic 3.png",
        "images/Traffic-GPT/Pic 4.png",
        "images/Traffic-GPT/Pic 5.png",
        "images/Traffic-GPT/Pic 6.png",
        "images/Traffic-GPT/Pic 7.png",
    ],


    "JobRadarAI": [
        "images/JobRadarAI/workflow1.png",
        "images/JobRadarAI/workflow2.png"
    ],

    "The Next School - FB Area Campus Chatbot": [
        "images/The Next School - FB Area Campus Chatbot/pic 1.png",
        "images/The Next School - FB Area Campus Chatbot/pic 2.png",
        "images/The Next School - FB Area Campus Chatbot/pic 3.png",
    ]

    // add more project keys matching data-project
};

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('project-modal');

    if (!modal) {
        return;
    }

    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalCounter = document.getElementById('modal-counter');
    const closeBtn = modal.querySelector('.lightbox-close');
    const prevBtn = modal.querySelector('.lightbox-prev');
    const nextBtn = modal.querySelector('.lightbox-next');

    let currentImages = [];
    let currentIndex = 0;
    let currentTitle = '';

    function showImage(index) {
        if (currentImages.length === 0) return;
        currentIndex = (index + currentImages.length) % currentImages.length;
        modalImage.src = currentImages[currentIndex];
        modalImage.alt = currentTitle;
        modalCounter.textContent = `${currentIndex + 1} / ${currentImages.length}`;
    }

    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', () => {
            const key = item.dataset.project;
            currentTitle = item.querySelector('.gallery-title').textContent;
            currentImages = projectImages[key] || [];

            modalTitle.textContent = currentTitle;
            showImage(0);
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    });
    nextBtn.addEventListener('click', () => showImage(currentIndex + 1));
    prevBtn.addEventListener('click', () => showImage(currentIndex - 1));

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    document.addEventListener('keydown', (e) => {
        if (!modal.classList.contains('active')) return;
        if (e.key === 'Escape') {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
        if (e.key === 'ArrowRight') showImage(currentIndex + 1);
        if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
    });
});