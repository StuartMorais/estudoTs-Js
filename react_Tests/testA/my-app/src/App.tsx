import './App.css'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"



function App() {


  
  return (
    <>
      <label htmlFor="inputText" className='bg-red-700'>To do List</label>

      <div className="flex w-full max-w-sm items-center space-x-2" id='divText'>
        <Input type="Text" placeholder="To do" />
        <Button type="submit">Add</Button>

      </div>

      <h1 className='flex my-3'>To do:</h1>

      <div className='my-4 flex w-full max-w-sm items-center space-x-2'>

        <ul className='list'>
          <li>
            <label htmlFor="">
              <input type="checkbox" name="chkbx" id="chkbx" />
              list
            </label>
            <button type='button'>Delete</button>
          </li>
        </ul>
        
      </div>

    </>
  )
}

export default App