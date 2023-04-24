import {FC, useEffect, useState} from 'react';
import CarForm from "../components/CarForm";
import {Cars} from "../components/Cars";
import {ICar} from "../interfaces/car.interface";
import {carService} from "../services/car.service";
import {set} from "react-hook-form";

interface IProps {

}

const CarPage: FC<IProps> = () => {
    const [cars, setCars] = useState<ICar[]>([])
    const [onChange, setOnChange] = useState<boolean>(false);
    const [carFormUpdate, setCarForUpdate] = useState<ICar | null>(null);

    useEffect(() => {
        carService.getAll().then(value => value.data).then(value => setCars(value))
    }, [onChange])
    return (
        <div>
            <CarForm setOnChange={setOnChange} carFormUpdate={carFormUpdate} setCarForUpdate={setCarForUpdate}/>
            <hr/>
            <Cars cars={cars} setCarForUpdate={setCarForUpdate} setOnChange={setOnChange}/>
        </div>
    );
};

export {CarPage};