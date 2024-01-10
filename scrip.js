document.getElementById("searchBtn").addEventListener("click", function(event) {event.preventDefault();
    var resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = ""; // Limpar resultados anteriores

    var keywords = document.getElementById("keywords").value.toLowerCase();
    var category = document.getElementById("categories").value.toLowerCase();

    // Exemplo de resultados ilustrativos
    var dummyResults = [
{ title: "Ofício n. 123", description: "Texto descritivo do Ofício n. 123", category: "ofício" },
{ title: "Memorando n. 456", description: "Texto descritivo do Memorandon. 456", category: "memorando" },
{ title: "Processo n. 789", description: "Texto descritivo do Processon. 789", category: "processo" },
{ title: "Ofício n. 987", description: "Texto descritivo do Ofício n. 987", category: "ofício" },
{ title: "Memorando n. 654", description: "Texto descritivo do Memorandon. 654", category: "memorando" },
{ title: "Processo n. 125", description: "Texto descritivo do Processo n. 125", category: "processo" },
{ title: "Portaria n. 354", description: "Texto descritivo do Portaria n. 354", category: "portaria" },
    ];

    var filteredResults = dummyResults.filter(function(result) {
    var resultCategory = result.category.toLowerCase();
    return (keywords === "" || result.title.toLowerCase().includes(keywords)) &&
    (category === "" || resultCategory === category);
});

    if (filteredResults.length > 0) {
    filteredResults.forEach(function(result) {
    var resultItem = document.createElement("div");
    resultItem.classList.add("result-item");

    var title = document.createElement("h3");
    title.textContent = result.title;

    var description = document.createElement("p");
    description.textContent = result.description;

    resultItem.appendChild(title);
    resultItem.appendChild(description);

    resultsContainer.appendChild(resultItem);
});
} else {
    var noResults = document.createElement("p");
    noResults.textContent = "Nenhum resultado encontrado.";
    resultsContainer.appendChild(noResults);
}
});
