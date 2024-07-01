import React from 'react';

const Input = ({...props}) => {
  let styleInput = 'outline-none p-3 text-color-azul bg-transparent placeholder:text-color-azul font-nunito text-lg border border-color-azul rounded-md w-[27rem]'
  if(props.type === 'checkbox'){
    styleInput= ` w-5 h-5`
  }

  return(
    <input
      type={props.type}
      className={props.className || styleInput}
      placeholder={props.placeholder}
      name={props.name}
      onChange={props.onChange}
      autoComplete="off" 
      value={props.value}
      checked={props.checked}
    >
    </input>
  )
}

export { Input }