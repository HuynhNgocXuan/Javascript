


function toast({title = '', message = '', type = 'info', duration = 2000, fadeOut = 2000}) {
    const main = document.getElementById('toast');
    if (main) {
        const toast = document.createElement('div');

        const icons = {
            success: 'fa-circle-check',
            warning: 'fa-triangle-exclamation',
            error: 'fa-circle-exclamation',
            info: 'fa-comment'
        }

        const icon = icons[type];
        const delay = (duration / 1000).toFixed(2);
        const fade = (fadeOut /1000).toFixed(2);

        const autoRemove = setTimeout(function() {
            main.removeChild(toast);
        }, duration + fadeOut);

        toast.onclick = function(e) {
            if (e.target.closest('.toast__close')) {
                main.removeChild(toast);
            }
            else {
                autoRemove;
            }
        }

        toast.classList.add('toast', `toast--${type}`);
        toast.style.animation = `slideInRight linear 1s, fadeOut linear ${fade}s ${delay}s forwards`;

        toast.innerHTML = `
            <div class="toast__icon">
                <i class="fa-solid ${icon}"></i>
            </div>

            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${message}</p>
            </div>

            <div class="toast__close">
                <i class="fa-solid fa-xmark"></i>
            </div>
        `;
        main.appendChild(toast)

   
    }
}


function showSuccessToast() {
    toast({
        title: 'Success',
        message: 'Success Để bắt đầu một cách thuận lợi, bạn nên tập trung vào một lộ trình học. " bạn nên tập trung vào lộ trình "Front-end".',
        type: 'success',
        duration: 4000,
        fadeOut: 2000
    });
}


function showErrorToast() {
    toast({
        title: 'Error',
        message: 'Error Để bắt đầu một cách thuận lợi, bạn nên tập trung vào một lộ trình học. " bạn nên tập trung vào lộ trình "Front-end".',
        type: 'error',
        duration: 4000,
        fadeOut: 2000
    });
}

