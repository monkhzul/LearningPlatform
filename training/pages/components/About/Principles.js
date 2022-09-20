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

        <div className="p-2 flex flex-wrap">
            
            <div className={`${principle.principles} w-full md:w-[45%] xl:w-[30%] flex justify-center items-center p-2 my-4 mx-3`}>
                <div className={`${principle.image}`}>
                    <div className="">
                    <Image 
                        src={star}
                        className={`p-3`}
                    />
                    </div>
                </div>
                <div className="pl-5 flex flex-col justify-center">
                    <h4>Мэргэшсэн өндөр чадавхи</h4>
                    <p>Мэргэжлийн өндөр ур чадвартай, өөрийгөө болон бусдыг байнга хөгжүүлдэг</p>
                </div>
            </div>

            <div className={`${principle.principles} w-full md:w-[45%] xl:w-[30%] flex justify-center items-center p-2 my-4 mx-3`}>
                <div className={`${principle.image}`}>
                    <div className="">
                    <Image 
                        src={thumbup}
                        className={`p-3`}
                    />
                    </div>
                </div>
                <div className="pl-5 flex flex-col justify-center">
                    <h4>Багийн сэтгэлгээ</h4>
                    <p>Харилцан итгэлцэл, хүндлэл, эерэг дулаан харьцааг буй болгон хамт олонтойгоо үр дүнтэй хамтран ажилладаг</p>
                </div>
            </div>

            <div className={`${principle.principles} w-full md:w-[45%] xl:w-[30%] flex justify-center items-center p-2 my-4 mx-3`}>
                <div className={`${principle.image}`}>
                    <div className="">
                    <Image 
                        src={thumbup}
                        className={`p-3`}
                    />
                    </div>
                </div>
                <div className="pl-5 flex flex-col justify-center">
                    <h4>Манлайлал</h4>
                    <p>Цаашдын ахиц, хөгжлийн боломжийг олж тодорхойлж, бусдадаа ойлгуулан дэмжлэгийг нь авч, тэднийг урам зоригжуулан, хамтдаа бодит үйл хэрэг болгодог</p>
                </div>
            </div>

            <div className={`${principle.principles} w-full md:w-[45%] xl:w-[30%] flex justify-center items-center p-2 my-4 mx-3`}>
                <div className={`${principle.image}`}>
                    <div className="">
                    <Image 
                        src={thumbup}
                        className={`p-3`}
                    />
                    </div>
                </div>
                <div className="pl-5 flex flex-col justify-center">
                    <h4>Өөриймсөг үзэл</h4>
                    <p>Ажилдаа болон компанидаа өөриймсөг хандаж, сэтгэл гарган ажилладаг</p>
                </div>
            </div>

            <div className={`${principle.principles} w-full md:w-[45%] xl:w-[30%] flex justify-center items-center p-2 my-4 mx-3`}>
                <div className={`${principle.image}`}>
                    <div className="">
                    <Image 
                        src={thumbup}
                        className={`p-3`}
                    />
                    </div>
                </div>
                <div className="pl-5 flex flex-col justify-center">
                    <h4>Санал санаачилга</h4>
                    <p>Хөгжүүлэх, сайжруулах, асуудлыг шийдвэрлэх бүтээлч шийдэл, санал санаачилгыг байнга гаргадаг</p>
                </div>
            </div>

            <div className={`${principle.principles} w-full md:w-[45%] xl:w-[30%] flex justify-center items-center p-2 my-4 mx-3`}>
                <div className={`${principle.image}`}>
                    <div className="">
                    <Image 
                        src={flag}
                        className={`p-3`}
                    />
                    </div>
                </div>
                <div className="pl-5 flex flex-col justify-center">
                    <h4>Үнэнч шударга зарчим</h4>
                    <p>Монгол Улсын хууль журмыг алхам тутамдаа дээдэлдэг, аливаад үнэнч шударга ханддаг, М-Си-Эс группийн ёс зүйн дүрмийг өдөр тутам мөрдлөг болгодог</p>
                </div>
            </div>

            <div className={`${principle.principles} w-full md:w-[45%] xl:w-[30%] flex justify-center items-center p-2 my-4 mx-3`}>
                <div className={`${principle.image}`}>
                    <div className="">
                    <Image 
                        src={thumbup}
                        className={`p-3`}
                    />
                    </div>
                </div>
                <div className="pl-5 flex flex-col justify-center">
                    <h4>Тогтвортой хөгжлийн зарчим</h4>
                    <p>Нийгэмдээ болон байгаль орчиндоо ээлтэй байхыг эрхэмлэдэг, хөдөлмөрийн аюулгүй байдлыг эн тэргүүнд хангаж ажилладаг</p>
                </div>
            </div>
        </div>
    </Layout>
  )
}
