"use client"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from 'next/navigation';
import { useSearchParams } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

export default function SurveiRekreasi () {
    const router = useRouter()
    const [a,setA] = useState()
    const [b,setB] = useState()
    const [c,setC] = useState()
    const searchParams = useSearchParams();
    const query = searchParams.get('id');

    const sendData = {
        id : query,
        a : a,
        b : b,
        c : c,
      }   

      function Sebelumnya(){
        router.push(`/survei/umum/pendidikan?id=${query}`)
    }

    async function rekreasi(){
        const send = await axios.post("/api/survei/rekreasi",sendData)
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

                router.push(`/survei/data_pengunjung?id=${query}`)
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
    //     C : '',
    // });

    // const handleValueChange = (question, selectedValue) => {
    //     setValue((prevValues) => ({
    //       ...prevValues,
    //       [question]: selectedValue,
    //     }));
    // };
    
    return (
        <div className="relative my-[200px] flex items-center justify-center">
            <div className="xl:w-[980px] lg:w-[980px] md:w-[780px] xl:h-[630px] lg:h-[630px] md:h-[630px] h-[780px] w-[400px] py-[30px] px-[20px] bg-white shadow-xl border-2 border-bg-btn-orangeHover flex items-center">
                <div className="xl:w-[980px] lg:w-[980px] md:w-[780px] w-[355px]">
                    <h1 className="text-center text-[28px] font-bold">SURVEI UMUM</h1>
                    <h1 className="text-[18px] font-medium mt-3">VIII. REKREASI</h1>
                    <p>Isi dan lengkapi pertanyaan pertanyaan berikut ini.</p>
                    <div className="line w-full h-[5px] bg-bg-btn-orangeHover my-2 mb-3"></div>
                    <div className="pertanyaan">
                        <div className="mb-3">
                            <label>A. Sarana rekreasi yang ada di sekitar masyarakat:</label>
                            <div className="ms-5">
                                <input type="radio" id="Ada" value="Ada" name="sarana_rekreasi" onChange={(e)=> setA(e.target.value)}/><label htmlFor="Ada">Ada</label>
                            </div>
                            <div className="ms-5">
                                <input type="radio" id="TidakAda" value="TidakAda" name="sarana_rekreasi" onChange={(e)=> setA(e.target.value)}/><label htmlFor="TidakAda">Tidak Ada</label>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label>B. Apakah keluarga rutin melakukan rekreasi untuk mengurangi tingkat stress:</label>
                            <div className="ms-5">
                                <input type="radio" id="Ya" value="Ya" name="rekreasi_keluarga" onChange={(e)=> setB(e.target.value)}/><label htmlFor="Ya">Ya</label>
                            </div>
                            <div className="ms-5">
                                <input type="radio" id="Tidak" value="Tidak" name="rekreasi_keluarga" onChange={(e)=> setB(e.target.value)}/><label htmlFor="Tidak">Tidak</label>
                            </div>
                        </div>
                        <div>
                            <label>C. Bagaimana keluarga memanfaatkan waktu luang:</label>
                            <div className="ms-5">
                                <input type="radio" id="Jalan-jalan" value="Jalan-jalan" name="waktu_luang" onChange={(e)=> setC(e.target.value)}/><label htmlFor="Jalan-jalan">Jalan-jalan</label>
                            </div>
                            <div className="ms-5">
                                <input type="radio" id="Olahraga" value="Olahraga" name="waktu_luang" onChange={(e)=> setC(e.target.value)}/><label htmlFor="Olahraga">Olahraga</label>
                            </div>
                            <div className="ms-5">
                                <input type="radio" id="BersamaKeluarga" value="BersamaKeluarga" name="waktu_luang" onChange={(e)=> setC(e.target.value)}/><label htmlFor="BersamaKeluarga">Berkumpul bersama anggota keluarga</label>
                            </div>
                            <div className="ms-5">
                                <input type="radio" id="Tidur" value="Tidur" name="waktu_luang" onChange={(e)=> setC(e.target.value)}/><label htmlFor="Tidur">Tidur</label>
                            </div>
                            <div className="ms-5">
                                <input type="radio" id="MenontonTV" value="MenontonTV" name="waktu_luang" onChange={(e)=> setC(e.target.value)}/><label htmlFor="MenontonTV">Menonton TV</label>
                            </div>
                        </div>
                    </div>
                    <div className="my-[20px] grid grid-cols-12">
                        <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12 flex justify-center">
                            <button onClick={(e)=>{e.preventDefault(); Sebelumnya()}} className="bg-bg-blueLight hover:bg-bg-blueDark text-[16px] font-semibold py-4 xl:px-[165px] lg:px-[165px] md:px-[120px] px-[125px] xl:mb-0 lg:mb-0 md:mb-0 mb-3">SEBELUMNYA</button>
                        </div>
                        <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12 flex justify-center">
                            <button onClick={(e)=>{e.preventDefault(); rekreasi()}} className="bg-bg-greenLight hover:bg-bg-greenDark text-[16px] font-semibold py-4 xl:px-[185px] lg:px-[185px] md:px-[147px] px-[147px] xl:ms-3 lg:ms-3 md:ms-3 ms-0">SUBMIT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}