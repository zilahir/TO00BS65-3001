document.addEventListener("DOMContentLoaded", () => {
    const submitBtn = document.getElementById('handle-ajax');
    const formFieldIds = ['username', 'country', 'message'];
    const errorContainer = document.getElementById('error');

    if (submitBtn) {
        submitBtn.addEventListener('click', (event): void | boolean => {
            event.preventDefault();
            errorContainer.classList.add('hidden');
            const formFieldValues = Object.assign({}, ...formFieldIds.map((field: string) => ({
                [field]: document.querySelector<HTMLInputElement>(`#${field}`).value
            })))

            const errors: boolean[] = Object.keys(formFieldValues).map(key => !!formFieldValues[key] && formFieldValues[key].length > 0 ? false : true)

            if (errors.includes(true)) {
                // erorr in the form
                errorContainer.classList.remove('hidden');
                return false
            }

            fetch('/api/ajaxmessage', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formFieldValues)
            }).then(() => {
                formFieldIds.map(field => {
                    return document.querySelector<HTMLInputElement>(`#${field}`).value = ""
                })
            })
        })
    }
});