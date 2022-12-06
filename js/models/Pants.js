
export default class Pants{
    name = '';
    size = '';
    color = '';
    style = '';

    constructor(props) {
        this.name = props.name ?? '';
        this.size = props.size ?? '';
        this.style = props.style ?? '';
        this.color = props.color ?? '';
    }
}
