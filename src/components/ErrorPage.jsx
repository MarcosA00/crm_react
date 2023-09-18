import { useRouteError, useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();

  console.log(error.message);
  
  return(
    <div className="space-y-8">
      <div className="flex justify-end">
        <button
          className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
          onClick={ () => navigate('/') }
        >
          Volver
        </button>
      </div>

      <h1 className="text-center text-6xl font-extrabold mt-20 text-blue-900">CRM - CLientes</h1>

      <p className="text-center">Hubo un error</p>
      <p className="text-center">{ error.statusText || error.message }</p>
    </div>
  )
}