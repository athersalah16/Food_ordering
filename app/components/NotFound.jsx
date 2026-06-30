import { faX } from "@fortawesome/free-solid-svg-icons/faX";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NotFound() {
  return (
    <div className="flex min-h-screen justify-center items-center flex-col w-full ">
      <div className="w-20 h-20 flex justify-center items-center font-bold text-2xl text-white bg-amber-600 rounded-full">
        <FontAwesomeIcon icon={faX} />
      </div>
      <p className="text-orange-500 text-2xl">Item Not Found</p>
    </div>
  );
}

export default NotFound;
