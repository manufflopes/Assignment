function header() {
    const currentPage = window.location.pathname

    const headerTag = document.createElement('header')
    headerTag.innerHTML = `
            <nav>
                <ul class="menu">
                    <li><a href="./" class="${
                        currentPage.includes('/index') ? 'active' : ''
                    }">Home</a></li>
                    <li><a href="./grades.html" class="${
                        currentPage.includes('/grades') ? 'active' : ''
                    }">Grades</a></li>
                    <li><a href="./staff.html" class="${
                        currentPage.includes('/staff') ? 'active' : ''
                    }">Staff</a></li>
                    <li><a href="./weather.html" class="${
                        currentPage.includes('/weather') ? 'active' : ''
                    }">Weather</a></li>
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
