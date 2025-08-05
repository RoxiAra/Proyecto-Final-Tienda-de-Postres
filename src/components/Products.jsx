const Products = (props) => {
  const { title, price, description, image = "No tiene descripcion" } = props.product;

  return (
    <div className="product">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>Descripcion: {description}</p>
      <p>Precio P/U: ${price}</p>
      <button>Actualizar</button>
      <button>Borrar</button>
    </div>
  )
}

export { Products }