import React from "react"
import Link from 'next/link'

interface ProjectProp {
    header: string,
    description: string,
    link: string,
}

export default class Project extends React.Component<ProjectProp> {
    render() {
        return (
            <div className="px-4 py-8 bg-gray-400 max-w-xs rounded flex flex-col items-center justify-center z-10 m-4 relative text-center">
                <div id="header wrapper" className="flex flex-row items-center justify-center w-full absolute inset-x-0 top-0 mt-4">
                    <h1 className="text-2xl inset-x-0 top-0">{this.props.header}</h1>
                </div>
                <div id="body wrapper" className="flex flex-row items-center justify-center w-full my-8">
                    <p>{this.props.description}</p>
                </div>
                <div id="button wrapper" className="inset-x-0 bottom-0 absolute flex-flex-row justify-center items-center mb-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full my-2">
                    <Link passHref={true} href={this.props.link}>Visit</Link>
                </button>
                </div>
            </div>
        )
    }
}
