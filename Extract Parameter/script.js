function getUrlParameterValue(url, parameter) {
    try {
        const urlObj = new URL(url);

        const params = new URLSearchParams(urlObj.search);

        return params.get(parameter) || 'Parameter not found';
    } catch (error) {
        return 'Invalid URL';
    }
}

function extractParameter() {
    const url = document.getElementById('urlInput').value;
    const parameter = document.getElementById('paramInput').value;
    const result = getUrlParameterValue(url, parameter);

    if (!url && !parameter) {
        alert("Enter URL and Paramater")
    } else if (!url) {
        alert("Enter URL")
    } else if (!parameter) {
        alert("Enter a parameter")
    }
    document.getElementById('result').textContent = `Value: ${result}`;
}
