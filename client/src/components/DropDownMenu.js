import {Box, Button, Menu} from '@mui/material';
export default function DropDownMenu({ buttonContent, menuContent, anchorEl, setAnchorEl } ) {

    const openMenu = event => setAnchorEl(event.currentTarget);
    const closeMenu = () => setAnchorEl(null);

    return (
        <Box>
            <Button onClick={openMenu}>
                {buttonContent}
            </Button>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={closeMenu}>
                {menuContent}
            </Menu>
        </Box>
    )
}
//isMenuOpen al click del bottone diventa l'emento nel dom (come il bottone) che il menu usa come ancora
//quindi o è null o è un elemento DOM
