import './App.css'
import CardGrid from './Card'
import Footer from './Footer'
import Navbar from './Navbar'
import Section from './Section'

function App() {

  return (
      <div>
       <Navbar />
       <Section 
        imageUrl="https://picsum.photos/id/1005/300/200"
        title="My Section Title"
        description="A product is an article obtained by the transformation of raw material, such as a radio, a television, a scooter or an industrial product like a lathe or shaping machine.0 It is defined as something produced by labor or effort or the result of an act/process."
      />
       <CardGrid />
       <Footer />
      </div>
     
  )
}

export default App
