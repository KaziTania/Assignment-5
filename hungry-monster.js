fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
.then(res => res.json())
.then(data =>displayMeals(data));


const displayMeals = meals =>{
    const mealsDiv = document.getElementById('meals');
    meals.forEach(meal =>{
        // const meal = meals[i];
        const mealDiv = document.createElement('div');
        mealDiv.className ='meal';
        const mealInfo =`
            <h3 class ="meal-name">${meal.name}</h3>;
            <p>${meal.ingrideant}</p>;
            <button onclick="displayMealDetail('${meal.name}')">;
        `

        mealDiv.innerHTML = mealInfo;

        mealsDiv.appendChild(mealDiv);
    });
}

const displayMealDetail = name =>{

}
    // for (let i = 0; i < meals.length; i++) {
    //     const meal = meals[i];
        // const mealDiv = document.createElement('div');
        // const name = document.createElement('h3');
        // name.innerText = meal.name;
        // const ingrediant = document.createElement('p');
        // ingrediant.innerText = meal.ingrediant;
        // mealDiv.appendChild(name);
        // mealDiv.appendChild(ingrediant);


    //     mealDiv.className = 'meal';
    //     const mealInfo =`
    //         <h3 class ="meal-name">${meal.name}</h3>
    //         <p>${meal.ingrideant}</p>;
    //     `
    //     mealDiv.innerHTML = mealInfo;

    //     mealsDiv.appendChild(mealDiv);
    // }

// }