import Phato1 from './assets/ph1.jpg'

const Welcome  = () => {
return(<>
<div className="bg-black h-[1050px] h-[100%]">
  <br/>
<h1 className="text-white flex items-center justify-center h-[256px] w-screen text-[42px] font-[Lucida_Calligraphy] italic text-xl
"> Welcome To Handy, Here</h1>
<div className='flex justify-center relative   transform shadow-lg'>
<div className="  text-white bg-[#EBD7BF]  "  >
<h2 className='flex items-center justify-center text-center font-black text-[44px] leading-[100px] font-[Segoe_UI] tracking-normal text-[#191818] opacity-100 '>PROFESSIOAL, EXOQITE</h2>
<h2 className='flex items-center justify-center text-center font-black text-[45px] leading-[100px] font-[Segoe_UI] tracking-normal text-[#BCB2A8] opacity-100 '>HANDCREAFTED</h2>
</div>
<img className="mt-8 mx-auto" src={Phato1} alt="Handcrafted Work" />
</div>

</div>
</>
)

}
export default Welcome;