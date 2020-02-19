import React from 'react';

const Shape = (props) => {
  // console.log (props);  // Inspecting the type of properties on console
  const shape = props.shape;
  const selectShape = props.selectShape;
  return (
    <div className = {shape} onClick ={() => selectShape(shape)} />
  )
}
export default Shape;
