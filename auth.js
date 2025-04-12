function loginWithGithub() {
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&scope=user`;
    window.location.href = githubAuthUrl;
}

async function handleGithubCallback() {
    const code = new URLSearchParams(window.location.search).get('code');
    if (code) {
        try {
            // Store the auth code temporarily
            sessionStorage.setItem('github_auth_code', code);
            // Redirect to home page
            window.location.href = '/';
        } catch (error) {
            console.error('Authentication failed:', error);
        }
    }
}

// Check if we're on the callback page
if (window.location.pathname === '/callback') {
    handleGithubCallback();
}
