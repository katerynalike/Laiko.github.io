const catalog = [
    {
        name: "Rose Avalanche",
        image: "images/rose_avalanche.jpg",
        description: "Large head rose with soft creamy petals."
    },
    {
        name: "Rose Explorer",
        image: "images/rose_explorer.jpg",
        description: "Deep red rose with long stems and large heads."
    }
];

const catalogContainer = document.getElementById("catalog");

catalog.forEach(flower => {
    const item = document.createElement("div");
    item.className = "catalog-item";
    item.innerHTML = `
        <img src="${flower.image}" alt="${flower.name}">
        <h2>${flower.name}</h2>
        <p>${flower.description}</p>
    `;
    catalogContainer.appendChild(item);
});