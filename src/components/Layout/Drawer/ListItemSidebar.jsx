import Divider from '@mui/material/Divider';
import ItemButton from './ItemButton';
import React from 'react';


const items = [
    {
        title: 'Channels',
        level2: [
            { title: 'accounting', icon: 'numberSymbol' },
            { title: 'design-team-sf', icon: 'numberSymbol' },
            { title: 'help-design', icon: 'numberSymbol' }
        ]
    },
    {
        title: 'Direct messages',
        level2: [
            { title: 'Milo j', icon:'person', chat: '1' },
            { title: 'Tirone Gonzalez' , icon:'person', chat: '2'},
        ]
    }
];


const MainListItems = ( {onClose}) => {


    return <>
        {items.map(item => <React.Fragment key={item.title}><ItemButton key={item.title} title={item.title} items={item.level2} onClose = {onClose} />
            <Divider sx={{ my: 1 }} /></React.Fragment>
        )}

    </>
};
export default MainListItems;
