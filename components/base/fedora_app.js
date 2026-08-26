import React, { Component } from 'react'

export class FedoraApp extends Component {

    openApp = () => {
        this.props.openApp(this.props.id);
    }

    render() {
        return (
            <div
                className="p-1 m-px z-10 bg-white bg-opacity-0 hover:bg-opacity-20 focus:bg-fd-blue focus:bg-opacity-50 focus:border-fdb-blue focus:border-opacity-100 border border-transparent outline-none rounded select-none w-24 h-20 flex flex-col justify-start items-center text-center text-xs font-normal text-white "
                id={"app-" + this.props.id}
                onDoubleClick={this.openApp}
                tabIndex={0}
            >
                <img width="40px" height="40px" className="mb-1 w-10" src={this.props.icon} alt={"Fedora " + this.props.name} />
                {this.props.name}

            </div>
        )
    }
}

export default FedoraApp
