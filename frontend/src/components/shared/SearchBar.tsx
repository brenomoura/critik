import Input from '@mui/material/Input';


const ariaLabel = { 'aria-label': 'description' };

const SearchBar = () => {
    return (
        <div>
            <Input placeholder="Search a product" inputProps={ariaLabel} />
        </div>
    )
}

export default SearchBar