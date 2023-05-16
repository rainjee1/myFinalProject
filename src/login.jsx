import { useState } from "react"

export const Login= () => {
    const [ID,setID]=useState('');
    const [password,setPass]=useState('');

    const handleSumbit = (e) => {
        e.preventDefault();
        console.log(ID);
    }



    return (
        <>
        <form onSubmit={handleSumbit}>
        <label for="Öğrenci ID">Öğrenci ID</label>
        <input value={ID} onChange={(e) => setID(e.target.value)} type="int" placeholder="Öğrenci ID"  id="ID" name="ID"/>
        <label for="Şifre">Şifre</label>
        <input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*******"  id="password" name="password"/>
        <button>Giriş</button>
        </form>
        <label for="Mesaj"> <b> Öğrenci kaydınız yok ise lütfen Öğrenci İşleri ile iletişime geçin. </b> </label>
        </>
       
    )
}