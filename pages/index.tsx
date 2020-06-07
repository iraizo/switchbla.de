import React from "react";
import {AiOutlineFundProjectionScreen, AiOutlineFund, AiFillGithub, AiFillMail, AiOutlineTwitter, AiFillProject, AiOutlineArrowDown} from "react-icons/ai";
import Particles from 'react-particles-js';
import Project from "../components/project";
export default class Index extends React.Component<{}, {year: number}> {

    constructor(props) {
        super(props);

        const d = new Date();
        this.state = { year: d.getFullYear()};
      }


    componentDidMount() {

    }

    render() {
        return (    
            <div id="App">
                <div id="wrapper">
                <audio id="audio-element"
                src="./assets/audio.mp3"
                autoPlay loop
                />
                    <div id="navbar" className="select-none text-white flex flex-row items-center justify-between bg-gray-800 py-4 sm:py-2 md:py-4 lg:py-4 xl:py-8">
                        <p className="ml-4 mr-8 text-2xl">SWITCHBLA.DE</p>

                            <div className="flex flex-row items-center text-3xl font-medium mr-2 ">

                            <a className="mx-2 hover:text-indigo-600 duration-500" href="twitter.com/yvngraizo"><AiOutlineTwitter/></a>
                            <a className="mx-2 hover:text-indigo-600 duration-500" href="github.com/iraizo"><AiFillGithub/></a>
                            <a className="mx-2 hover:text-indigo-600 duration-500" href="mailto:admin@weeb.tech"><AiFillMail/></a>
                            <a className="mx-2 hover:text-indigo-600 duration-500" href="#projects"><AiFillProject/></a>

                            </div>
                    </div>

                    <div id="main" className="bg-gray-800 w-full h-full min-h-screen min-w-screen fixed" style={{zIndex: 9999}}>
                        <Particles style={{position: "absolute"}}/>
                        <div id="center" className="text-white flex flex-col items-center justify-center">
                            <div className="flex flex-row">
                                <h1 className="text-base sm:text-xl md:text-4xl lg:text-5xl xl:text-6xl">Hey, I'm Raizo.</h1>
                            </div>
                            <div id="content" className="">
                                <p className="mx-8 text-base sm:text-lg md:text-3xl lg:text-4xl xl:text-5xl">Web & Software developer.</p>
                            </div>
                        </div>
                        <div id="projects-notice" className="my-16 text-white flex flex-col items-center justify-center">
                            <p className="text-base sm:text-base md:text-2xl lg:text-3xl xl:text-4xl">Projects</p>
                            <p className="text-base sm:text-base md:text-2xl lg:text-3xl xl:text-4xl"><AiOutlineArrowDown/></p>
                        </div>
                        <div id="projects" className="text-black flex flex-row justify-center">
                            <Project link="https://github.com/iraizo/discordGrabber/" description="Steals information from the discord process via signature scanning." header="discordGrabber"/>
                            <Project link="https://jelbrek.icu/" description="The image uploader designed by jailbreakers, for jailbreakers. Without compression and with the highest quality." header="Jelbrek.icu"/>
                            <Project link="https://github.com/iraizo/stringfuscator-cpp" description="A string obfuscator made in C++ using AES." header="stringfuscator-cpp"/>
                        </div>
                        <footer className="flex flex-row justify-center items-center text-center text-white inset-x-0 bottom-0 absolute">
                            <p>&copy; Copyright {this.state.year}, raizo.</p>
                        </footer>
                    </div>
                </div>
            </div>
        )
    }


}