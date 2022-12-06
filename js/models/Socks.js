
export default class Socks{
    name = '';
    color = '';
    height = '';
    gender = '';
    constructor(props){
        this.name = props.name ?? '';
        this.color = props.color ?? '';
        this.height = props.height ?? '';
        this.gender = props.gender ?? '';
    }
}