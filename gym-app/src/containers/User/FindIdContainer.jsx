import React from 'react'
import FindIdForm from '../../components/user/FindIdForm'
import * as auth from '../../apis/auth' 
import * as Swal from '../../apis/alert'
import { useNavigate } from 'react-router-dom'

const FindIdContainer = () => {

  const navigate = useNavigate();

  const findId = async(form) => {
    console.dir(form);
    const respone = await auth.findId(form);
    const data = respone.data;
    const status = respone.status;

    if(status === 200){
   
      Swal.confirm('회원가입 성공', `아이디는 ${data} 입니다.`, 'success', () => { navigate('/login')})
    }
    else{
      Swal.alert('아이디 찾기 실패', '아이디 찾기에 실패했습니다.', 'error');
    }

  }

  return (
    <>
    <FindIdForm findId={findId}/>
    </>
  )
}

export default FindIdContainer