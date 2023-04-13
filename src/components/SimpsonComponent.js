import React from "react";

const SimsponComponent = ({data: simpsons}) => {
    return (
        <div>
            {
                simpsons.map(value =>
                    <p>
                        <div>Name: {value.name} {value.surname}</div>
                        <div>Age: {value.age}</div>
                        <div>Info: {value.info}</div>
                        <div><img src={value.photo} alt=""/></div>
                    </p>)
            }
        </div>
    );
};
export default SimsponComponent