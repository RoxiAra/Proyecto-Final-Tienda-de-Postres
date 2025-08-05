import { Layout } from "../components/Layout";

const Dashboard = () => {
  return (
    <Layout>
      <section>
        <h1>Panel de administración</h1>
        <p>Desde aquí podés cargar nuevos productos a la tienda.</p>

        <form>
          <div>
            <label>Nombre del producto</label>
            <input type="text" name="nombre" />
          </div>

          <div>
            <label>Descripción</label>
            <textarea name="descripcion" rows="4" />
          </div>

          <div>
            <label>Precio</label>
            <input type="number" name="precio" />
          </div>

          <div>
            <button type="submit">Guardar producto</button>
          </div>
        </form>
      </section>
    </Layout>
  );
};

export { Dashboard };