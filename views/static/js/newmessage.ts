document.addEventListener("DOMContentLoaded", () => {
    const submitBtn = document.getElementById('handle-ajax');
    const formFieldIds = ['name', 'country', 'message'];
    if (submitBtn) {
        submitBtn.addEventListener('click', (event) => {
            event.preventDefault();
            const formFieldValues = Object.assign({}, ...formFieldIds.map((field: string) => ({
                [field]: document.querySelector<HTMLInputElement>(`#${field}`).value
            })))
        
            console.log('formFieldValues', formFieldValues);

            fetch('/api/ajaxmessage', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formFieldValues)
            }).then(apiResponse => apiResponse.json())
        })
    }
});