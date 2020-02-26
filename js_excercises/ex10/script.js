const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const url = document.getElementById('url');
    const hostname = new URL(url.value).hostname;
    let domainNames = getDomainName(hostname);
    alert(domainNames);
    console.log(domainNames);
});



getDomainName = (hostname) => {
    let domains = [];
    let mainDomain;
    let match;
    if (match = hostname.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:[^.]+\.)?([^:\/\n\?\=]+)/im)) {
        console.log(match);
        mainDomain = match[1];
        if (match = mainDomain.match(/^[^\.]+\.(.+\..+)$/)) {
            console.log(match);
            mainDomain = match[1];
        }
    }
    domains.push('Domain: ' + mainDomain);
    let subDomains = getSubDomain(hostname);
    if (subDomains.length > 0) {
        domains.push('Subdomain: ' + subDomains);
    }
    return domains;
}

getSubDomain = (hostname) => {
    const subdomains = [];
    var regexParse = new RegExp('[a-z\-0-9]{2,63}\.[a-z\.]{2,5}$');
    var urlParts = regexParse.exec(hostname);
    subdomains.push(hostname.replace(urlParts[0], '').slice(0, -1));
    return subdomains;
}