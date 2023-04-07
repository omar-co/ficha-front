import React, {useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import TabsMenu from "./TabsMenu";
import BotonSiguiente from "./BotonSiguiente";
import { useHistory } from "react-router-dom";
import NavigationService from "../services/NavigationService";
import SweetAlert from "react-bootstrap-sweetalert";
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    FormControl, InputLabel, MenuItem, Select, TextField
} from "@material-ui/core";

function Pregunta({onSubmit, store}: {
    store: any
    onSubmit: SubmitHandler<any>;
}) {

    let history = useHistory();
    const {handleSubmit, register} = useForm();
    const [first, setFirst] = useState<string>("");
    const [second, setSecond] = useState<string>("");
    const [third, setThird] = useState<string>("");
    const [fourth, setFourth] = useState<string>("");
    const [fifth, setFifth] = useState<string>("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [thirdOptions, setThirdOptions] = useState();


    function goBack(e) {
        e.preventDefault();
        NavigationService.prev('pregunta');
        history.push(NavigationService.prevValue);
        window.scrollTo(0,0);
    }

    function handleThird(e) {
       setThird(e.target.value);

       if(Number(third) === 0) {
           handleClose()
       }
    }

    function handleThirdOptions(e) {

    }

    const AlertDialog = ({ open, setOpen }) => {
        const handleClose = () => {
            setOpen(false);
        };
        return (
            <div>
                <Dialog
                    open={open}
                    onClose={handleClose}
                >
                    <DialogTitle>
                        {"Tipo de gasto"}
                    </DialogTitle>
                    <DialogContent>
                        <FormControl>
                            <InputLabel htmlFor="max-width">Selecciona el tipo de gasto</InputLabel>
                            <Select
                                autoFocus
                                value={thirdOptions}
                                onChange={handleThirdOptions}
                                label="tipoDeGasto"
                                inputProps={{
                                    name: 'tipo-gasto',
                                    id: 'tipo-gasto',
                                }}
                            >
                                <MenuItem value={false as any}>Selecciona una opción</MenuItem>
                                <MenuItem value="1">Gasto favorable pero controvertido</MenuItem>
                                <MenuItem value="0">Efectos contradictorios</MenuItem>
                                <MenuItem value="2">Gasto favorable</MenuItem>
                            </Select>
                        </FormControl>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>NO</Button>
                        <Button onClick={handleClose} autoFocus>
                            YES
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }

    const handleClose = () => {
        setIsModalOpen(true)
    };

    return (
        <div className="row">
            <div className="col-md-3">
                <TabsMenu tag={'pregunta'}/>
            </div>
            <div className="col-md-9">
                <div className="row">
                    <form onChange={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="col-md-12">
                                <label className="control-label">Vinculación entre el Programa presupuestario (Pp) y los objetivos y metas ambientales plasmados en la política pública mediambiental</label>
                                <hr className="red"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <label htmlFor="directamente" className="control-label">
                                    ¿Cómo considera que es la contribución de las acciones sustantivas y de apoyo del Pp
                                    a la Política Nacional mediambiental (PROMARNAT, PNH, ENBIO o ENAC) de acuerdo con los objetivos seleccionados en las etapas previas?
                                </label>
                                <select className="form-control" {...register('directamente', {valueAsNumber: true})} defaultValue={store.directamente}>
                                    <option value="">Selecciona una opcion</option>
                                    <option value="1">Explícitamente/Directamente</option>
                                    <option value="0">Implícitamente/Indirectamente</option>
                                </select>
                                <br/>
                            </div>

                            <div className="col-md-12">
                                <label htmlFor="first" className="control-label">
                                    ¿Hay información suficiente para poder determinar el impacto ambiental del programa
                                    presupuestario?
                                </label>
                                <select defaultValue={first} onChange={(e) => setFirst(e.target.value)} className="form-control">
                                    <option value="">Selecciona una opcion</option>
                                    <option value="1">Si</option>
                                    <option value="0">No</option>
                                </select>
                                <br/>
                            </div>
                            { Number(first) === 1 && <div className="col-md-12">
                                <label htmlFor="second" className="control-label">
                                    ¿Tiene el programa presupuestario un impacto ambiental claro o participa directamente
                                    en la producción de bienes o servicios ambientales? ¿Es su objetivo prioritario
                                    proteger la biodiversidad, mejorar la calidad del aire o mejorar la calidad del
                                    agua?
                                </label>
                                <select className="form-control" onChange={(e) => setSecond(e.target.value)} defaultValue={second}>
                                    <option value="">Selecciona una opcion</option>
                                    <option value="1">Si</option>
                                    <option value="0">No</option>
                                </select>
                                <br/>
                            </div> }
                            { (second && Number(second) === 0) && <div className="col-md-12">
                                <label htmlFor="second" className="control-label">
                                    ¿Tiene el programa presupuestario un impacto indirecto favorable? ¿Es su objetivo
                                    secundario (indirecto) proteger la biodiversidad, mejorar la calidad del aire o
                                    mejorar la calidad del agua?
                                </label>
                                <select className="form-control" onChange={handleThird} defaultValue={third}>
                                    <option value="">Selecciona una opcion</option>
                                    <option value="1">Si</option>
                                    <option value="0">No</option>
                                </select>
                                <br/>
                            </div> }
                            { (third && Number(third) === 0) && <div className="col-md-12">
                                <label htmlFor="second" className="control-label">
                                    ¿Tiene el programa presupuestario algún efecto significativo sobre el medio ambiente?
                                </label>
                                <select className="form-control" onChange={(e) => setFourth(e.target.value)} defaultValue={fourth}>
                                    <option value="">Selecciona una opcion</option>
                                    <option value="1">Si</option>
                                    <option value="0">No</option>
                                </select>
                                <br/>
                            </div> }
                            { (fourth && Number(fourth) === 1) && <div className="col-md-12">
                                <label htmlFor="second" className="control-label">
                                    ¿Tiene el programa presupuestario algún impacto ambiental negativo o promueve
                                    comportamientos perjudiciales para el medio ambiente?
                                </label>
                                <select className="form-control" onChange={(e) => setFifth(e.target.value)} defaultValue={fifth}>
                                    <option value="">Selecciona una opcion</option>
                                    <option value="1">Si</option>
                                    <option value="0">No</option>
                                </select>
                                <br/>
                            </div>  }

                            <div className="row">
                                <div className="form-group col-md-6">
                                    <button className="btn btn-secondary" onClick={goBack}>Regresar</button>
                                </div>
                                <div className="form-group right col-md-6">
                                    <BotonSiguiente store={store}/>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {isModalOpen ? <AlertDialog open={isModalOpen} setOpen={setIsModalOpen} /> : null}
        </div>
    )
}

export default Pregunta;
