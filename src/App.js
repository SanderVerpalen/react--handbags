import React from 'react';
import './App.css';
import Button from './components/Button';
import Product from "./components/Product";
import bagOne from './assets/bag_1.png'
import bagTwo from './assets/bag_2.png'
import bagThree from './assets/bag_3.png'
import bagFour from './assets/bag_4.png'
import brand from './assets/brand.png'
import story from './assets/our_story.png'
import Tile from "./components/Tile";

function App() {

    return (<>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button
                    description="to the collection"
                    string="to the collection"
                    bool={false}
                />
                <Button
                    description="shop al bags"
                    string="shop all bags"
                    bool={false}
                />
                <Button
                    description="pre-orders"
                    string="pre-orders"
                    bool={true}
                />
            </nav>
            <main>
                <Product
                    span="best seller"
                    image={bagOne}
                    imageTitle="pic-bag"
                    bagName="The handy bag"
                    price="$400,-"
                />
                <Product
                    span="best seller"
                    image={bagTwo}
                    imageTitle="pic-bag"
                    bagName="The stylish bag"
                    price="$250,-"
                />
                <Product
                    span="new collection"
                    image={bagThree}
                    imageTitle="pic-bag"
                    bagName="The simple bag"
                    price="$300,-"
                />
                <Product
                    span="new collection"
                    image={bagFour}
                    imageTitle="pic-bag"
                    bagName="The trendy bag"
                    price="$150,-"
                />
            </main>
            <footer>
                <Tile
                    head="The Brand"
                    text={["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda expedita hic molestiae nisi nostrum numquam optio pariatur perferendis reiciendis.","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda expedita hic molestiae nisi nostrum numquam optio pariatur perferendis reiciendis."]}
                />
                <Tile
                    img = {brand} title="brand-pic"
                />
                <Tile
                    img={story} title="hugging-women"
                />
                <Tile
                    head="our story"
                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda expedita hic molestiae nisi nostrum numquam optio pariatur perferendis reiciendis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda expedita hic molestiae nisi nostrum numquam optio pariatur perferendis reiciendis."

                />
            </footer>

        </>
    );
}

export default App;



