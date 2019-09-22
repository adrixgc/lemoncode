import * as React from 'react';
const styles = require('./styles/styles.scss');
const logo = require('./img/logo.png')

interface Props {
    initialName: string;
}

interface State {
    name: string;
}

export class HelloComponent extends React.Component<Props, State> {

    constructor(props: Props){
        super(props);
        this.state = {name: this.props.initialName};
    }

    sayHello(newName: string) {
        this.setState({name: newName})
    }

    render() {
        return <>
            <div className={styles.box}>
                <img src={logo} className={styles.logo}/>
                <span className={styles.title}>Hola: {this.state.name}</span>
            </div>
            <div>
                <span>Inserta tu nombre: </span>
                <input type="text" onChange={(e) => this.sayHello(e.target.value)} />
            </div>
        </>;
    }

}

/*const Index = () => {
  return <>
    <div className={styles.box}>
      <span className={styles.title}>Hola:</span>
    </div>
    <div>
      <input type="text" onChange={(e) => sayHello(e.target.value)}/>
    </div>
  </>;
};

const sayHello = (name: string) => {
  console.log(name);
};

*/