import React from "react";
import {AiFillGithub, AiOutlineTwitter} from "react-icons/ai";
import {DiNpm} from "react-icons/di";
import {FaTelegramPlane, FaSpotify} from "react-icons/fa";
export default class Index extends React.Component {

    componentDidMount() {


    }

    render() {
        return (    
            <div id="App">
                <div id={"wrapper"} style={{backgroundColor: "#18191a"}} className={"h-screen w-screen text-gray-600"}>

                    <div id={"main"} className={"flex flex-col content-center items-center justify-center pt-24"}>
                        <h1 className={"pb-4 text-3xl"}>Hi, I'm Loron Gröbner, also known as raizo.</h1>

                        <p>I am a self taught soft & web developer. Powered by VS code, clang and espresso.</p>
                        <p>I mainly code backend in TypeScript and code software in C++ or Python.</p>

                        <p className={"pt-4"}>Got any questions? <a className={"hover:text-blue-500 duration-500 text-green-400"} href={"mailto:admin@weeb.tech"}>Contact me.</a></p>
                    </div>

                    <div id={"work"} className={"flex flex-col content-center items-center justify-center pt-24"}>

                        <h1 className={"text-3xl pb-2"}>Recent work</h1>

                        <div id={"list"} className={"flex flex-col text-center"}>
                            <a className={"px-2 hover:text-blue-500 duration-500 text-green-400"} href={"https://github.com/iraizo/chip8emu"}>chip8emu</a>
                            <a className={"px-2 hover:text-blue-500 duration-500 text-green-400"} href={"https://github.com/iraizo/truckersmp.ts"}>truckersmp.ts</a>
                            <a className={"px-2 hover:text-blue-500 duration-500 text-green-400"} href={"https://github.com/iraizo/discordGrabber"}>discordGrabber</a>
                            <a className={"px-2 hover:text-blue-500 duration-500 text-green-400"} href={"https://github.com/iraizo/nvidia-overlay-hijack"}>nvidia overlay hijack</a>

                        </div>
                    </div>

                    <br/>
                    <div id={"work"} className={"flex flex-col content-center items-center justify-center pt-24"}>
                        <h1 className={"text-3xl"}>Lets be internet BFFs</h1>
                        <div className={"flex flex-row text-4xl py-2"}>
                            <a className={"px-2 hover:text-blue-500 duration-500 text-green-400"} href={"https://github.com/iraizo"}><AiFillGithub/></a>
                            <a className={"px-2 hover:text-blue-500 duration-500 text-green-400"} href={"https://t.me/iraizo"}><FaTelegramPlane/></a>
                            <a className={"px-2 hover:text-blue-500 duration-500 text-green-400"} href={"https://twitter.com/yvngraizo"}><AiOutlineTwitter/></a>
                            <a className={"px-2 hover:text-blue-500 duration-500 text-green-400"}href={"https://www.npmjs.com/~iraizo"}><DiNpm/></a>
                            <a className={"px-2 hover:text-blue-500 duration-500 text-green-400"}href={"https://open.spotify.com/user/g3bhir4x3t8no4nx5f907636x"}><FaSpotify/></a>
                        </div>
                    </div>

                </div>
                <div className={"flex flex-col content-center items-center justify-center"}>
                    <footer style={{bottom: "0", height: "40px", position: "absolute"}} className={"text-gray-600"}><a className={"hover:text-blue-500 duration-500 text-green-400"}href={"mailto:admin@weeb.tech"}>admin@weeb.tech</a> © Loron Gröbner. All rights Reserved.</footer>
                </div>
            </div>
        )
    }


}
