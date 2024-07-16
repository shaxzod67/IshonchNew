import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react"


export const Reyting = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });

    }, [])
    return (
        <div>
            <div className="container px-5 py-24 mx-auto " data-aos="fade-up"
                data-aos-duration="3000">
                <div className="flex flex-wrap -m-4 text-center">
                    <div className="p-4 sm:w-1/4 w-1/2">
                        <h2 className="title-font font-medium sm:text-4xl text-3xl text-[#050A30]">2.7K</h2>
                        <p className="leading-relaxed">O'quvchilar</p>
                    </div>
                    <div className="p-4 sm:w-1/4 w-1/2">
                        <h2 className="title-font font-medium sm:text-4xl text-3xl text-[#050A30]">45</h2>
                        <p className="leading-relaxed">Ustozlar</p>
                    </div>
                  <div className="p-4 sm:w-1/4 w-1/2">
                        <h2 className="title-font font-medium sm:text-4xl text-3xl text-[#050A30]">4</h2>
                        <p className="leading-relaxed">Fanlar</p>
                    </div>
                    <div className="p-4 sm:w-1/4 w-1/2">
                        <h2 className="title-font font-medium sm:text-4xl text-3xl text-[#050A30]">2</h2>
                        <p className="leading-relaxed">Filial</p>
                    </div>

                </div>
            </div>
        </div>
    )
}