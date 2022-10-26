import React, {useState} from 'react'
import login from '../../styles/Login.module.css'
import { useRouter } from 'next/router'
import { toast, ToastContainer } from 'react-toastify';

export default function Login(users) {

    const [data, setData] = useState(users.data);
    const [username, setUsername] = useState('');
    const [password, setPassowrd] = useState('');
    const user = [];
    const router = useRouter();

    async function Login() {

        for (var i in data) {
            if (data[i].erp_code === username && data[i].password === password) {
                user.push({
                    erp_code: data[i].erp_code,
                    lastname: data[i].lastname,
                    firstname: data[i].firstname,
                    password: data[i].password
                })
            }
        }

        if (username === '' || password === '') {
            toast("Хоосон байна шдээ. Бөглөөчэээ")
        } else {
            if (user.length == 0) {
                toast("Аль нэг талбар буруу л байна даа")
            }
            else {
                if (user[0].erp_code === username && user[0].password === password) {
                    if (user[0].erp_code === '101869') {
                        toast("Амжилттай нэвтэрлээ. Түр хүлээж байгаарай!")
                        sessionStorage.setItem("user", user[0].firstname)
                        sessionStorage.setItem("userId", user[0].erp_code)
                        
                            router.push({
                                pathname: '/components/Admin/Admin'
                            })
                    } else {
                        toast("Амжилттай нэвтэрлээ. Түр хүлээж байгаарай!")
                        sessionStorage.setItem("user", user[0].firstname)
                        sessionStorage.setItem("userId", user[0].erp_code)
                        
                            router.push({
                                pathname: '/components/Courses/Courses'
                            })
                    }
                }
                else {
                    toast("Өөөө. Зөв бөглөөчээээ")
                }
            }
        }
    }

  return (
    <div className='w-full md:w-1/2 xl:w-1/3 login'>
         <ToastContainer
                position='top-center'
                autoClose='500'
            />
        <form action="" >
            <h1 className='text-gray-100 font-semibold mx-auto text-center mb-8 text-xl'>Нэвтрэх хэсэг</h1>
            <input type="text" name="" id="username" placeholder='Username' onChange={(e) => setUsername(e.target.value)}/>
            <input type="password" name="" id="password" placeholder='Password' onChange={(e) => setPassowrd(e.target.value)}/>
            <div className='w-full text-center flex justify-center'>
                <div className='button' onClick={Login}>Нэвтрэх</div>
            </div>
        </form>
    </div>
  )
}
