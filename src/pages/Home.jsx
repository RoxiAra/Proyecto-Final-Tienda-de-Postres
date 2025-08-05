import { Layout } from "../components/Layout";
import { Products } from "../components/Products";


const products = [
  {
    id: 1,
    title: "Galleta Red Velvet",
    price: 1500,
    description: "Suave, esponjosa y con un delicado sabor a cacao...",
    category: "galletas",
    image: "https://tse1.mm.bing.net/th/id/OIP.lvTzW2PkyNh0vsgU92LYGgHaJQ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 2,
    title: "Galleta Clasica",
    price: 1300,
    description: "Clásica, crocante por fuera y suave por dentro...",
    category: "galleta",
    image: "https://tse1.mm.bing.net/th/id/OIP.lvTzW2PkyNh0vsgU92LYGgHaJQ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 3,
    title: "Galleta Frambi",
    price: 1500,
    description: "Masa suave, chocolate blanco y frambuesas...",
    category: "galleta",
    image: "https://tse1.mm.bing.net/th/id/OIP.lvTzW2PkyNh0vsgU92LYGgHaJQ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 4,
    title: "Lemon Pie",
    price: 7000,
    description: "Base crocante, relleno de limón y merengue...",
    category: "tarta",
    image: "https://tse1.mm.bing.net/th/id/OIP.lvTzW2PkyNh0vsgU92LYGgHaJQ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 5,
    title: "Appel Crumble",
    price: 6000,
    description: "Manzanas especiadas con crumble crocante...",
    category: "tarta",
    image: "https://tse1.mm.bing.net/th/id/OIP.lvTzW2PkyNh0vsgU92LYGgHaJQ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 6,
    title: "Cabsha",
    price: 6000,
    description: "Base de chocolate, dulce de leche y ganache...",
    category: "tarta",
    image: "https://tse1.mm.bing.net/th/id/OIP.lvTzW2PkyNh0vsgU92LYGgHaJQ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 7,
    title: "Marquise",
    price: 9000,
    description: "Brownie húmedo, dulce de leche y frutillas...",
    category: "torta",
    image: "https://tse1.mm.bing.net/th/id/OIP.lvTzW2PkyNh0vsgU92LYGgHaJQ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 8,
    title: "Carrot Cake",
    price: 10000,
    description: "Bizcocho de zanahoria con ganache de chocolate blanco...",
    category: "torta",
    image: "https://tse1.mm.bing.net/th/id/OIP.lvTzW2PkyNh0vsgU92LYGgHaJQ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 9,
    title: "Cheesecake de Frutos Rojos",
    price: 12000,
    description: "Cremoso con base de galleta crocante y frutos rojos...",
    category: "torta",
    image: "https://tse1.mm.bing.net/th/id/OIP.lvTzW2PkyNh0vsgU92LYGgHaJQ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 10,
    title: "Tiramisu",
    price: 15000,
    description: "Vainillas con café, mascarpone y cacao amargo...",
    category: "torta",
    image: "https://tse1.mm.bing.net/th/id/OIP.lvTzW2PkyNh0vsgU92LYGgHaJQ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  }
]

const Home = () => {

  const fetchingProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products", { method: "POST" })
    console.log(response)

    fetchingProducts()
  }

  return (
    <Layout>
      {/* Presentación de la tienda */}
      <section>
        <h1>Dulce Encanto 🍰</h1>
        <p>
          Bienvenidos a <strong>Dulce Encanto</strong>, una tienda de postres artesanales donde cada receta
          está hecha con dedicación, amor y los mejores ingredientes. Nuestro objetivo es simple: endulzar
          tu día y acompañarte en tus momentos más especiales con sabores que te hagan sonreír.
        </p>
        <p>
          Desde tartas clásicas y brownies húmedos hasta cupcakes decorados y opciones sin azúcar, tenemos
          algo para cada gusto y ocasión. Ya sea que estés buscando darte un gusto, sorprender a alguien o
          celebrar un evento, en Dulce Encanto vas a encontrar ese toque dulce que estás buscando.
        </p>
        <p>
          Hacemos envíos a domicilio y también tomamos pedidos personalizados para fiestas, cumpleaños y
          eventos especiales. Si querés conocer más sobre nosotros o hacer tu pedido, te invitamos a recorrer
          nuestra tienda virtual.
        </p>
      </section>

      {/* Sección de destacados (estáticos) */}
      <section>
        <h2>Favoritos de la casa</h2>

        <div>
          <div>
            <img src="https://via.placeholder.com/300x200.png?text=Cheesecake" alt="Cheesecake" />
            <h3>Cheesecake de Frutilla</h3>
            <p>Cremoso, con base crocante y topping de fruta natural.</p>
          </div>

          <div>
            <img src="https://via.placeholder.com/300x200.png?text=Brownie" alt="Brownie" />
            <h3>Brownies Tentación</h3>
            <p>Pura intensidad de chocolate con nueces crocantes.</p>
          </div>

          <div>
            <img src="https://via.placeholder.com/300x200.png?text=Cupcakes" alt="Cupcakes" />
            <h3>Cupcakes Arcoíris</h3>
            <p>Coloridos y esponjosos, ideales para fiestas.</p>
          </div>
        </div>
      </section>

      {/* Sección reservada para productos dinámicos */}
      <section className="products-section">
        <h2>Nuestra carta de postres</h2>
        <p>
          Estas son todas las delicias que tenemos disponibles actualmente. Podés mirar, elegir y hacer tu
          pedido directamente desde esta página.
        </p>
        <div>
          {
            products.map(product => (
            <Products key={product.id} products={product} />
            ))
          }
        </div>
      </section>

      {/* Sección final "Sobre nosotros" */}
      <section>
        <h2>Sobre nosotros</h2>
        <p>
          Dulce Encanto nació como un pequeño emprendimiento familiar con el sueño de llevar felicidad a
          través de los sabores. Hoy, seguimos horneando con la misma pasión que cuando empezamos, cuidando
          cada detalle y apostando por la calidad en cada ingrediente.
        </p>
        <p>
          Gracias por elegirnos para ser parte de tus momentos dulces. Si tenés dudas, consultas o querés un
          pedido personalizado, no dudes en contactarnos.
        </p>
      </section>
    </Layout>
  );
};

export { Home };