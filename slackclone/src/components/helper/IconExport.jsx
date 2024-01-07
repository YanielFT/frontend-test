import NumbersIcon from '@mui/icons-material/Numbers';
import PersonIcon from '@mui/icons-material/Person';

export const Icons = [
    {
        name: 'numberSymbol',
        icon: <NumbersIcon />
    },
    {
        name: 'person',
        icon: <PersonIcon />
    },
]
const IconExport = ({ iconText }) => {
    return (
        Icons.find(icon => icon.name === iconText).icon
    )
}

export default IconExport