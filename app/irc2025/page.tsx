import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function IRC2025() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <Image
          src="/IRC_2025_logo.png
          "
          alt="IRC 2025 Logo"
          width={200}
          height={200}
          className="mx-auto mb-6"
        />
        <h1 className="text-4xl font-bold mb-4">International Rover Challenge 2025</h1>
        <p className="text-xl text-muted-foreground">Exploring the Future of Mars Exploration</p>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Competition Overview</h2>
        <p className="text-lg text-justify mb-4">
          The International Rover Challenge (IRC) 2025 is a prestigious space robotics competition that brings together teams from across the globe to design and operate advanced Mars rover prototypes. It challenges students to innovate and excel in tasks simulating real-world planetary exploration. IRC 2025 is a platform to showcase technical brilliance, teamwork, and the spirit of discovery.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Mission Objectives</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Astrobiology Expedition (ABEx)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-justify">Analyze soil and atmospheric samples to identify signs of life and assess habitability potential in simulated Martian conditions.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Reconnaissance and Delivery Operation (RDO)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-justify">Locate, collect, and deliver designated objects across challenging terrains using advanced rover capabilities.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Autonomous Expedition (AutEx)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-justify">PNavigate rugged terrain autonomously by following visual markers to reach designated endpoints.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Instrument Deployment and Maintenance Operation (IDMO)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-justify">Perform precise tasks on a mock instrument panel, including deployment and maintenance operations using robotic manipulators.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Competition Tasks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Soil Analysis", image: "/Science_box_2024.JPG" },
            { title: "Autonomous Expedition", image: "/AutEx.JPG" },
            { title: "Equipment Repair", image: "/intrument_repair.JPG" },
            { title: "Sample Collection", image: "/soil_collection.JPG" },
            { title: "Reconnaissance Operation", image: "/Rover_2024.JPG" },
            { title: "Business and Partnership Plan", image: "/BPP.JPG" },
          ].map((task, index) => (
            <div key={index} className="relative aspect-video">
              <Image
                src={task.image}
                alt={task.title}
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
                <h3 className="text-white text-xl font-bold">{task.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">Join the Challenge</h2>
        <p className="text-lg mb-4">
          Are you ready to push the boundaries of Mars exploration technology? Join us at IRC 2025 and be part of the next generation of space innovators!
        </p>
        <p className="text-lg">
          For more information and registration details, visit the official <a href="https://roverchallenge.org/" target="_blank" rel="noopener noreferrer" className="text-primary underline">International Rover Challenge website</a>.
        </p>
      </section>
    </div>
  )
}

