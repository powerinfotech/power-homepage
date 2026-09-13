(() => {
    'use strict';

    const form = document.getElementById('download-form');
    const password = document.getElementById('password');
    const toggle = document.getElementById('toggle-password');
    const message = document.getElementById('form-message');

    toggle.addEventListener('click', () => {
        const show = password.type === 'password';
        password.type = show ? 'text' : 'password';
        toggle.setAttribute('aria-pressed', String(show));
        toggle.setAttribute('aria-label', show ? '비밀번호 숨기기' : '비밀번호 표시');
    });

    password.addEventListener('input', () => {
        password.removeAttribute('aria-invalid');
        message.textContent = '';
        message.classList.remove('success');
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        message.classList.remove('success');

        // Existing temporary distribution flow; access control belongs on the server if needed.
        if (password.value !== 'kosha') {
            message.textContent = password.value
                ? '비밀번호가 올바르지 않습니다. 다시 입력해 주세요.'
                : '비밀번호를 입력해 주세요.';
            password.setAttribute('aria-invalid', 'true');
            password.focus();
            password.select();
            return;
        }

        password.removeAttribute('aria-invalid');
        const link = document.createElement('a');
        link.href = '/files/koshaworkapp.apk';
        link.download = 'koshaWorkApp.apk';
        document.body.appendChild(link);
        link.click();
        link.remove();
        message.classList.add('success');
        message.textContent = '다운로드를 요청했습니다. 브라우저의 다운로드를 확인해 주세요.';
    });
})();
