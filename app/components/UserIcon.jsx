import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
function UserIcon() {
  const user = false

  return (
    <div>
      {user ? (
        <FontAwesomeIcon icon={faUser} />
      ) : (
        <button className="rounded-full cursor-pointer w-20 h-8 bg-orange-500 text-white hover:bg-orange-600">
          Sign In
        </button>
      )}
    </div>
  );
}

export default UserIcon;
