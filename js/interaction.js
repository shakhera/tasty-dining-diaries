function getFoodElementById(foodInput) {
    const foodNameElenemt = document.getElementById(foodInput);
    // console.log(foodNameElenemt)
    const foodName = foodNameElenemt.innerText;
    console.log(foodName)
    // return foodName;

    // 1 where to select
    const foodList = document.getElementById('food-list');
    // 2 what to be added
    const li = document.createElement('li');
    li.innerText = foodName;
    // 3 add the child
    foodList.appendChild(li)
}
