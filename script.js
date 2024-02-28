//home page footer

function showImageCaption() {
    const caption = document.getElementsByTagName('figcaption')[0]
    if (caption) {
        caption.classList.remove('hidden')
    }
}
setTimeout(showImageCaption, 10000)

// grade page
const gradeForm = document.getElementById('grade-form')
gradeForm.addEventListener('submit', function (e) {
    e.preventDefault()
    const gradeValue = document.getElementsByClassName('mark-input')[0]
    const parsedValue = parseInt(gradeValue.value)

    const errorAlert = document.getElementsByClassName('error')[0]
    const gradeAlert = document.getElementsByClassName('grade')[0]

    try {
        errorAlert.innerHTML = ''
        gradeAlert.innerHTML = ''

        if (parsedValue > 100) {
            throw new Error(
                'The Grade is invalid. It must be lower than 101 points !'
            )
        }
        if (parsedValue < 0) {
            throw new Error(
                'The Grade is invalid. It must be higher than 0 points !'
            )
        }
        let message

        if (parsedValue <= 50) {
            message = 'Grade <strong>F</strong>'
        } else if (parsedValue > 90) {
            console.log('Grade A')
            message = 'Grade <strong>A</strong>'
        } else if (parsedValue > 80) {
            console.log('Grade B')
            message = 'Grade <strong>B</strong>'
        } else if (parsedValue > 70) {
            console.log('Grade C')
            message = 'Grade <strong>C</strong>'
        } else {
            console.log('Grade D')
            message = 'Grade <strong>D</strong>'
        }

        gradeAlert.innerHTML = message
    } catch (error) {
        errorAlert.innerHTML = error.message
    }
})
