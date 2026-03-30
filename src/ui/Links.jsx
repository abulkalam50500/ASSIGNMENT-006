import React from 'react';

const Links = ({link}) => {
 const {menu_name,menu_url} = link;
    return (
        <div>
            <li>
                <a className='font-semibold text-[#101727]' href={menu_url}>{menu_name}</a>
            </li>
        
        </div>
    );
};

export default Links;