import { useLoaderData } from "react-router-dom";
import Customer from "../components/Customer";

export function loader() {
  const customers = [
    {
        id: 1,
        name: 'Juan',
        phone: 102013313,
        email: "juan@juan.com",
        company: 'Codigo Con Juan'
    },
    {
        id: 2,
        name: 'Karen',
        phone: 138198313,
        email: "karen@juan.com",
        company: 'Codigo Con Juan'
    },
    {
        id: 3,
        name: 'Josue',
        phone: 31983913,
        email: "josue@juan.com",
        company: 'Codigo Con Juan'
    },
    {
        id: 4,
        name: 'Miguel',
        phone: 319381983,
        email: "miguel@juan.com",
        company: 'Codigo Con Juan'
    },
    {
        id: 5,
        name: 'Pedro',
        phone: 1398198938,
        email: "pedro@juan.com",
        company: 'Codigo Con Juan'
    },
  ];

  return customers;
}

function Index() {
  const customers = useLoaderData();

  return (
    <div>
      <h1 className="font-black text-4xl text-blue-900">Clientes</h1>

      <p className="mt-3">Administra tus clientes</p>

      { customers.length ? (
          <table className="w-full bg-white shadow mt-5 table-auto">
            <thead className="bg-blue-800 text-white">
              <tr>
                <th className="p-2">Clientes</th>
                <th className="p-2">Contactos</th>
                <th className="p-2">Acciones</th>
              </tr>
            </thead>

            <tbody className="align-middle">
              { customers.map(customer => (
                <Customer 
                  customer = { customer }
                  key = { customer.id }
                />
              )) }
            </tbody>
          </table>
        ) : (
          <p className="text-center mt-10">No Hay Clientes Aun</p>
        )
      }
    </div>
  )
}

export default Index