import { ButtonGray } from "./button";

export default function AboutCompany(){
    return(
        <section className="flex flex-col   max-w-[1440px] items-center">
            <div className="flex flex-col md:flex-row  justify-center w-3/4 text-center items-center m-[5rem]">
                <h1 className="headline-two text-custom-purple-dark">A brand dedicated to excellence in healthcare, innovation, and exceptional service.</h1>
            </div>
            <div className="flex flex-col w-[100%] items-center    justify-center md:flex-row">
                <div className="md:w-[40%] w-[80%]  md:items-start items-center   m-[4rem] flex flex-col justify-between ">
                    <div className="space-y-[1rem]">
                    <h1 className="headline-three text-custom-purple-dark text-center md:text-left">From a local initiative to a trusted name with a global presence, serving communities everywhere</h1>
                    <p className="body-medium text-custom-purple-light text-center md:text-left">When we envisioned <span className="font-bold">Avion</span>, the goal was clear: provide accessible, top-quality medical equipment and services for everyone in need.
                        <br /><br />Compassionately crafted solutions and 24/7 support define what we stand for, making our platform the go-to choice for healthcare providers and individuals alike.</p>
                    </div>
                    <ButtonGray className="mt-4 p-1">  Get in Touch  </ButtonGray>
                </div>
                <div className="md:max-w-[50%] w-[80%] overflow-hidden"><img src="/about1.png" alt="" /></div>
            </div>
            <div className="flex   items-center flex-col md:flex-row">
                <div className="md:max-w-[50%] w-[80%]     overflow-hidden"><img src="/about2.png" alt="" /></div>
                <div className="md:w-[40%] w-[80%]  m-[4rem] md:items-start items-center flex flex-col justify-between ">
                    <div className="space-y-[1rem]">
                    <h1 className="headline-three text-center md:text-left text-custom-purple-dark ">Our service isn’t just personal; it’s exceptionally tailored for your healthcare needs</h1>

                    <p className="body-medium text-center md:text-left text-custom-purple-light">
                        When we founded <span className="font-bold">Avion</span>, the mission was simple: deliver top-notch medical equipment and services that are accessible to everyone.
                            <br /><br />Thoughtfully designed solutions and compassionate care are at the heart of what we do, making us a trusted partner for patients and providers worldwide.</p>
                    </div>
                    <ButtonGray className="mt-4 p-1]">  Get in Touch  </ButtonGray>
                </div>
            </div>
        </section>
    )
}