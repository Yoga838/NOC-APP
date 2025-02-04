"use client"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from 'next/navigation';
import { useSearchParams } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

export default function SurveiTransportasi () {
    const router = useRouter()
    const [a,setA] = useState()
    const [b,setB] = useState()
    const searchParams = useSearchParams();
    const query = searchParams.get('id');

    const sendData = {
        id : query,
        a : a,
        b : b,
      }   

      function Sebelumnya(){
        router.push(`/survei/umum/ekonomi?id=${query}`)
    }

      async function transportasi_keamanan(){
        const send = await axios.post("/api/survei/transportasiKeamanan",sendData)
        console.log(send)
        if (send.data.status === "success"){
            toast('✔️ berhasil upload data', {
                position: "top-right",
                autoClose: 0.1,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress:1,
                theme: "light",
                });

                router.push(`/survei/umum/politik_pemerintahan?id=${query}`)
        } 
        else{
          toast('❌ gagal upload data', {
              position: "top-right",
              autoClose: 0.1,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: false,
              progress:1,
              theme: "light",
              });
        }
    }

    // const [value, setValue] = useState({
    //     A : '',
    //     B : '',
    // });

    // const handleValueChange = (question, selectedValue) => {
    //     setValue((prevValues) => ({
    //       ...prevValues,
    //       [question]: selectedValue,
    //     }));
    // };

    return (
        <div className="relative my-[200px] flex items-center justify-center">
            <div className="xl:w-[980px] lg:w-[980px] md:w-[780px] xl:h-[540px] lg:h-[540px] md:h-[540px] h-[670px] w-[400px] py-[30px] px-[20px] bg-white shadow-xl border-2 border-bg-btn-orangeHover flex items-center">
                <div className="xl:w-[980px] lg:w-[980px] md:w-[780px] w-[355px]">
                    <h1 className="text-center text-[28px] font-bold">SURVEI UMUM</h1>
                    <h1 className="text-[18px] font-medium mt-3">IV. TRANSPORTASI DAN KEAMANAN</h1>
                    <p>Isi dan lengkapi pertanyaan pertanyaan berikut ini.</p>
                    <div className="line w-full h-[5px] bg-bg-btn-orangeHover my-2 mb-3"></div>
                    <div className="pertanyaan">
                        <div className="mb-3">
                            <label>A. Jenis transportasi yang dipakai keluarga ke pelayanan kesehatan:</label>
                            <div className="ms-5">
                                <input type="radio" id="Pribadi" value="Pribadi" name="jenis_transportasi" onChange={(e)=> setA(e.target.value)}/><label htmlFor="Pribadi">Kendaraan Pribadi (sepeda motor, mobil)</label>
                            </div>
                            <div className="ms-5">
                                <input type="radio" id="Umum" value="Umum" name="jenis_transportasi" onChange={(e)=> setA(e.target.value)}/><label htmlFor="Umum">Kendaraan Umum (angkot, taxi, ojek, dll)</label>
                            </div>
                            <div className="ms-5">
                                <input type="radio" id="Desa" value="Desa" name="jenis_transportasi" onChange={(e)=> setA(e.target.value)}/><label htmlFor="Desa">Kendaraan Desa (ambulans)</label>
                            </div>
                        </div>
                        <div>
                            <label>B. Pelayanan perlindungan yang tersedia di masyarakat:</label>
                            <div className="ms-5">
                                <input type="radio" id="Ambulance" value="Ambulance" name="pelayanan" onChange={(e)=> setB(e.target.value)}/><label htmlFor="Ambulance">Ambulance desa 24 Jam</label>
                            </div>
                            <div className="ms-5">
                                <input type="radio" id="PosKamling" value="PosKamling" name="pelayanan" onChange={(e)=> setB(e.target.value)}/><label htmlFor="PosKamling">Pos Kamling</label>
                            </div>
                            <div className="ms-5">
                                <input type="radio" id="Polsek" value="Polsek" name="pelayanan" onChange={(e)=> setB(e.target.value)}/><label htmlFor="Polsek">Polsek/Polres</label>
                            </div>
                        </div>
                    </div>
                    <div className="my-[20px] grid grid-cols-12">
                        <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12 flex justify-center">
                            <button onClick={(e)=>{e.preventDefault(); Sebelumnya()}} className="bg-bg-blueLight hover:bg-bg-blueDark text-[16px] font-semibold py-4 xl:px-[165px] lg:px-[165px] md:px-[120px] px-[125px] xl:mb-0 lg:mb-0 md:mb-0 mb-3">SEBELUMNYA</button>
                        </div>
                        <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12 flex justify-center">
                            <button onClick={(e)=>{e.preventDefault(); transportasi_keamanan()}}  className="bg-bg-btn-orangeLight hover:bg-bg-btn-orangeHover text-[16px] font-semibold py-4 xl:px-[165px] lg:px-[165px] md:px-[120px] px-[120px] xl:ms-3 lg:ms-3 md:ms-3 ms-0">SELANJUTNYA</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}