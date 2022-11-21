import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";

const endpoint = 'http://localhost:8000/api/vehiculos/'

const EditVehiculo = () => {
    const [tipoVehiculo, setTipoVehiculo] = useState('')
    const [cantidadRuedas, setCantidadRuedas] = useState(0)
    const [marca, setMarca] = useState('')
    const [modelo, setModelo] = useState('')
    const [patente, setPatente] = useState('')
    const [numeroChasis, setNumeroChasis] = useState('')
    const [ kmsRecorridos, setKmsRecorridos ] = useState(0)
    const [status, setStatus ] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${endpoint}${id}`,{
            tipoVehiculo: tipoVehiculo,
            cantidadRuedas: cantidadRuedas,
            marca: marca, modelo: modelo,
            patente: patente,
            numeroChasis: numeroChasis,
            kmsRecorridos: kmsRecorridos,
            status: status})
        navigate('/')
    }
    
    useEffect( () =>{
        const getProductById = async () => {
            const response = await axios.get(`${endpoint}${id}`)

            setTipoVehiculo(response.data.tipoVehiculo);
            setCantidadRuedas(response.data.cantidadRuedas);
            setMarca(response.data.marca);
            setModelo(response.data.modelo);
            setPatente(response.data.modelo);
            setNumeroChasis(response.data.numeroChasis);
            setKmsRecorridos(response.data.kmsRecorridos);
            setStatus(response.data.status);
        }
        getProductById()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] )

    return (
        <div>
        <h3>Editar Vehiculo</h3>
        <form onSubmit={update}>
        <div className='mb-3'>
                <label className='form-label'>Tipo Vehiculo</label>
                <input 
                    value={tipoVehiculo}
                    onChange={ (e)=> setTipoVehiculo(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>cantidad Ruedas</label>
                <input 
                    value={cantidadRuedas}
                    onChange={ (e)=> setCantidadRuedas(e.target.value)}
                    type='number'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Marca</label>
                <input 
                    value={marca}
                    onChange={ (e)=> setMarca(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Modelo</label>
                <input 
                    value={modelo}
                    onChange={ (e)=> setModelo(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Patente</label>
                <input 
                    value={patente}
                    onChange={ (e)=> setPatente(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Numero Chasis</label>
                <input 
                    value={numeroChasis}
                    onChange={ (e)=> setNumeroChasis(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>kms Recorridos</label>
                <input 
                    value={kmsRecorridos}
                    onChange={ (e)=> setKmsRecorridos(e.target.value)}
                    type='number'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Status</label>
                <input 
                    value={status}
                    onChange={ (e)=> setStatus(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <button type='submit' className='btn btn-primary'>Actualizar</button>
        </form>
    </div>
    )
}

export default EditVehiculo