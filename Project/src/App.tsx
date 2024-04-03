import { ChangeEvent, useRef } from 'react'
import './App.css'

function App() {
  const selectedFile = useRef<File>()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target?.files?.[0]
    if (file) {
      console.log(file)
      selectedFile.current = file
    }
  }

  const handleSubmit = (ev: { preventDefault: () => void }) => {
    ev.preventDefault()
    const formData = new FormData()
    if (selectedFile.current) formData.append('file', selectedFile.current)
    console.log({ formData })
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="file" accept=".pdf" onChange={handleFileChange} />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </>
  )
}

export default App
