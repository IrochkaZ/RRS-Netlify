const loader = document.getElementById('order-public');
const selector = loader.getAttribute('selector');

if (loader && selector) {
    const URL = 'https://zaochnik1.com/static/public/', d = document,
        nam = (loader.getAttribute('name') === 'shortAndLong') ? ['short', 'long'] : [loader.getAttribute('name')],
        sel = selector.replace(/\s+/g, '').split(','), script = [], link = [], c = [];
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
    const a = [...new Set(script)], l = [...new Set(link)];
    l.map(e => {
        const t = d.createElement("link"), o = { rel: "stylesheet", type: "text/css", href: e };
        Object.keys(o).forEach(e => { t.setAttribute(e, o[e]) }), d.querySelector("head").appendChild(t)
    });
    a.map(t => {
        const e = d.createElement("script"), o = { type: "text/javascript", src: t };
        Object.keys(o).forEach(t => { e.setAttribute(t, o[t]) }), d.body.appendChild(e);
    });
    sel.map((e, a) => {
        const i = d.createElement("div"); i.classList.add("iframe"), i.innerHTML = c[a], d.querySelector(e).appendChild(i);
    });
}
