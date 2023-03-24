/* import logo from  './logo.png' */

function Img ({photo}) {
  let alt = 'Prinkach'
  return (
    <div class="bg-sky-900 my-7 border-double 
    border-x-4 border-lime-400 text-lime-400 flex-col h-[100%] w-96 ml-2.5 items-center shadow-80 rounded-2xl ">
      <img src={photo} alt={alt} height="200" width="300"/>

    </div>
  )
}
export default Img