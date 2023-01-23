// Footer faile aprašykite dvi funkcijas šiems komponentams:
//  Papildomos nuorodos, Copyright

export function fnNav() {
    let res = '<div class="container">'
    res += '<h5>Section</h5>'
    res += '<ul class="nav flex-column">'
    res += '<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>'
    res += '<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Features</a></li>'
    res += '<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pricing</a></li>'
    res += '<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>'
    res += '<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>'
    res += '</ul>'
    res += '</div>'
    return res;
}

export function fnOrigin() {
    let res = '<p>'
    res += '© 2023 Copyright';
    res += '</p>';
    return res;
}

