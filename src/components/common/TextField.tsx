import TextField from '@mui/material/TextField';

interface Props {
    required: boolean;
    id: string | undefined;
    label: string;
    defaultValue: string | number | undefined;
    width: string;
    onChange?: any;
    value?: string;
}

const MuiTextField = ({ required, id, label, defaultValue, width, onChange, value }: Props) => {
    
const style = {
    margin: "1rem",
    width: width,
}

    return (
        <TextField
            style={style}
            size="small"
            required={required}
            id={id}
            label={label}
            defaultValue={defaultValue}
            onChange={onChange}
            value={value}
        />
    )
}

export { MuiTextField }