import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/vehiculos'

const CreateVehiculo = () => {
    
    const [tipoVehiculo, setTipoVehiculo] = useState('')
    const [cantidadRuedas, setCantidadRuedas] = useState(0)
    const [marca, setMarca] = useState('')
    const [modelo, setModelo] = useState('')
    const [patente, setPatente] = useState('')
    const [numeroChasis, setNumeroChasis] = useState('')
    const [ kmsRecorridos, setKmsRecorridos ] = useState(0)
    const [status, setStatus ] = useState('')
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()

        await axios.post(endpoint, {tipoVehiculo: tipoVehiculo, cantidadRuedas: cantidadRuedas, marca: marca, modelo: modelo, patente: patente, numeroChasis: numeroChasis, kmsRecorridos: kmsRecorridos, status: status})
        navigate('/')
    }
    
  return (
    <div>
        <h3>Crear Vehiculo</h3>
       <form onSubmit={store}>
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
            <button type='submit' className='btn btn-primary'>Guardar</button>
        </form>
    </div>
  )
}

export default CreateVehiculo