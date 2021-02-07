fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
.then(res => res.json())
.then(data =>displayMeals(data));


const displayMeals = meals =>{
    const mealsDiv = document.getElementById('meals');
    meals.forEach(meal =>{
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
