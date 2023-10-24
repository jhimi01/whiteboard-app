
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
     {/* main whiteboard page */}
     <div className='container'>
      <h1 className="text-bg-danger text-center shadow py-3 bg-info-subtle text-black text-uppercase">whiteboard</h1>
      <Button variant="primary">+</Button>
      
     </div>
    </>
  )
}

export default App
