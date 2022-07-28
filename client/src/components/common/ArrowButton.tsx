import {FaArrowLeft, FaArrowRight} from "react-icons/fa"
import React, { FunctionComponent } from "react";

interface Props {
    direction: 'left' | 'right'
    disabled?: boolean
    // styles
    
}

const ArrowButton: FunctionComponent<Props> = (props:Props) => {
  return (
    <button className='rounded-full'>
      {props.direction === 'left' ? <FaArrowLeft /> : <FaArrowRight />}
    </button>
  );
};

export { ArrowButton };
