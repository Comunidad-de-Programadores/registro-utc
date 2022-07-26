export const DeviceCard = ({ device = {}, handleDelete = () => {}, handleEdit = () => {} }) => {
  return (
    <div className='card mb-3 shadow-lg p-3' key={device.id}>
      <div className='card-body'>
        <div className='d-flex justify-content-end align-items-end mb-3'>
          <button
            className='btn btn-primary mx-3'
            onClick={() => {
              handleEdit(device);
            }}>
            Editar
          </button>
          <button
            className='btn btn-danger mx-3'
            onClick={() => {
              handleDelete(device);
            }}>
            Eliminar
          </button>
        </div>
        <h5 className='card-title'>{device.name}</h5>
        <p className='card-text'>
          <span className='font-weight-bold'>Marca:</span> {device.brand}
          <br />
          <span className='font-weight-bold'>Modelo:</span> {device.model}
          <br />
          <span className='font-weight-bold'>No. de serie:</span> {device.serialNumber}
        </p>
      </div>
    </div>
  );
};
