function searchData(){
    let searchText = document.getElementById("search-text").value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data =>displayMeals(data.meals))
}
function showIngridiant(mealId){
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
    .then(res => res.json())
    .then(data =>displayMealDetail(data.meals))   
}
const displayMeals = meals =>{
    const mealsDiv = document.getElementById('meals');
    meals.forEach(meal =>{
        const mealDiv = document.createElement('div');
        mealDiv.className ='meal';
        mealDiv.id = "mealDivId"+ meal.idMeal
        const mealInfo =`
            <img class="meal-img" src="${meal.strMealThumb}">
            <h4 class ="meal-name">${meal.strMeal}</h4>
            <button onclick="showIngridiant('${meal.idMeal}')" type="button" class="btn btn-danger">Ingridiant</button>
        `
        mealDiv.innerHTML = mealInfo;
        mealsDiv.appendChild(mealDiv);
    });
}
const displayMealDetail = meals =>{
    const mealdetailDiv = document.createElement('div');
    const mealsDiv = document.getElementById('meals');
    meals.forEach(meal =>{
        const mealDiv = document.createElement('div');
        mealDiv.className ='meal';
        const mealInfo =`
            <h4 class ="meal-name">${meal.strMeal}tania</h4>;
        `
        mealDiv.innerHTML = mealInfo;
        mealsDiv.appendChild(mealDiv);
    });
}