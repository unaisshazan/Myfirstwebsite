import React from 'react';
import './App.css';
import FoodCard from './Card'
function App() {
  return (
    <div  >
<h1>My Recipes</h1>
<section className="row">
<FoodCard title="Biryani" 
date= "4 april 2021" 
img="https://static.toiimg.com/thumb/54308405.cms?imgsize=510571&width=800&height=800" 
linePara="Spicy Biryani"
 step1="Take water"
 step2="Boil it"
 step3="leave it for 5 minitues"
/>
<FoodCard title="Pizza" 
date= "3 april 2021" 
img="https://static.toiimg.com/photo/53110049.cms" 
linePara="Spicy Biryani"
 step1="Take water"
 step2="Boil it"
 step3="leave it for 5 minitues"
/>

<FoodCard title="Burger" 
date= "3 april 2021" 
img="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2VyfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80" 
linePara="Spicy Biryani"
 step1="Take water"
 step2="Boil it"
 step3="leave it for 5 minitues"
/>
</section>
    </div>
  );
}

export default App;
