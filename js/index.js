document.addEventListener('DOMContentLoaded', function() {
    let url = window.location.search;
    let params = new URLSearchParams(url);
    let email;
    console.log('url :');
    console.log(url);
    console.log('params :');
    console.log(params);
    console.log('params.get(\'email\') :');
    console.log(params.get('email'));
    if (params.has('email')) {
        console.log('paramètre email trouvé !');
        email = params.get('email');
        if (email.trim() !== '') {
            console.log('email non vide !');
            document.getElementById('identified-email').textContent = email;
            document.getElementById('frame363').style.display = "none";
            document.getElementById('frame365').style.display = "inline-block";
        } else {
            console.log('email vide !!!');
        }
    } else {
        console.log('paramètre email non trouvé !!!');
    }
    params.delete('email');
    url.search = params.toString();
    window.history.replaceState({}, document.title, window.location.pathname);
});