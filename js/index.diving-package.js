const packages = [
    {
        image: "img/diving-packages/diving1.png",
        name: "3 Days - 9 Dives",
        price: 300,
        description: "Make the most of your diving experience in Phuket. We will go diving 3 times a day, 3 days in a row, in different nearby places."
    },
    {  
        image: "img/diving-packages/diving2.png", 
        name: "Night Dives",
        price: 300,
        description: "Night diving is something you should try. The underwater world is spectacular at night! The offer is only for AOWD divers."
    },
    {
        image: "img/diving-packages/diving3.png", 
        name: "3 Caves - 3 Days",
        price: 250,
        description: " For Advanced Divers Only. We go diving to undisclosed caves in the Phuket surroundings. One day - one cave!"
    }
]



function renderDivingPackages(packages){
   let packagesHtml = "";
    for (const service of packages){
        packagesHtml += `
         <article>
      <img src="${service.image}" alt="${service.name}" />
      <p class="diving-packages__content--service">${service.name}</p>
      <p class="diving-packages__content--price">from $ ${service.price}</p>
      <p class="diving-packages__content--description">${service.description}</p>
      <a class="diving-packages__content--more" href="#">LEARN MORE</a>
    </article>`; 
    }  
    document.querySelector('.diving-packages__content').innerHTML = packagesHtml;
}

renderDivingPackages(packages);