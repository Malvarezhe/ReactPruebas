import React, {Fragment, useState} from 'react'; //Al poner , Fragment evito el contenedor div al inicio. 
import Carrito from './components/Carrito';
import Footer from './components/Footer';
import Header from './components/Header';
import Producto from './components/Producto';

function App() {

  //Crear listado de productos
  //Array Destructuring => [a, b] = [10, 20]
  //const [counter, setCounter] = useState(valor-inicial);
  const [productos, guardarProductos] = useState([
    {id: 1, nombre: 'Camisa ReactJS', precio: 50},
    {id: 2, nombre: 'Camisa VueJS', precio: 40},
    {id: 3, nombre: 'Camisa Node.Js', precio: 30},
    {id: 4, nombre: 'Camisa Angular', precio: 20}
  ]);

  //State para un carrito de compras: (state = Controla si un usario esta utenticado, los registros que puede ver o para un formulario cuando se va llenando por ejemplo )
  const [carrito, agregarProducto] = useState([]);

  //Obtener la fecha
  const fecha = new Date().getFullYear();

  return (
    <Fragment>

      <Header
        titulo = "Warbug Store"
        />

      <h1>Lista de Productos</h1>
      
      {productos.map(producto => (

      <Producto
        //props (que significa propiedades) con datos y devuelve un elemento React.
        key = {producto.id}
        producto = {producto}
        productos = {productos}
        carrito = {carrito}
        agregarProducto = {agregarProducto}
      />
      ))}

      <Carrito 
        carrito = {carrito}
        agregarProducto = {agregarProducto}
      />


      <Footer
        fecha = {fecha}
      />

    </Fragment>
  );
}

export default App;
