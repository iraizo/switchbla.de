import React from "react"

interface ProjectProp {
    header: string,
    description: string,
}

export default class Project extends React.Component<ProjectProp> {
    render() {
        return (
            <div className="px-4 py-32 bg-gray-400 rounded flex flex-col items-center mx-8">
                <h1>{this.props.header}</h1>
                <p>{this.props.description}</p>
            </div>
        )
    }
}
