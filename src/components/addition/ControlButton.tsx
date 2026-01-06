import React from 'react'

export interface ControlButtonProps {
    id?: string;
    className?: string;
    text: string;
    onClick: () => void;
}

const ControlButton = (props: ControlButtonProps) => {
  const { text, className, onClick } = props;

  return (
    <button className={className} onClick={onClick}>{text}</button>
  )
}

export default ControlButton;