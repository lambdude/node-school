console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(formatting, username, comment) {
    return formatting[0] + format(username) + formatting[1] + format(comment) + formatting[2]
}

function format(string) {
    return string.replace(/&/g, '&amp;')
        .replace(/'/g, '&apos;')
        .replace(/"/g, '&quot;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
}