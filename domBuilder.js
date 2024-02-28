function header() {
    const headerTag = document.createElement('header')
    headerTag.innerHTML = `
            <nav>
                <ul class="menu">
                    <li><a href="/">Home</a></li>
                    <li><a href="./grades.html">Grades</a></li>
                    <li><a href="./staff.html">Staff</a></li>
                    <li><a href="./weather.html">Weather</a></li>
                </ul>
            </nav>
        `

    return headerTag
}

function footer() {
    const now = new Date()
    const year = now.getFullYear()
    const month = (now.getMonth() + 1).toString().padStart('2', '0')
    const day = now.getDate().toString().padStart('2', '0')

    const footerTag = document.createElement('footer')
    footerTag.innerHTML = `
        <span>&copy; Manuella Lopes | </span>
        <strong >${month}/${day}/${year}</strong>
    `
    return footerTag
}

document.addEventListener('DOMContentLoaded', function () {
    const body = document.body
    body.prepend(header())
    body.append(footer())
})
