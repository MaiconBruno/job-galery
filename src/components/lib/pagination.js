import React from 'react';

const MAX_ITEMS = 9;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

export default function Pagintation({ limit, total, offset, setOffset}) {

    const current = offset ? (offset / limit) + 1 : 1;
    const pages = Math.ceil(total / limit);
    const first = Math.max(current - MAX_LEFT, 1);

    
    return (
        <ul style={{listStyle:'none', display:'flex'}}>
            {Array.from({ length: MAX_ITEMS }).map((_, index) => index + first).map((page) => (
                <li>
                    <button onClick={() => setOffset((page - 1) * limit)}>{page}</button>
                </li>
            ))}
        </ul>
    );
}


