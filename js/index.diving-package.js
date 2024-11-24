const packages = [
    {
        image: "img/diving-packages/diving1.png",
        service: "3 Days - 9 Dives",
        price: 300,
        description: "Make the most of your diving experience in Phuket. We will go diving 3 times a day, 3 days in a row, in different nearby places."
    },
    {  
        image: "img/diving-packages/diving2.png", 
        service: "Night Dives",
        price: 300,
        description: "Night diving is something you should try. The underwater world is spectacular at night! The offer is only for AOWD divers."
    },
    {
        image: "img/diving-packages/diving3.png", 
        service: "3 Caves - 3 Days",
        price: 250,
        description: " For Advanced Divers Only. We go diving to undisclosed caves in the Phuket surroundings. One day - one cave!"
    }
]



function renderDivingPackages(packages){
    packagesHtml = "";
    for (let package of packages){
        packageHtml = `
         <article>
      <img src="${package.image}" alt="3 Days - 9 Dives service" />
      <p class="diving-packages__content--service">${package.service}</p>
      <p class="diving-packages__content--price">from $ ${package.price}</p>
      <p class="diving-packages__content--description">
        ${package.description}

      </p>

      <a class="diving-packages__content--more" href="#">LEARN MORE</a>


    </article>`;
    document.querySelector('.diving-packages__content').innerHTML = packageHtml;
    
    }

    renderDivingPackages(packages)

}