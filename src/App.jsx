import React from 'react';
import { useAuthContext } from '@asgardeo/auth-react'
import './App.css'

function App() {
  const { state, signIn, signOut } = useAuthContext();
  return (
    <>
    {state.isAuthenticated ? (
    <div className="app-container">
      <nav className="top-nav">
        <h1>Pizza Shack</h1>
        <button onClick={() => signOut()}>Logout</button>
      </nav>

      <header>
        <p>Your favorite pizza delivery app!</p>
      </header>

      <main>
        {/* Pizza Menu Section */}
        <section className="menu">
          <h2>Our Menu</h2>
          <ul>
            <li>Margherita - $10</li>
            <li>Pepperoni - $12</li>
            <li>Veggie - $11</li>
          </ul>
        </section>

        {/* Order Form Section */}
        <section className="order">
          <h2>Place Your Order</h2>
          <form onSubmit={(e) => { e.preventDefault(); alert('Order placed!'); }}>
            <div>
              <label htmlFor="pizzaSelect">Select Pizza:</label>
              <select id="pizzaSelect" name="pizza">
                <option value="margherita">Margherita</option>
                <option value="pepperoni">Pepperoni</option>
                <option value="veggie">Veggie</option>
              </select>
            </div>
            <div>
              <label htmlFor="quantity">Quantity:</label>
              <input type="number" id="quantity" name="quantity" min="1" defaultValue="1" />
            </div>
            <button type="submit">Order Now</button>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Pizza Shack. All rights reserved.</p>
      </footer>
    </div>
  ) : (
    <button onClick={() => signIn()}>Login</button>
  )};
  </>
  )
}

export default App;
