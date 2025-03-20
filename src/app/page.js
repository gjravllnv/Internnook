'use client';

import Link from 'next/link';
import Image from 'next/image'; 

const testimonials = [
  {
    name: "John Doe",
    role: "Marketing Intern",
    image: "/images/testimonial_profile.png", // Replace with actual image path
    text: "Mauris tempor lorem non quam imperdiet, eget volutpat ante bibendum. Vivamus semper erat eros.",
  },
  {
    name: "John Doe",
    role: "Marketing Intern",
    image: "/images/testimonial_profile.png",
    text: "Mauris tempor lorem non quam imperdiet, eget volutpat ante bibendum. Vivamus semper erat eros.",
  },
  {
    name: "John Doe",
    role: "Marketing Intern",
    image: "/images/testimonial_profile.png",
    text: "Mauris tempor lorem non quam imperdiet, eget volutpat ante bibendum. Vivamus semper erat eros.",
  },
];

export default function MyApp() {
  return (
    <>
    {/* Homepage */}
      <section id="homePage" className="relative min-h-screen flex items-center justify-center bg-[#F8F8F8] px-6 lg:px-16 overflow-hidden">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto w-full">
          <div className="absolute w-full h-full -z-10">
            <div className="absolute w-56 h-56 bg-orange-200 rounded-full top-[10%] left-[-5%] lg:left-[-15%]"></div>
            <div className="absolute w-72 h-72 bg-orange-300 rounded-full bottom-[5%] right-[-5%] lg:right-[-10%]"></div>
          </div>
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Internship made easy,<br className="hidden sm:inline" /> right at your nook.
            </h1>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="#pre-register" className="bg-[#135C9F] text-white px-6 py-3 rounded-md text-sm font-medium shadow-md hover:bg-blue-700">
                Pre-Register Now
              </Link>
              <Link href="#how-it-works" className="border border-[#AFAFAF] px-6 py-3 rounded-md text-sm font-medium shadow-md hover:bg-gray-200">
                How it works?
              </Link>
            </div>
          </div>
          <div className="relative flex justify-center ">
            <Image
              src="/images/CBM_HERO.png"
              alt="Internship Team"
              width={500}
              height={500}
              className="object-contain w-500 max-w-3xl h-auto sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[650px]-mt-20 md:-mt-16 lg:-mt-2 "
            />
          </div>
        </div>
      </section>

      {/* AboutPage */}
      <section id= "aboutPage" className="relative flex items-center justify-center bg-[#F8F8F8] px-6 lg:px-16 py-20 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto w-full">
          <div className="relative flex justify-center lg:justify-start">
            <div className="absolute -z-10 w-64 h-64 bg-orange-200 rounded-full top-0 left-0 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute -z-10 w-56 h-56 bg-orange-300 rounded-full bottom-0 right-0 transform translate-x-1/2 translate-y-1/2"></div>
            <div class="grid grid-flow-col grid-rows-3 gap-3">
              <div class="row-span-3 ...">
                <Image
                src="/images/IMG_9.jpg"
                alt="Group Meeting"
                width={360}
                height={1300}
                className="rounded-lg shadow-md object-cover"
              />
              </div>
              <div class="col-span-2 ...">
              <Image
                src="/images/IMG_8.jpg"
                alt="Team Collaboration"
                width={300}
                height={500}
                className="rounded-lg shadow-md object-cover"
                />
              </div>
              <div class="col-span-2 row-span-2 ...">
                <Image
                  src="/images/IMG_6.jpg"
                  alt="Workspace Collaboration"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-md object-cover"
                />
              </div>
            </div>
          </div>
          <div className="bg-[#7AAADD]/[0.11] shadow-lg rounded-lg p-6 lg:p-10 max-w-md">
            <span className="text-[#8E8E8E] text-sm mt-2 py-2">
              About
            </span>
            <h2 className="italic text-2xl font-bold text-gray-900 mt-2">
              A Smart Internship Hub
            </h2>
            <p className="text-gray-700 mt-2">
              that connects academic institutions, companies, and students seamlessly.
            </p>
          </div>
        </div>
      </section>

      {/* How it Works? */}
      <section className="relative flex items-center justify-center bg-[#F8F8F8] px-6 lg:px-16 py-20 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto w-full">
          <div>
            <span className="text-[#8E8E8E] text-sm">How it works</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4">Let's Get Started</h2>
            <div className="mt-6 space-y-4">
              <div className="flex flex-col">
                <div className="flex items-center gap-6">
                  <span className="text-blue-600 font-bold text-lg">01</span>
                  <p className="text-gray-700 font-bold text-lg">Create Your Profile</p>
                </div>
                <p className="text-gray-700 mt-2 ml-12">Sign up and set up your profile.</p>
              </div>
              <hr className="my-6 border-[#C7C7C7]/[0.47] w-3/4" />
              <div className="flex flex-col">
                <div className="flex items-center gap-6">
                  <span className="text-blue-600 font-bold text-lg">02</span>
                  <p className="text-gray-700 font-bold text-lg">Get Matched</p>
                </div>
                <p className="text-gray-700 mt-2 ml-12">Our AI pairs you with the best opportunities or candidates.</p>
              </div>
              <hr className="my-6 border-[#C7C7C7]/[0.47] w-3/4" />
              <div className="flex flex-col">
                <div className="flex items-center gap-6">
                  <span className="text-blue-600 font-bold text-lg">03</span>
                  <p className="text-gray-700 font-bold text-lg">Start Your JourneySign</p>
                </div>
                <p className="text-gray-700 mt-2 ml-12">Agreements digitally and begin your internship.</p>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center">
          <Image
            src="/images/image 5.png"
            alt="User Working"
            width={500}
            height={500}
            className="object-contain relative z-10"
          />
          {/* check */}
          <div className="absolute top-[-40px] right-[-1px] bg-[#7AAADD]/[0.11] p-5 rounded-lg shadow-md flex flex-col items-center gap-5">
            <svg width="34" height="34" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M27 47.25C29.6593 47.25 32.2925 46.7262 34.7493 45.7086C37.2062 44.6909 39.4385 43.1993 41.3189 41.3189C43.1993 39.4385 44.6909 37.2062 45.7086 34.7493C46.7262 32.2925 47.25 29.6593 47.25 27C47.25 24.3407 46.7262 21.7075 45.7086 19.2507C44.6909 16.7938 43.1993 14.5615 41.3189 12.6811C39.4385 10.8007 37.2062 9.3091 34.7493 8.29144C32.2925 7.27378 29.6593 6.75 27 6.75C21.6294 6.75 16.4787 8.88348 12.6811 12.6811C8.88348 16.4787 6.75 21.6294 6.75 27C6.75 32.3706 8.88348 37.5213 12.6811 41.3189C16.4787 45.1165 21.6294 47.25 27 47.25ZM26.478 35.19L37.728 21.69L34.272 18.81L24.597 30.4177L19.5907 25.4093L16.4093 28.5907L23.1593 35.3407L24.9008 37.0823L26.478 35.19Z" fill="#135C9F"/>
            </svg>

              <p className="font-bold text-[#2F2F2F]">Quick, Easy and Hassle Free</p>
            </div>
            <div className="absolute bottom-[90px] left-[-20px] bg-[#7AAADD]/[0.11] p-5 rounded-lg shadow-md flex flex-col items-center gap-5">
            <svg width="34" height="34" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M27 47.25C29.6593 47.25 32.2925 46.7262 34.7493 45.7086C37.2062 44.6909 39.4385 43.1993 41.3189 41.3189C43.1993 39.4385 44.6909 37.2062 45.7086 34.7493C46.7262 32.2925 47.25 29.6593 47.25 27C47.25 24.3407 46.7262 21.7075 45.7086 19.2507C44.6909 16.7938 43.1993 14.5615 41.3189 12.6811C39.4385 10.8007 37.2062 9.3091 34.7493 8.29144C32.2925 7.27378 29.6593 6.75 27 6.75C21.6294 6.75 16.4787 8.88348 12.6811 12.6811C8.88348 16.4787 6.75 21.6294 6.75 27C6.75 32.3706 8.88348 37.5213 12.6811 41.3189C16.4787 45.1165 21.6294 47.25 27 47.25ZM26.478 35.19L37.728 21.69L34.272 18.81L24.597 30.4177L19.5907 25.4093L16.4093 28.5907L23.1593 35.3407L24.9008 37.0823L26.478 35.19Z" fill="#135C9F"/>
            </svg>
              <p className="font-bold text-[#2F2F2F]">Simple and Seamless</p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Tagline */}
      <section className="relative flex items-center justify-center bg-[#F8F8F8] px-6 lg:px-16 py-20 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto w-full">
          <div className="bg-[#E9F2FA] p-6 lg:p-10 rounded-lg shadow-md max-w-md">
            <span className="text-gray-500 text-sm">Students</span>
            <h2 className="text-2xl font-bold text-gray-900 mt-2 italic">“where dream jobs take root!”</h2>
            <p className="text-gray-700 mt-4">
              Internook helps students build a strong foundation for their future careers by connecting them with the
              right internship opportunities to grow and succeed.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 items-start">
          <Image
              src="/images/IMG_9 6.jpg"
              alt="Group Meeting"
              width={360}
              height={820}
              className="rounded-lg shadow-md object-cover"
            />
              <div className="flex flex-col gap-3">
                <Image
                  src="/images/IMG_8 1.jpg"
                  alt="Team Collaboration"
                  width={500}
                  height={900}
                  className="rounded-lg shadow-md object-cover"
                />
                <Image
                  src="/images/IMG_6_1.jpg"
                  alt="Workspace Collaboration"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-md object-cover"
                />
              </div> 
          </div>
        </div>
      </section>

      {/* Companies Tagline */}
      <section id= "aboutPage" className="relative flex items-center justify-center bg-[#F8F8F8] px-6 lg:px-16 py-20 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto w-full">
          <div className="relative flex justify-center lg:justify-start">
            <div className="absolute -z-10 w-64 h-64 bg-orange-200 rounded-full top-0 left-0 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute -z-10 w-56 h-56 bg-orange-300 rounded-full bottom-0 right-0 transform translate-x-1/2 translate-y-1/2"></div>
            <div class="grid grid-flow-col grid-rows-3 gap-3">
              <div class="row-span-3 ...">
                <Image
                src="/images/IMG_9.jpg"
                alt="Group Meeting"
                width={360}
                height={1300}
                className="rounded-lg shadow-md object-cover"
              />
              </div>
              <div class="col-span-2 ...">
              <Image
                src="/images/IMG_8.jpg"
                alt="Team Collaboration"
                width={300}
                height={500}
                className="rounded-lg shadow-md object-cover"
                />
              </div>
              <div class="col-span-2 row-span-2 ...">
                <Image
                  src="/images/IMG_6.jpg"
                  alt="Workspace Collaboration"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-md object-cover"
                />
              </div>
            </div>
          </div>
          <div className="bg-[#7AAADD]/[0.11] shadow-lg rounded-lg p-6 lg:p-10 max-w-md">
            <span className="text-[#8E8E8E] text-sm mt-2 py-2">
              Companies
            </span>
            <h2 className="italic text-2xl font-bold text-gray-900 mt-2">
              “the smart way to look!”
            </h2>
            <p className="text-gray-700 mt-2">
              Internnook simplifies the search for top student talent, making recruitment and internship 
              management more efficient through AI-driven matching and smart contracts.
            </p>
          </div>
        </div>
      </section>

      {/* School and Universities Tagline */}
      <section className="relative flex items-center justify-center bg-[#F8F8F8] px-6 lg:px-16 py-20 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto w-full">
          <div className="bg-[#E9F2FA] p-6 lg:p-10 rounded-lg shadow-md max-w-md">
            <span className="text-gray-500 text-sm">School and Universities</span>
            <h2 className="text-2xl font-bold text-gray-900 mt-2 italic"> “where students find their nook!” </h2>
            <p className="text-gray-700 mt-4">
              Internnook provides a seamless platform for schools to connect students with the 
              best internship opportunities, ensuring they find the right fit for their career development.
            </p>
          </div>
          <div class="grid grid-flow-col grid-rows-3 gap-3">
              <div class="row-span-3 ...">
                <Image
                src="/images/IMG_9.jpg"
                alt="Group Meeting"
                width={360}
                height={1300}
                className="rounded-lg shadow-md object-cover"
              />
              </div>
              <div class="col-span-2 ...">
              <Image
                src="/images/IMG_8.jpg"
                alt="Team Collaboration"
                width={300}
                height={500}
                className="rounded-lg shadow-md object-cover"
                />
              </div>
              <div class="col-span-2 row-span-2 ...">
                <Image
                  src="/images/IMG_6.jpg"
                  alt="Workspace Collaboration"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-md object-cover"
                />
              </div>
            </div>
        </div>
      </section>

      {/* Feedback */}
      <section className="py-16 text-center bg-[#F8F8F8]">
        <span className="text-[#8E8E8E] text-sm mt-2 py-2">
          Feedback
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
          We've built trust with <br className="hidden sm:inline" />  reviews from real users
        </h2>
        <div className="mt-10 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto px-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col items-center space-y-4">
              <svg width="49" height="47" viewBox="0 0 49 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.6005 35.5967C14.3765 35.7031 14.1292 35.7511 13.8816 35.7363C13.634 35.7215 13.3942 35.6444 13.1844 35.5121C12.9747 35.3797 12.8019 35.1965 12.6821 34.9795C12.5624 34.7625 12.4995 34.5187 12.4994 34.2709V29.2635C10.256 28.8898 8.23488 27.6878 6.83665 25.8955C5.43841 24.1033 4.76504 21.8516 4.94998 19.5867C5.13491 17.3218 6.16466 15.2089 7.83516 13.6668C9.50566 12.1247 11.695 11.2659 13.9694 11.2605C16.3742 11.261 18.6805 12.2159 20.3808 13.9152C22.0811 15.6144 23.0363 17.9189 23.0363 20.3217C23.0363 25.8932 20.9803 29.7139 18.8811 32.1383C18.0329 33.1245 17.065 34.0014 15.9999 34.7487C15.5942 35.0364 15.1707 35.298 14.7318 35.5321L14.6436 35.5771L14.6162 35.5889L14.6044 35.5947L14.6005 35.5967ZM7.84044 20.3217C7.84044 23.7018 10.5844 26.4435 13.9694 26.4435C14.3592 26.4435 14.7331 26.5982 15.0088 26.8736C15.2845 27.1491 15.4394 27.5227 15.4394 27.9122V31.4509C15.8274 31.1062 16.243 30.695 16.6546 30.2172C18.3539 28.2569 20.0963 25.102 20.0963 20.3217C20.0676 18.7168 19.4093 17.1874 18.2633 16.0626C17.1172 14.9377 15.5749 14.3075 13.9684 14.3075C12.3619 14.3075 10.8196 14.9377 9.6735 16.0626C8.52742 17.1874 7.86917 18.7168 7.84044 20.3217ZM35.6705 35.5967C35.4465 35.7031 35.1992 35.7511 34.9516 35.7363C34.704 35.7215 34.4642 35.6444 34.2544 35.5121C34.0447 35.3797 33.8719 35.1965 33.7521 34.9795C33.6324 34.7625 33.5695 34.5187 33.5694 34.2709V29.2635C31.326 28.8898 29.3049 27.6878 27.9066 25.8955C26.5084 24.1033 25.835 21.8516 26.02 19.5867C26.2049 17.3218 27.2347 15.2089 28.9052 13.6668C30.5757 12.1247 32.765 11.2659 35.0394 11.2605C37.4443 11.261 39.7505 12.2159 41.4508 13.9152C43.1511 15.6144 44.1063 17.9189 44.1063 20.3217C44.1063 25.8932 42.0503 29.7139 39.9511 32.1383C39.1029 33.1245 38.135 34.0014 37.0699 34.7487C36.637 35.0544 36.1838 35.3306 35.7136 35.5752L35.6862 35.5908L35.6744 35.5947L35.6705 35.5967ZM28.9104 20.3217C28.9104 23.7018 31.6544 26.4435 35.0394 26.4435C35.4292 26.4435 35.8031 26.5982 36.0788 26.8736C36.3545 27.1491 36.5094 27.5227 36.5094 27.9122V31.4509C36.8974 31.1062 37.313 30.695 37.7246 30.2172C39.4239 28.2569 41.1663 25.102 41.1663 20.3217C41.1376 18.7168 40.4793 17.1874 39.3333 16.0626C38.1872 14.9377 36.6449 14.3075 35.0384 14.3075C33.4319 14.3075 31.8896 14.9377 30.7435 16.0626C29.5974 17.1874 28.9392 18.7168 28.9104 20.3217Z" fill="black"/>
              </svg>
              <p className="text-gray-700 italic">{testimonial.text}</p>
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={50}
                height={50}
                className="rounded-full"
              />
              <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
              <p className="text-gray-500 text-sm">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Partnership */}


      {/* Footer */}
      <footer id="contactPage" className="bg-[#F8F8F8] py-20 text-gray-700">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-6">
          <div className="md:w-1/3">
            <img src="/images/LOGO_blue_png.png" alt="Internnook Logo" className="h-8 mb-2 mx-auto md:mx-0" />
            <p className="text-sm">Internship made easy, <br /> right at your nook.</p>
          </div>
          <div className="md:w-1/3">
            <h4 className="font-semibold text-blue-600">Office</h4>
            <p className="text-sm">
              MT Villanueva Avenue, <br />
              Liboton, Naga City, <br />
              Philippines
            </p>
          </div>
          <div className="md:w-1/3">
            <h4 className="font-semibold text-blue-600">Contact</h4>
            <p className="text-sm">(+63) 9482650912</p>
            <p className="text-sm">hello@internnook.com</p>
          </div>
          <div className="md:w-1/3">
            <h4 className="font-semibold text-blue-600">Follow us</h4>
            <div className="flex justify-center md:justify-start gap-4 mt-2">
              <a href="https://www.facebook.com/ncftigretbi" className="text-gray-500 hover:text-blue-600"> </a>
              <a href="https://www.facebook.com/ncftigretbi" className="text-gray-500 hover:text-blue-600"></a>
              <a href="https://www.facebook.com/ncftigretbi" className="text-gray-500 hover:text-blue-600"></a>
            </div>
          </div>
          <div className="text-center text-sm text-gray-500 mt-8">
            © 2024, Internnook. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
