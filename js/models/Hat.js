
export default class Hat{
    name = '';
    size = '';
    color = '';
    material = '';
    floats = '';

    constructor(props) {
        this.name = props.name ?? '';
        this.size = props.size ?? '';
        this.color = props.color ?? '';
        this.material = props.material ?? '';
        this.floats = props.floats ?? '';
    }
}