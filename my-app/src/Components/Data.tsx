import React from 'react';

type DataProps = {
	message: string;
	number: number;
}

function Data({message, number}: DataProps) {
  return (
    <div>
    	Data {message} : {number}
    </div>
  );
}

export default Data;
