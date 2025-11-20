document.getElementById("loadDataBtn").addEventListener("click", async () => {
    const resultDiv = document.getElementById("apiResult");
    resultDiv.innerHTML = "Loading...";

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const data = await response.json();

        resultDiv.innerHTML = `
            <strong>Title:</strong> ${data.title}<br><br>
            <strong>Body:</strong> ${data.body}
        `;
    } catch (error) {
        resultDiv.innerHTML = "Error loading API data.";
    }
});
