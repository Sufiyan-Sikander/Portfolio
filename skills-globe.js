function onTouchStart(event) {
    event.preventDefault();
    const container = document.getElementById('skills-globe-container');
    if (!container) return;

    const touch = event.touches[0];
    const rect = container.getBoundingClientRect();
    isDragging = true;
    dragStart.x = (touch.clientX - rect.left) / rect.width * 2 - 1;
    dragStart.y = -(touch.clientY - rect.top) / rect.height * 2 + 1;
}

function onTouchMove(event) {
    event.preventDefault();
    const container = document.getElementById('skills-globe-container');
    if (!container || !isDragging) return;

    const touch = event.touches[0];
    const rect = container.getBoundingClientRect();
    const x = (touch.clientX - rect.left) / rect.width * 2 - 1;
    const y = -(touch.clientY - rect.top) / rect.height * 2 + 1;

    const deltaX = x - dragStart.x;
    const deltaY = y - dragStart.y;

    dragRotation.y = deltaX * 3;
    dragRotation.x = -deltaY * 3;

    targetRotation.y = dragRotation.y;
    targetRotation.x = dragRotation.x;
}

function onTouchEnd(event) {
    isDragging = false;
}
