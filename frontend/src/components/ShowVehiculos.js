import React,{useEffect,useState} from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';
import { useNavigate, useParams } from "react-router-dom";

const endpoint = 'http://localhost:8000/api';

const ShowVehiculos = () =>{

    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [statusButton, setStatusButton] = useState('');
    const navigate = useNavigate()
    const {id} = useParams()

    const [ vehiculos, setVehiculos ] = useState([]);
    useEffect(()=>{

            if( marca!=='' && modelo!==''){
              filterMarcaModelo();  
            }else{
                getAllVehiculos() 
            }
            
    
   
    })
    

    const getAllVehiculos = async () => {
        const response = await axios.get(`${endpoint}/vehiculos`)
  
                setVehiculos(response.data)
     
    
    }
    const deleteVehiculo = async (id) => {
        console.log(id);
         await axios.delete(`${endpoint}/vehiculos/${id}`);
         getAllVehiculos();
    }
    const darAltaBajaVehiculo = async (id,statusBoton) => {
        setStatusButton(statusBoton)
        await axios.put(`${endpoint}/vehiculos/status/${id}`,{status: statusBoton})
        navigate('/')
    }
    const filterMarcaModelo = async (e) =>{
        const response = await axios.post(`${endpoint}/vehiculos/filter`,{marca:marca,modelo:modelo})
        setVehiculos(response.data)
   
    }
    return (<div>
                <div className='d-grid gap-2'>
            <Link to="/create" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Nuevo Vehiculo</Link>
        </div>
        <div className='mb-3'>
                <h1>{marca+' '+modelo}</h1>       
                <label className='form-label'>Marca</label>
                <input 
                
                value = {marca}
                onChange = {(e) => setMarca(e.target.value)} 
                
                />

                <label className='form-label'>Modelo</label>
                <input 
                value = {modelo}
                onChange = {(e) => setModelo(e.target.value)}
                />
            </div>
        
        <div class="table-responsive">
        <table className='table table-striped'>
            <thead className='bg-primary text-white'>
                <tr>
                    <th>tipoVehiculo</th>
                    <th>cantidadRuedas</th>
                    <th>marca</th>
                    <th>modelo</th>
                    <th>patente</th>
                    <th>numeroChasis</th>
                    <th>kmsRecorridos</th>
                    <th>status</th>
                    <th>lijlk</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                { vehiculos.map( (vehiculo) => (
                 
                    <tr key={vehiculo.id}>
                        <td> {vehiculo.tipoVehiculo} </td> 
                        <td> {vehiculo.cantidadRuedas} </td> 
                        <td> {vehiculo.marca} </td>    
                        <td> {vehiculo.modelo} </td>    
                        <td> {vehiculo.patente} </td>
                        <td> {vehiculo.numeroChasis} </td> 
                        <td> {vehiculo.kmsRecorridos} </td> 
                        <td> {vehiculo.status} </td>  
                        <td> {marca} </td>     
                        <td>
                            <Link to={`/edit/${vehiculo.id}`} className='btn btn-info'>Edit</Link>
                            <button onClick={ ()=>deleteVehiculo(vehiculo.id) } className='btn btn-danger'>Delete</button>
                            <button onClick={ ()=>darAltaBajaVehiculo(vehiculo.id, 'alta') } className='btn btn-success'>Alta</button>
                            <button onClick={ ()=>darAltaBajaVehiculo(vehiculo.id, 'baja')  }  className='btn btn-warning'>Baja</button>
                        </td>

                    </tr>
                    
                )) }
            </tbody>
        </table>
        </div>
    </div>);
}

export default ShowVehiculos;