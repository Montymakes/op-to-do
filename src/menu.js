import krabbyPattyImg from './krabby-patty.webp';
import krustyKrabPizza from './Krusty_Krab_Pizza.webp';

export const createMenuPage = () => {
    const menu = document.createElement('article');
    menu.id = "menu";
    menu.innerHTML = `<h1>Galley Grub</h1>`;

    const burgers = document.createElement('section');
    burgers.id = 'burgers';
    menu.appendChild(burgers);

    const burgerImage = document.createElement('img');
    burgerImage.src = krabbyPattyImg;
    burgerImage.alt = "Photo of a Krabby Patty";
    burgers.appendChild(burgerImage);

    burgers.innerHTML += `
                            <h3>Burgers</h3>
                            <ul class="item-list">
                                <li class="item-and-price"><p>Krabby Patty</p><p>2.00</p></li>
                                    <ul class="menu-addon">
                                            <li class="item-and-price"><p>w/ sea cheese</p><p>2.25</p></li>
                                    </ul>
                                <li class="item-and-price"><p>Deluxe Krabby Patty</p><p>3.00</p></li>
                                    <ul class="menu-addon">
                                        <li class="item-and-price"><p>w/ sea cheese</p><p>3.25</p></li>
                                    </ul>
                                <li class="item-and-price"><p>Triple Krabby Patty</p><p>4.00</p></li>
                                    <ul class="menu-addon">
                                        <li class="item-and-price"><p>w/ sea cheese</p><p>4.25</p></li>
                                    </ul>
                            </ul>`;
    
    const combos = document.createElement('section');
    combos.id = 'combos';
    combos.innerHTML = `
                        <h3>Combos</h3>
                        <ul class="item-list">
                            <li class="item-and-price"><p>Krabby Combo</p><p>6.00</p></li>
                            <li class="item-and-price"><p>Kiddie Meal</p>3.50</li>
                            <li class="item-and-price"><p>Sailors Surprise</p>10.00</li>
                        </ul>`;
    
    menu.append(combos);
    menu.innerHTML += `
                    <section id='sides'>
                        <h3>Sides</h3>
                        <ul class="item-list">
                            <li>Krabby Fries</li>
                                <ul class="menu-addon">
                                    <li class="item-and-price"><p>Small</p><p>1.00</p></li>
                                    <li class="item-and-price"><p>Medium</p><p>1.50</p></li>
                                    <li class="item-and-price"><p>Large</p><p>1.75</p></li>
                                </ul>
                            <li class="item-and-price"><p>Coral Bits</p><p>1.20</p></li>
                            <li class="item-and-price"><p>Seaweed Salad</p><p>1.75</p></li>
                        </ul>
                    </section>
                    <section id="drinks">
                        <h3>Drinks</h3>
                        <ul class="item-list">
                            <li class="item-and-price"><p>KelpShake</p><p>1.50</p></li>
                            <li><p>Seafoam Soda</p></li>
                            <ul class="menu-addon">
                                <li class="item-and-price"><p>Small</p><p>0.50</p></li>
                                <li class="item-and-price"><p>Medium</p><p>0.75</p></li>
                                <li class="item-and-price"><p>Large</p><p>1.00</p></li>
                            </ul>
                        </ul>
                    </section>
                    `;
    const pizza = document.createElement('section');
    pizza.id = "pizza";
    pizza.innerHTML += `<h3>Pizza</h3>`;
    const pizzaImage = document.createElement('img');
    pizzaImage.src = krustyKrabPizza;
    pizzaImage.alt = "A picture of a Krusty Krab Pizza";
    pizza.appendChild(pizzaImage);
    pizza.innerHTML += `<p id="pizza">Coming soon!</p>`;
    menu.append(pizza);

    return menu;
};
