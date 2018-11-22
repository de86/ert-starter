import * as React from 'react';

interface IHelloProps {
    name: string;
}

export default class Hello extends React.PureComponent<IHelloProps, {}> {
    render (): React.ReactNode {
        return (
            <div>{`gsddfafafgd ${this.props.name}`}</div>
        );
    }
}
