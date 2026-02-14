
function checkPassword() {
            const password = document.getElementById('passwordInput').value;
            const correctPassword = '10112024';
            
            if (password === correctPassword) {
                window.location.href = 'galerie.html';
            } else {
                document.getElementById('errorMsg').style.display = 'block';
            }
        }
        
        document.getElementById('passwordInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') checkPassword();
        });