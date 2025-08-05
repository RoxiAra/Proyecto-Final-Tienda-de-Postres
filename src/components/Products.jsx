const Products = (props) => {
  const { img, nombre, precio, descripcion = "No tiene descripcion" } = props.product;

  return (
    <div className="product">
      <img src={img} alt={nombre} />
      <h3>{nombre}</h3>
      <p>Descripcion: {descripcion}</p>
      <p>Precio P/U: ${precio}</p>
    </div>
  )
}

export { Products }