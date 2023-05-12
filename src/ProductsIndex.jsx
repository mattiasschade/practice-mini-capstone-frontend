export function ProductsIndex() {
  return (
    <div id="products-index">
      <h1>All Products</h1>
      <div className="products">
        <h2>Apple</h2>
        <h3>3</h3>
        <img src="https://images-prod.healthline.com/hlcmsresource/images/AN_images/health-benefits-of-apples-1296x728-feature.jpg" />
        <p>Big ole red apple</p>
      </div>
      <div className="products">
        <h2>Salmon</h2>
        <h3>8</h3>
        <img src="https://alaskaseafood.es/wp-content/uploads/2020/04/salmon-salvaje.jpg" />
        <p>Brown bears love the stuff</p>
      </div>
      <div>
        <h2>Spinach</h2>
        <h3>4</h3>
        <img src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQee8U58yI5-9ByxSuRrvfyAHyDZEPdPgE2_85uwr4dHmjojOzVkDBQvTW4g6LZ_LunWgwGkjJNrVHuvMY" />
        <p>Good for your health</p>
      </div>
    </div>
  );
}
