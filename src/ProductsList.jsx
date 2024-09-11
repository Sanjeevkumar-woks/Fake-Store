import Card from "./Components/Card";

const ProductsList = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 p-4">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
