import { useNavigate, Form, useLoaderData, useActionData, redirect } from "react-router-dom";
import { getCustomer, updateCustomer } from "../data/customers";
import FormNewCustomer from "../components/FormNewCustomer";
import Error from "../components/Error";

export async function loader({ params }) {
  const customer = await getCustomer(params.customerId);

  if(Object.values(customer).length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'Sin resultados'
    })
  } 

  return customer;
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const email = formData.get('email');

  // Validación.
  const errors = [];

  if(Object.values(data).includes('')) {
    errors.push('Todos los campos son obligatorios')
  }

  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

  if(!regex.test(email)){
    errors.push('El email no es valido');
  }

  // Retornar datos si hay errores.
  if(Object.keys(errors).length) {
    return errors;
  }

  // Actualizar cliente.

  await updateCustomer(params.customerId, data);

  return redirect('/');
}

function EditCustomer() {
  const navigate = useNavigate();
  const customer = useLoaderData();
  const errors = useActionData();

  return (
    <div>
      <h1 className="font-black text-4xl text-blue-900">Editar Cliente</h1>

      <p className="mt-3">Modifica los datos del cliente</p>

      <div className="flex justify-end">
        <button
          className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
          onClick={ () => navigate('/') }
        >
          Volver
        </button>
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">
        { errors?.length && errors.map((error, i) => <Error key={i}>{ error }</Error>) }

        <Form
          method="post"
          noValidate
        >
          <FormNewCustomer 
            customer = { customer }
          />

          <input 
            className="mt5 w-full bg-blue-800 p-3 uppercase text-white text-lg"
            type="submit" 
            value="Guardar Cambios"
          />
        </Form>
      </div>
    </div>
  )
}

export default EditCustomer