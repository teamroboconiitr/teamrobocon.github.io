import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import ImageCarousel from '@/components/image-carousel'
import ImageGrid from '@/components/image-grid'
import SponsorLogos from '@/components/sponsor-logos'
import { Mail, MapPin, Phone, Instagram, Linkedin, Github } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section id="hero" className="relative py-20 text-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-background.JPG"
            alt="Mars Rover Background"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">Team Robocon IITR</h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-white">Innovating Mars Rover Prototypes</p>
          <Button size="lg" asChild>
            <Link href="mailto:teamroboconiitr@iitr.ac.in">Learn More</Link>
          </Button>
        </div>
      </section>

      <section id="about" className="py-12 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">About Us</h2>
        <p className="text-justify md:text-lg mb-4">
          <b>Team Robocon IITR</b> is a dynamic group of 40+ students from the Indian Institute of Technology Roorkee, driven by a passion for robotics and innovation. We specialize in designing advanced Mars rover prototypes and actively compete in prestigious global events like the <b>International Rover Challenge</b>, <b>European Rover Challenge</b> and <b>University Rover Challenge</b>, where we showcase our technical ingenuity and teamwork.
        </p>
        <p className="text-justify md:text-lg mb-4">
          With expertise spanning multiple disciplines, our team thrives on collaboration and creativity, transforming complex ideas into groundbreaking solutions. Guided by values of innovation, teamwork, and continuous learning, we are committed to advancing robotics and inspiring the next generation of pioneers in space exploration.
        </p>
      </section>

      <section id="projects" className="py-12 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Mars Rover Prototype</CardTitle>
              <CardDescription>Our third prototype</CardDescription>
            </CardHeader>
            <CardContent>
              <p className='text-justify'>Started in 2021, this marks the third iteration of our rover, designed for seamless traversal across diverse terrains and equipped with autonomous capabilities tailored to the requirements of various rover challenges. Additionally, the rover features a versatile modular robotic arm.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Autonomous Industrial Robotic Arm</CardTitle>
              <CardDescription>Autonomous robotic arm for warehouse operation</CardDescription>
            </CardHeader>
            <CardContent>
              <p className='text-justify'>An autonomous robotic arm specifically designed for large warehouse operations, capable of independently detecting, picking, and placing delivery packages with precise orientation.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Industrial Omni-directional Drive</CardTitle>
              <CardDescription>Autonomous traversal</CardDescription>
            </CardHeader>
            <CardContent>
              <p className='text-justify'>A three-wheeled omni-directional drive with autonomous traversal capabilities, designed to accommodate a variety of testing and mapping equipment.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="achievements" className="py-12 md:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12 text-center">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl">International Rover Challenge 2024</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-base md:text-lg mb-2 font-semibold">13th Overall & 5th in Autonomous Mission</p>
                <p className="text-justify">Secured in 13th rank among 23 teams in our second on-site appearance in IRC.</p>
              </CardContent>
            </Card>
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl">Inter IIT Tech 13.0, 2024</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-base md:text-lg mb-2 font-semibold">Gold Medalist in No-prep Problem Statement</p>
                <p className="text-justify">We were Gold Medalist in No-prep problem statement in our latest appearnace in Inter IIT Tech.</p>
              </CardContent>
            </Card>
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl">International Rover Design Challenge 2022</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-base md:text-lg mb-2 font-semibold">9th Position</p>
                <p className="text-justify">We secured 9th position in the remote event of IRDC 2022.</p>
              </CardContent>
            </Card>
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl">European Rover Challenge 2021</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-base md:text-lg mb-2 font-semibold">14th International Rank</p>
                <p className="text-justify">After achieving a podium finish in ABU Robocon, we transitioned to the Rover Challenge, securing 14th place internationally in ERC 2021.</p>
              </CardContent>
            </Card>
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl">ABU Robocon 2020</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-base md:text-lg mb-2 font-semibold">2nd Runner-up</p>
                <p className="text-justify">After several appearances, we secured a podium finish, placing 3rd in ABU Robocon 2020.</p>
              </CardContent>
            </Card>
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl">Smart India Hackathon 2020</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-base md:text-lg mb-2 font-semibold">Winners in Hardware Edition</p>
                <p className="text-justify">Winner in our first experience in Smart India Hackathon 2020.</p>
              </CardContent>
            </Card>
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl">ABU Robocon 2014 & 2016</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-base md:text-lg mb-2 font-semibold">Best Aesthetic Robot Award and 5th Place</p>
                <p className="text-justify">We built on our previous performance in subsequent years, securing 5th position and winning the Best Aesthetic Robot award in 2014 and 2016.</p>
              </CardContent>
            </Card>
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl">ABU Robocon 2011</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-base md:text-lg mb-2 font-semibold">9th Position</p>
                <p className="text-justify">We achieved 9th position among 50 teams in our second appearance at ABU Robocon.</p>
              </CardContent>
            </Card>
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl">ABU Robocon 2009</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-base md:text-lg mb-2 font-semibold">Best Debut Team</p>
                <p className="text-justify">We received the Best Debut Team award at ABU Robocon in the same year we were founded.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-12 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Gallery</h2>
        <div className="mb-8">
          <h3 className="text-xl md:text-2xl font-semibold mb-4">Team over the years</h3>
          <ImageCarousel />
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-semibold mb-4">All Images</h3>
          <ImageGrid />
        </div>
      </section>

      <section id="sponsors" className="py-12 md:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">Our Sponsors</h2>
          <p className="text-base md:text-lg mb-8 text-center">We are grateful for the support of our sponsors who make our projects possible.</p>
          <SponsorLogos />
        </div>
      </section>

      <section id="contact" className="py-12 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Contact Us</h2>
        <p className="text-base md:text-lg mb-4">
          Interested in our work or want to collaborate? Reach out to us!
        </p>
        {/* <p className="text-base md:text-lg">
          Email: team.robocon@iitr.ac.in<br />
          Address: IIT Roorkee, Roorkee, Uttarakhand, India - 247667
        </p> */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Mail className="h-5 w-5" />
            <a href="mailto:teamroboconiitr@iitr.ac.in" className="text-base md:text-lg">teamroboconiitr@iitr.ac.in</a>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="h-5 w-5" />
            <p className="text-base md:text-lg">IIT Roorkee, Roorkee, Uttarakhand, India - 247667</p>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="h-5 w-5" />
            <p className="text-base md:text-lg">+91 7781935105 (Mehul Anand)</p>
          </div>
          <div className="flex items-center space-x-4 mt-4">
            <Link href="https://www.instagram.com/roboconiitr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark transition-colors">
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="https://www.linkedin.com/company/triitr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark transition-colors">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="https://github.com/teamroboconiitr" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark transition-colors">
              <Github className="h-6 w-6" />
              <span className="sr-only">Github</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

