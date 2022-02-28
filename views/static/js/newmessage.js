var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
document.addEventListener("DOMContentLoaded", function () {
    var submitBtn = document.getElementById('handle-ajax');
    var formFieldIds = ['name', 'country', 'message'];
    if (submitBtn) {
        submitBtn.addEventListener('click', function (event) {
            event.preventDefault();
            var formFieldValues = Object.assign.apply(Object, __spreadArrays([{}], formFieldIds.map(function (field) {
                var _a;
                return (_a = {},
                    _a[field] = document.querySelector("#" + field).value,
                    _a);
            })));
            console.log('formFieldValues', formFieldValues);
            fetch('/api/ajaxmessage', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formFieldValues)
            }).then(function (apiResponse) { return apiResponse.json(); });
        });
    }
});
