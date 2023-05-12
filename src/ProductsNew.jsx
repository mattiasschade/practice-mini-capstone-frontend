export function ProductsNew() {
  return (
    <div id="products-new">
      <h1>New Product</h1>
      <form>
        <div>
          Name: <input type="text" />
        </div>
        <div>
          Description: <input type="text" />
        </div>
        <div>
          Price: <input type="number" />
        </div>
        <div>
          Image: <input type="url" />
        </div>
      </form>
    </div>
  );
}
