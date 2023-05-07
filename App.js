import React from "react"
import ReactDOM from "react-dom/client"

// Header
//  -logo 
//  -navitems 
// Body
//  -search
//  -reastaurantContainer
//   -restaurantCard
//    -img
//    -Res. name ,star rating, delivery, cuisine  
// Footer
//  -copyright
//  -links
//  -address
//  -contact   

const Header = () =>{
    return (
        <div className="header">
            <div>
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = () =>{
    return (
        <div className="res-card">
            <img className="res-logo" alt="res-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQT_hTHqbhofHnR0VF03a13uOfTzh3GUhD-Q&usqp=CAU" />
            <h3>Meghna Foods</h3>
            <h4>Biryani, Asian, North Indian</h4>
            <h4>4.5 rating</h4>
            <h4>25 minutes</h4>
        </div>
    )
}

const Body = () =>{
    return (
        <div className="body">
            <div class="search">Search</div>
            <div className="res-container">
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);