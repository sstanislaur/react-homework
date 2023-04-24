import React, {FC, useEffect} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {ICar} from "../interfaces/car.interface";
import {joiResolver} from '@hookform/resolvers/joi';
import {carValidator} from "../validators/car.validator";
import {carService} from "../services/car.service";
import {IUseState} from "../types/useState.type";

interface IProps {
    setOnChange: IUseState<boolean>;
    carFormUpdate: ICar | null;
    setCarForUpdate: IUseState<ICar | null>;
}

const CarForm: FC<IProps> = ({setOnChange, carFormUpdate, setCarForUpdate}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm<ICar>({
        mode: 'all',
        resolver: joiResolver(carValidator)
    });

    useEffect(() => {
        if (carFormUpdate) {
            Object.entries(carFormUpdate).forEach(([key, value]) => {
                if (key !== 'id') {
                    setValue(key as keyof ICar, value, {shouldValidate: true})
                }
            })
        }
    }, [carFormUpdate])


    const save: SubmitHandler<ICar> = async (car) => {
        await carService.create(car);
        setOnChange(prevState => !prevState)
        reset()
    };
    const update: SubmitHandler<ICar> = async (car) => {
        await carService.updateById(carFormUpdate!.id, car)
        setOnChange(prevState => !prevState)
        reset()
        setCarForUpdate(null)
    };
    return (
        <div>
            <form onSubmit={handleSubmit(carFormUpdate ? update : save)}>
                <input type='text' placeholder={'brand'} {...register('brand')}/>
                <input type='text' placeholder={'price'} {...register('price')}/>
                <input type='text' placeholder={'year'} {...register('year')}/>
                <button disabled={!isValid}>{carFormUpdate ? 'Update' : 'Save'}</button>
            </form>
            <div>
                {errors.brand && <div>{errors.brand.message}</div>}
                {errors.price && <div>{errors.price.message}</div>}
                {errors.year && <div>{errors.year.message}</div>}
            </div>
        </div>
    );
};

export default CarForm;