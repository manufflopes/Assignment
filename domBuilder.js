function header() {
    const currentPage = window.location.pathname
    const [page] = currentPage.split('.')
    const headerTag = document.createElement('header')
    headerTag.innerHTML = `
            <nav>
                <ul class="menu">
                    <li><a href="./" class="${
                        page == '/' ? 'active' : ''
                    }">Home</a></li>
                    <li><a href="./grades.html" class="${
                        page == '/grades' ? 'active' : ''
                    }">Grades</a></li>
                    <li><a href="./staff.html" class="${
                        page == '/staff' ? 'active' : ''
                    }">Staff</a></li>
                    <li><a href="./weather.html" class="${
                        page == '/weather' ? 'active' : ''
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
