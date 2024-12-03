const selectElement = document.querySelector(".form__select");


const options = [
    { value: "option1", text: "PADI Open Water Course" },
    { value: "option2", text: "PADI Advanced Open Water Course" },
    { value: "option3", text: "Padi Divemaster Course" },
];

options.forEach((option) => {
    const optionElement = document.createElement("option");
    optionElement.value = option.value;
    optionElement.textContent = option.text;
    selectElement.appendChild(optionElement);
});

