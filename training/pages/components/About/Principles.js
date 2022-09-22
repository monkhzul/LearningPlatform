import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import flag from '../../../images/principle/flag.png'
import flower from '../../../images/principle/flower.png'
import hand from '../../../images/principle/hand.png'
import heart from '../../../images/principle/heart.png'
import light from '../../../images/principle/light.png'
import star from '../../../images/principle/star.png'
import thumbup from '../../../images/principle/thumbup.png'
import Layout from '../Layout/Layout'
import principle from '../../../styles/Principles.module.css'

export default function Principles() {
  return (
    <Layout>
        <Head>
            <title>Үнэт зүйл, Баримтлах зарчим</title>
        </Head>

        <h5 className='p-2 border-b text-center my-4'>Үнэт зүйлс</h5>

        <div className="p-2 flex flex-wrap justify-center">
            
            <div className={`${principle.principles} w-full md:w-[45%] xl:w-[30%] flex justify-center items-center p-2 my-4 mx-3`}>
                <div className={`border`}>
                    <div className={`${principle.image} bg-[#4c4c4e] p-2`}>
                    <Image 
                        src={star}
                        className={`p-4`}
                    />
                    </div>
                </div>
                <div className="pl-5 flex flex-col justify-center leading-tight text-sm">
                    <h5>Мэргэшсэн өндөр чадавхи</h5>
                    <p>Мэргэжлийн өндөр ур чадвартай, өөрийгөө болон бусдыг байнга хөгжүүлдэг</p>
                </div>
            </div>

            <div className={`${principle.principles} w-full md:w-[45%] xl:w-[30%] flex justify-center items-center p-2 my-4 mx-3`}>
                <div className={`border`}>
                    <div className={`${principle.image} bg-[#a7cf46] p-2`}>
                    <Image 
                        src={thumbup}
                        className={`p-4`}
                    />
                    </div>
                </div>
                <div className="pl-5 flex flex-col justify-center leading-tight text-sm">
                    <h5>Багийн сэтгэлгээ</h5>
                    <p>Харилцан итгэлцэл, хүндлэл, эерэг дулаан харьцааг буй болгон хамт олонтойгоо үр дүнтэй хамтран ажилладаг</p>
                </div>
            </div>

            <div className={`${principle.principles} w-full md:w-[45%] xl:w-[30%] flex justify-center items-center p-2 my-4 mx-3`}>
                <div className={`border`}>
                    <div className={`${principle.image} bg-[#ed2d5a] p-2`}>
                    <Image 
                        src={hand}
                        className={`p-4`}
                    />
                    </div>
                </div>
                <div className="pl-5 flex flex-col justify-center leading-tight text-sm">
                    <h5>Манлайлал</h5>
                    <p>Цаашдын ахиц, хөгжлийн боломжийг олж тодорхойлж, бусдадаа ойлгуулан дэмжлэгийг нь авч, тэднийг урам зоригжуулан, хамтдаа бодит үйл хэрэг болгодог</p>
                </div>
            </div>

            <div className={`${principle.principles} w-full md:w-[45%] xl:w-[30%] flex justify-center items-center p-2 my-4 mx-3`}>
                <div className={`border`}>
                    <div className={`${principle.image} bg-[#9a2c56] p-2`}>
                    <Image 
                        src={heart}
                        className={`p-4`}
                    />
                    </div>
                </div>
                <div className="pl-5 flex flex-col justify-center leading-tight text-sm">
                    <h5>Өөриймсөг үзэл</h5>
                    <p>Ажилдаа болон компанидаа өөриймсөг хандаж, сэтгэл гарган ажилладаг</p>
                </div>
            </div>

            <div className={`${principle.principles} w-full md:w-[45%] xl:w-[30%] flex justify-center items-center p-2 my-4 mx-3`}>
                <div className={`border`}>
                    <div className={`${principle.image} bg-[#f58733] p-2`}>
                    <Image 
                        src={light}
                        className={`p-4`}
                    />
                    </div>
                </div>
                <div className="pl-5 flex flex-col justify-center leading-tight text-sm">
                    <h5>Санал санаачилга</h5>
                    <p>Хөгжүүлэх, сайжруулах, асуудлыг шийдвэрлэх бүтээлч шийдэл, санал санаачилгыг байнга гаргадаг</p>
                </div>
            </div>

            <div className={`${principle.principles} w-full md:w-[45%] xl:w-[30%] flex justify-center items-center p-2 my-4 mx-3`}>
                <div className={`border`}>
                    <div className={`${principle.image} bg-[#26ade3] p-2`}>
                    <Image 
                        src={flag}
                        className={`p-4`}
                    />
                    </div>
                </div>
                <div className="pl-5 flex flex-col justify-center leading-tight text-sm">
                    <h5>Үнэнч шударга зарчим</h5>
                    <p>Монгол Улсын хууль журмыг алхам тутамдаа дээдэлдэг, аливаад үнэнч шударга ханддаг, М-Си-Эс группийн ёс зүйн дүрмийг өдөр тутам мөрдлөг болгодог</p>
                </div>
            </div>

            <div className={`${principle.principles} w-full md:w-[45%] xl:w-[30%] flex justify-center items-center p-2 my-4 mx-3`}>
                <div className={`border`}>
                    <div className={`${principle.image} bg-[#208d43] p-2`}>
                    <Image 
                        src={flower}
                        className={`p-4`}
                    />
                    </div>
                </div>
                <div className="pl-5 flex flex-col justify-center leading-tight text-sm">
                    <h5>Тогтвортой хөгжлийн зарчим</h5>
                    <p>Нийгэмдээ болон байгаль орчиндоо ээлтэй байхыг эрхэмлэдэг, хөдөлмөрийн аюулгүй байдлыг эн тэргүүнд хангаж ажилладаг</p>
                </div>
            </div>
        </div>

    </Layout>
  )
}
