const Products = (props) => {
  const { id, title, price, description, image = "No tiene imagen" } = props.products;

  const handleDelate = (id) => {
    console.log("borrando producto", id);
  }

  return (
    <div className="product">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>Descripción: {description}</p>
      <p>Precio: ${price}</p>
      <button>Actualizar</button>
      <button onClick={() => handleDelate(id)}>Borrar</button>
    </div>
  );
}

export { Products }