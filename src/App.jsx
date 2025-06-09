import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [wallet, setWallet] = useState(()=>{
    let saved = localStorage.getItem("wallet")
    return saved||100;
  })
  const [prevWallet, setPrevWallet] = useState(wallet)
  const [amount,setAmount] = useState(0)
  const [NoOfBombs, setNoOfBombs] = useState(0)
  const [boxes, setBoxes] = useState([])
  const [revealed, setRevealed] = useState(Array(25).fill(false))

  useEffect(()=>{
        localStorage.setItem("wallet", wallet);
  },[wallet])

  const start = ()=>{
      let arr = new Array(25);
      setRevealed(Array(25).fill(false))
      setPrevWallet(wallet)
      for(let i=0;i<NoOfBombs;i++){
        arr[i] = "bomb";
      }
      for(let i=NoOfBombs;i<25;i++){
        arr[i] = "diamond";
      }
      for(let i=24;i>=0;i--){
        let  j = Math.floor(Math.random()*(i+1));
        [arr[i],arr[j]] = [arr[j],arr[i]]
      }
      setBoxes(arr)
      if(amount>0){
        setWallet(wallet-amount)
      }
  }

  const profitAndLoss = (e)=>{
    if(e.target.value>wallet){
      console.log("not enough money in wallet")
    }else{
      setAmount(e.target.value)
    }
  }

  const inputHandler = (e)=>{
    setNoOfBombs(Number(e.target.value))
  }
  const clickHandler = (index)=>{
    if(revealed[index]) return
    if(boxes[index]==="bomb"){
        setRevealed(Array(25).fill(true))
        setWallet(prevWallet-amount)
      }else if(boxes[index]=="diamond"){
         revealed[index] = true
         setWallet(wallet+2*amount)
      }

    
  }

  return (
    <><div className='sm:overflow-y-hidden w-full min-h-screen bg-zinc-950 text-white'>
    <div className='flex flex-col  sm:flex-row items-center '> 
      <div><img src='./icons8-mine-cart-100.png' className=''/></div>
      <div className='flex items-center justify-between sm:ml-[40%] w-[50%] sm:w-[250px] h-[70px] mt-4 sm:mt-0 mb-4 rounded-2xl p-[5px] bg-zinc-800'>
        <div className='text-2xl font-bold'>Wallet :</div>
        <div ><input value={wallet} onChange={(e) => setWallet(Number(e.target.value))} className='w-[80px] bg-white text-2xl text-black text-center h-[50px] font-extrabold rounded-2xl' /></div>
      </div>
    </div>
      <div className={`flex flex-col lg:flex-row items-center justify-evenly w-full gap-4 flex-grow `}>
        <div className="grid grid-cols-5 grid-rows-5 bg-zinc-900 p-4 gap-2 w-[90%] lg:w-[40%] text-white rounded-2xl min-h-[300px] lg:min-h-[750px]">
         {Array(25).fill(0).map((element,index) => (
          <div key = {index} onClick={()=>{clickHandler(index)}} className='flex justify-center bg-zinc-800 items-center rounded-2xl '>
            {revealed[index]?(boxes[index]==="bomb"?(<div className='bg-red-600 rounded-2xl w-[100%] h-[100%] flex justify-center items-center'><img src='./icons8-bomb-48.png'/></div>):(<div className='bg-green-400 rounded-2xl w-[100%] h-[100%] flex justify-center items-center'><img src='./icons8-diamond-48.png'/></div>)):null}
            </div>
         ))}
         
          
        </div>
        <div className='flex flex-col border-2 border-black  w-[90%] lg:w-[25%] bg-zinc-900 rounded-2xl p-4 gap-6'>
          <div className='flex justify-between p-10 '>
            <div className='font-extrabold'>Amount :</div>
            <input 
            className='bg-white text-black w-[120px] sm:w-[150px] font-extrabold text-center outline-none rounded-[5px]'
            onChange={profitAndLoss}
            value={amount}
            />
          </div>
          <div className='flex justify-between p-10'>
            <span className='font-extrabold'>No. of bombs :</span>
            <input 
              className='bg-white text-black w-[120px] sm:w-[150px] font-extrabold text-center outline-none rounded-[5px]' 
              type='number'
              onChange={inputHandler}
            />
          </div>
          <div className='w-[100%] flex justify-evenly items-center '>
            <button onClick={start} className='bg-white rounded-2xl text-black w-[120px] h-[40px] text-2xl font-extrabold'>Start</button>
            <button onClick={start} className='bg-white rounded-2xl text-black w-[120px] h-[40px] text-2xl font-extrabold'>Withdraw</button>
            
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
