
const loader = document.getElementById('order-public');
const selector = loader.getAttribute('selector');

if (loader && selector) {
    const URL = 'https://zaochnik1.com/static/public/';
    const d = document;
    const nam = (loader.getAttribute('name') === 'shortAndLong') ? ['short', 'long'] : [loader.getAttribute('name')];
    const sel = selector.replace(/\s+/g, '').split(',');
    const script = [];
    const link = [];
    const c = [];
    nam.map((n) => {
        const data = {
            links: [`${URL}0.min.css`, `${URL}client_order_public_${n === 'short' ? 'short_blog_' : ''}iframe.min.css`],
            scripts: [`${URL}vuejs.min.js`, `${URL}client_order_public_${n === 'short' ? 'short_blog_' : ''}iframe.min.js`],
            component: `<order-public-${n === 'short' ? 'short-' : ''}landing></order-public-${n === 'short' ? 'short-' : ''}landing>`
        };
        data.links.map(l => link.push(l));
        data.scripts.map(s => script.push(s));
        c.push(data.component);
    })
    const scriptTotal = [...new Set(script)];
    const linksTotal = [...new Set(link)];
    linksTotal.map(item => {
        const link = d.createElement("link");
        const opt = { rel: "stylesheet", type: "text/css", href: item };
        Object.keys(opt).forEach(item => { link.setAttribute(item, opt[item]) });
        d.querySelector("head").appendChild(link);
    });
    scriptTotal.map(item => {
        const script = d.createElement("script");
        const opt = { type: "text/javascript", src: item };
        Object.keys(opt).forEach(item => { script.setAttribute(item, opt[item]) });
        d.body.appendChild(script);
    });
    sel.map((item, index) => {
        const iframe = d.createElement("div");
        iframe.classList.add("iframe");
        iframe.innerHTML = c[index];
        d.querySelector(item).appendChild(iframe);
    });
}
