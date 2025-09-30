

import './App.css'
import Card from './components/card/Card'

function App() {

  const cardData = [
  {
    title: "Cloud EHR Platform",
    content:
      "At the heart of Tebra’s platform is a cloud-based EHR that streamlines clinical documentation, helping you chart faster and more accurately. With AI Note Assist, your notes practically write themselves, freeing you up to focus on patient care.",
    features: [
      "Feature One",
      "Feature Two",
      "Feature Three",
      "Feature Four",
      "Feature Five"
    ],
    image: "Demo.jpg"
  },
  {
    title: "Telehealth Integration",
    content:
      "Seamlessly connect with patients online using our telehealth tools. Schedule appointments, conduct video calls, and maintain records all in one place.",
    features: [
      "HD Video Calls",
      "Secure Messaging",
      "Easy Scheduling",
      "Patient Reminders",
      "EHR Sync"
    ],
    image: "Demo.jpg"
  },
  {
    title: "AI Note Assist",
    content:
      "Automatically generate clinical notes with AI assistance, saving time and improving accuracy.",
    features: [
      "Auto-Notes",
      "Custom Templates",
      "Error Reduction",
      "Faster Charting",
      "Patient Summary"
    ],
    image: "Demo.jpg"
  }
];


  return (
    <>
   <main className='main-class'>
     { cardData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          content={card.content}
          features={card.features}
          image={card.image}
        />
      ))    }
   </main>

    </>
  )
}

export default App
