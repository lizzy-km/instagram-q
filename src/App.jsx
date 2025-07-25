import './App.css'
import ProtectedRoutes from './routes/ProtectedRoutes'
import {useDispatch, useSelector} from "react-redux";
import {setOpenModal} from "./services/slice/ModalSlice.js";
import {useInView} from "react-intersection-observer";

function App () {

    const {modalIsOpen, modalFun} = useSelector((state) => state.modal);

    const dispatch = useDispatch();

    const {ref, inView} = useInView()


    function onCancel () {
        dispatch(setOpenModal(false))
    }

    function onOk () {
        return modalFun()
    }

    return (<section className=' flex flex-col w-screen  h-screen  relative bg-white  '>
            <ProtectedRoutes/>

            <footer>

            </footer>
            {/*Modal */}
            {modalIsOpen && <section
                className=' flex flex-col w-screen h-screen justify-items-start items-center absolute top-0 left-0 bg-[#23242530] '>
                <div style={{
                    display: 'flex', marginTop: inView ? '2%' : 0, transition: ' all 0.3s ease ',
                }} ref={ref}
                     className='flex flex-col w-[350px] py-[1%] h-[220px] mt-0  bg-white shadow-lg rounded-lg justify-end items-start '>
                    {/*Title */}
                    {/*message */}

                    {/*Buttons */}
                    <div onClick={onCancel} className='flex w-full px-[10%] h-[40px] justify-between items-center  '>
                        <div
                            className={' w-[35%] h-full border-primary border rounded-xl  text-center flex justify-center items-center '}>
                            Cancel

                        </div>
                        <div onClick={onOk}
                             className={' w-[45%] h-full bg-primary rounded-xl text-center flex justify-center items-center text-white '}>
                            <p>
                                Confirm
                            </p>

                        </div>
                    </div>
                </div>

            </section>}
        </section>)
}

export default App
