import { error } from "console"

export default function() {
    const form : HTMLFormElement | null = document.querySelector('form')
    const formelements : NodeListOf<HTMLInputElement> | null = document.querySelectorAll('input')

    formelements?.forEach(element => {
        element.addEventListener('blur', () => {
            if(!element.checkValidity()) {
                showError(element)
            } else {
                showSuccessMessage(element)
            }
        })
    });

    form?.addEventListener('submit', (event) => submitForm(form, event))

    function showError (element : HTMLInputElement) {
        const errorlist : HTMLDivElement | null | undefined = element.parentElement?.querySelector('.error-list')
        if (errorlist) {
            errorlist.innerHTML = ""
            const errorElement : HTMLAnchorElement = document.createElement('a')
            const idNumber : number = Math.random()
            element.setAttribute("aria-describedBy", `error-${idNumber}`)
            errorElement.href = `#${element.id}`
            errorElement.setAttribute("id", `error-${idNumber}`)
            errorElement.textContent = element.validationMessage
            errorElement.classList.add('error-element')
            errorlist.appendChild(errorElement)
        }
    }

    function showSuccessMessage (element : HTMLInputElement) {
        const errorlist : HTMLUListElement | null | undefined = element.parentElement?.querySelector('.error-list')
        if (errorlist) {
            errorlist.innerHTML = ""
            const successElement : HTMLAnchorElement = document.createElement('a')
            const idNumber : number = Math.random()
            element.setAttribute("aria-describedBy", `error-${idNumber}`)
            successElement.href = `#${element.id}`
            successElement.setAttribute("id", `error-${idNumber}`)
            successElement.textContent = "This input field was filled out corrcectly"
            successElement.classList.add('success-element')
            errorlist.appendChild(successElement)
        }
    }

    function submitForm (form : HTMLFormElement, event : SubmitEvent) {
        event.preventDefault()
        form.style.display = "none"
        const successFormElement : HTMLDivElement | null = document.querySelector('.success-form')
        if(successFormElement) {
            successFormElement.textContent = "Congratulations I am still a useless form, but at least I was sucessfully submitted!"
        }
    }
}